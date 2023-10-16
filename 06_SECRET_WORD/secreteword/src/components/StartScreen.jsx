import './StartScreen.css'

const StartScreen = ({startGame}) => {
  return (
    <>
      <h1 className='title'> Secret Word </h1>
      <p className='subtitle-yellow'>Clique no botão baixo para começar a jogar</p>

      <button className='screen-btn' onClick={startGame}> Começar o jogo</button>
    </>
  )
}

export default StartScreen