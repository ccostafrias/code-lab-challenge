import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import "@theme-toggles/react/css/Classic.css"
import { Classic } from "@theme-toggles/react"

function Header() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light"
  })

  useEffect(() => {
    // pega o tema salvo em localStorage
    const savedTheme = localStorage.getItem("theme")

    // se tiver salvo, pega diretamente
    if (savedTheme) {
      setTheme(savedTheme)
    } else { // se não, pega da preferência do navegador
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      setTheme(prefersDark ? "dark" : "light")
    }

    // só então adicionará uma nova classe para body, 
    const timer = setTimeout(() => {
      document.body.classList.add('transitions-activated')
    }, 50)

    // função de limpeza para remover o timer se o componente for desmontado
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // coloca uma classe em <html> para fins de controlar o tema com CSS
    document.documentElement.className = theme
    localStorage.setItem("theme", theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  }

  return (
    <header className="header">
      <div className='header-left'>
        {/* <Link to="/">
          <h1>PortalUSP</h1>
        </Link> */}
        <Classic toggled={theme == 'light' ? true : false} onToggle={toggleTheme} duration={750} />
      </div>
      <div className='header-right'>
        <nav className="nav-links">
          <Link to="/">Cadastro</Link>
        </nav>
        <nav className="nav-links">
          <Link to="/notas">Painel</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header;
