import './App.css'
import { useState, useEffect } from 'react'

function App() {
  const url = 'http://localhost:3000/products'
  const [products, setProducts] = useState([])
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  async function getProducts() {
    const response = await fetch(url)
    const data = await response.json()
    setProducts(data)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const payload = { name, price}

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })

    await getProducts()
    return await response.json()
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

      <hr />

      <form onSubmit={handleSubmit}>
        <label style={{display: 'block', margin: '20px 0'}}> 
          <span style={{marginRight: '10px'}}>Nome</span>
          <input type="text" value={name} onChange={e => setName(e.target.value)} />
        </label>
        <label style={{display: 'block', marginBottom: '20px'}}> 
          <span style={{marginRight: '10px'}}>Preço</span>
          <input type="number" value={price} onChange={e => setPrice(e.target.value)} />
        </label>

        <button type='submit'> Criar </button>
      </form>
    </>
  )
}

export default App
