const ShowUserName = ({model, color, km, changeCar}) => {
  return (
    <>
    <h2>Props</h2>

    <p> O modelo do carro é {model}, a cor é {color} e o km é {km}</p>

    <button onClick={changeCar}>Mudar de carro</button>
    </>
  )
}

export default ShowUserName