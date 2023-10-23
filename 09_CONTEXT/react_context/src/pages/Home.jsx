import ChangeContext from "../components/ChangeContext.jsx"
import { useCounterContext, useTitleColorContext } from "../hooks/contextHooks.js"

const Home = () => {
  const {counter} = useCounterContext()
  const { color, dispatch } = useTitleColorContext()

  function setColorTitle (color) {
    dispatch({type: color})
  }
  return (
    <>
      <h2 style={{color}}>Home</h2>

      <p> O valor d contexto é: {counter}</p>

      <ChangeContext />

      <div>
        <button onClick={() => setColorTitle('RED')}> Vermelhor</button>
        <button onClick={() => setColorTitle('BLUE')}> Azul</button>
      </div>
    </>
  )
}

export default Home