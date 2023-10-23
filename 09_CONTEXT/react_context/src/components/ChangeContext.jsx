import { useContext } from "react"
import { CounterContext } from "../context/CounterContext"

const ChangeContext = () => {
  const { counter, setCounter } = useContext(CounterContext)
  return (
    <button onClick={() => setCounter(counter + 1)}> Mudar o contexto </button>
  )
}

export default ChangeContext