import React from 'react'

const GameOver = ({ changeStage }) => {
  return (
    <>
      <div>GameOver</div>

      <button className="screen-btn" onClick={() => changeStage('start')}> Resetar Jogo</button>
    </>
  )
}

export default GameOver