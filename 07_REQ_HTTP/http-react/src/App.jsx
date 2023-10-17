import './App.css'
import { useState, useEffect } from 'react'

function App() {
  const [products, setProducts] = useState([])

  async function getProducts() {
    const url = 'http://localhost:3000/products'
    const response = await fetch(url)
    const data = await response.json()
    setProducts(data)
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <>
      <h1> Lista de Produtos </h1>
      <ul>
        {products.map(({id, name, price}) => 
          <li key={id}> {name} R$ {price}</li>
        )}
      </ul>
    </>
  )
}

export default App
