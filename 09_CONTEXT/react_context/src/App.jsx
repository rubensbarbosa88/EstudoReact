import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home.jsx'
import About from './pages/About'

function App() {

  return (
    <>
      <h1> Context API</h1>

      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/About' element={<About />}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
