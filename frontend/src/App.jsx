import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Rules from './pages/Rules'
import About from './pages/About'
import Community from './pages/Community'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/about" element={<About />} />
        <Route path="/community" element={<Community />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App