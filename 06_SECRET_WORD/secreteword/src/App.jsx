import { useState } from 'react'
import './App.css'
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
  const [pickedWord, setPickedWord] = useState('')
  const [pickedCategory, setPickedCategory] = useState('')
  const [letters, setLetters] = useState([])

  const randomNumber = n => {
    return Math.floor(Math.random() * n)
  }
  const startGame = async () => {
    const categories = Object.keys(wordsList)
    const category = categories[randomNumber(categories.length)]
    const word = wordsList[category][randomNumber(wordsList[category].length)]
    const wordletters = word.split('').map(l => l.toLowerCase())

    setPickedWord(word)
    setPickedCategory(category)
    setLetters(wordletters)
  }

  return (
    <>
      {gameStage === 'start' && <StartScreen startGame={startGame} />}
      {gameStage === 'game' && <Game changeStage={changeStage} />}
      {gameStage === 'gameover' && <GameOver changeStage={changeStage} />}
    </>
  )
}

export default App