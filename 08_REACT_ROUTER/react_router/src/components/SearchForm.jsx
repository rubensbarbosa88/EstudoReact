import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SearchForm = () => {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')

  function handleSubmit (e) {
    e.preventDefault()

    navigate(`search?q=${query}`)
  }
  return (
    <form onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={e => setQuery(e.target.value)}/>
        <button type='submit'>IR</button>
    </form>
  )
}

export default SearchForm