import { Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Iniciativas from './pages/Iniciativas'
import Contato from './pages/Contato'

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />

      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/iniciativas" element={<Iniciativas />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App