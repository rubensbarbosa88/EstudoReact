import './Game.css'
import { useState, useRef } from 'react'

const Game = ({
  tip,
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
  score,
  verifyLetter
}) => {
  const [letterInput, setLetterInput] = useState('')
  const letterInputRef = useRef(null)

  const handleSubmit = e => {
    e.preventDefault()
    verifyLetter(letterInput)

    setLetterInput('')
    letterInputRef.current.focus()
  }
  return (
    <>
      <p className="points">Pontuação: {score}</p>
      <h1 className='title'> Advinhe a palavra </h1>
      <p className='subtitle'>Dica sobre a palavra: <span className='tip'>{tip}</span></p>
      <p style={{color: 'white'}}> Voce tem {guesses} tentativa(s).</p>

      <div className='wordContainer'>
        {letters.map((letter, i) => {
          return (
            <div key={i} className='letterContainer'>
              {guessedLetters.includes(letter) && <span> {letter} </span>}
            </div>
          )
        })}
      </div>

      <p style={{color: 'white'}}> Tente advinhar a palavra</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          maxLength="1"
          value={letterInput}
          ref={letterInputRef}
          onChange={e => setLetterInput(e.target.value)} />

        <button className="screen-btn" type='submit'>
          Jogar
        </button>
      </form>

      <p style={{color: 'white'}}>Letras já utilizadas:</p>
      <p style={{color: 'white', textTransform: 'uppercase'}}> { wrongLetters.join(', ') }</p>
    </>
  )
}

export default Game