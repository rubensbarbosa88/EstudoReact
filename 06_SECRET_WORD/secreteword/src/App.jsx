import './App.css'
import { useState, useEffect } from 'react'
import StartScreen from './components/StartScreen'
import Game from './components/Game'
import GameOver from './components/GameOver'
import { wordsList } from './data/words'

function App() {
  const stages = {
    start: 'start',
    game: 'game',
    gameover: 'gameover'
  }

  const [gameStage, setGameStage] = useState('start')
  const [pickedCategory, setPickedCategory] = useState('')
  const [letters, setLetters] = useState([])
  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState(5)
  const [score, setScore] = useState(0)


  const randomNumber = n => {
    return Math.floor(Math.random() * n)
  }
  const startGame = async () => {
    const categories = Object.keys(wordsList)
    const category = categories[randomNumber(categories.length)]
    const word = wordsList[category][randomNumber(wordsList[category].length)]
    const wordletters = word.split('').map(l => l.toLowerCase())

    // setPickedWord(word)
    setPickedCategory(category)
    setLetters(wordletters)
    setGameStage(stages.game)
  }

  const verifyLetter = letter => {
    const letterFormat = letter.toLowerCase()
    if (guessedLetters.includes(letterFormat) || wrongLetters.includes(letterFormat)) {
      return
    }

    if (letters.includes(letterFormat)) {
      setGuessedLetters(value => [ ...value, letterFormat ])
    } else {
      setWrongLetters(value => [ ...value, letterFormat ])
      setGuesses(value => value - 1)
    }
  }

  const clearTryLetters = () => {
    setGuessedLetters([])
    setWrongLetters([])
  }

  const retry = () => {
    setScore(0)
    setGuesses(5)

    setGameStage(stages.start)
  }

  useEffect(() => {
    if (guesses < 1) {
      clearTryLetters()
      setGameStage(stages.gameover)
      return
    }

    console.log(letters)
    const unique = [...new Set(letters)]
    if (guessedLetters.length === unique.length) {
      setScore(value => value + 100)
      clearTryLetters()
    }
  }, [guesses, guessedLetters])

  return (
    <>
      { gameStage === 'start' && <StartScreen startGame={startGame} /> }
      { gameStage === 'game' && <Game
        tip={pickedCategory}
        letters={letters}
        guessedLetters={guessedLetters}
        wrongLetters={wrongLetters}
        guesses={guesses}
        score={score}
        verifyLetter={verifyLetter}
      /> }
      { gameStage === 'gameover' && <GameOver score={score} retry={retry}/> }
    </>
  )
}

export default App