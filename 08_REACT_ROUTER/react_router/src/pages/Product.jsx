import { useParams } from "react-router-dom"

const Product = () => {
const {id, anotherId} = useParams()
  return (
    <div>O Parametro é: {id || anotherId}</div>
  )
}

export default Product