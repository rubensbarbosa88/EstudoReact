// import { useState } from 'react'
import './App.css'
import FirstComponent from './components/FirstComponent'
import TemplateExpressions from './components/TemplateExpressions'
import Events from './components/Events'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1> FUNDAMENTOS</h1>
        <h2> Criando Componentes</h2>

        <p>Primeiro componente</p>
        <FirstComponent></FirstComponent>

        <br />
        <p> Componente com Template Expressions</p>
        <TemplateExpressions />

        <p>Eventos</p>
        <Events />
      </div>
    </>
  )
}

export default App
