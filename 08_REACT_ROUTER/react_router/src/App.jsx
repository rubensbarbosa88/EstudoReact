import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import NotFound from './pages/NotFound'
import SearchForm from './components/SearchForm'
import Search from './pages/Search'

function App() {

  return (
    <>
      <div>
        <h1> React Router</h1>

        <BrowserRouter>
          <NavBar />
          
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/product/:id' element={<Product />} />
            <Route path='/product/:anotherId/aee' element={<Product />} />
            <Route path='/search' element={<Search />} />
            <Route path='/redirect' element={<Navigate to="/about" />} />
            <Route path='*' element={<NotFound />} />
          </Routes>

          <SearchForm />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
