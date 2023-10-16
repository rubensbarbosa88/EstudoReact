const GameOver = ({ score, retry }) => {
  return (
    <>
      <div>Fim de Jogo</div>

      <p style={{fontSize: '1.4rem', color: 'white'}}> Sua pontuação foi: <span style={{color: 'yellow'}}>{score}</span></p>

      <button className="screen-btn" onClick={retry}> Jogar novamente</button>
    </>
  )
}

export default GameOver