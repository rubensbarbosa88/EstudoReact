import { useState } from 'react'
import './App.css'
import florest from './assets/florest.jpg'
import ManageData from './components/ManageData'
import ListRender from'./components/ListRender'
import ConditionalRender from './components/ConditionalRender'
import CarDetails from './components/CarDetails'
import Message from './components/Message'
import MessgaeChange from './components/MessgaeChange'

function App() {
  const [car, setCar] = useState({
    model:"Vectra",
    color:"Vermelho",
    km:"10000"
  })
  
  const changeCar = () => setCar({
    model:"Celta",
    color:"Prata",
    km:"190000"
  })

  const [msg, setMsg] = useState('Teste')

  return (
    <>
      <div>
        <h2>Avançando no React</h2>
        <img height="400" width="400" src="/city.jpg" alt="Cidade" />
        <img height="400" width="400" src={florest} alt="Cidade" />

        <ManageData />
        <ListRender />
        <ConditionalRender />
        <CarDetails model={car.model} color={car.color} km={car.km} changeCar={changeCar}/>
        <Message msg={msg}/>
        <MessgaeChange changeMsg={setMsg}/>
      </div>
    </>
  )
}

export default App
