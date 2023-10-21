import { useSearchParams } from "react-router-dom"
const Search = () => {
  const [ searchParams ] = useSearchParams()
  const query = searchParams.get("q")
  
  return (
    <div> Search: {query}</div>
  )
}

export default Search