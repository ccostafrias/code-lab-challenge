import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import "@theme-toggles/react/css/Classic.css"
import { Classic } from "@theme-toggles/react"

function Header() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  })

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")

    if (savedTheme) {
      setTheme(savedTheme)
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      setTheme(prefersDark ? "dark" : "light")
    }
  }, [])

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
    console.log("TROCOU")
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
  );
}

export default Header;
