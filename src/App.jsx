import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Notas from './pages/Notas';
import Header from './components/Header'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route index element={<Home />}/>
        <Route path="/notas" element={<Notas />}/>
      </Routes>
    </Router>
  )
}

export default App
