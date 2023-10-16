const Game = ({ changeStage }) => {
  return (
    <>
      <div>Game</div>

      <button className="screen-btn" onClick={changeStage}> Finalizar Jogo</button>
    </>
  )
}

export default Game