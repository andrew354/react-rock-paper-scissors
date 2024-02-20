import { useGameContext } from '@/providers/GameProvider'
import { useState } from 'react'

export const DEFAULT_CHOICES = [
  {
    name: 'default',
    img: '/assets/default.png',
  },
  {
    name: 'default-left',
    img: '/assets/defaultLeft.png',
  },
  {
    name: 'default-right',
    img: '/assets/rock.png',
  },
]

export const CHOICES = [
  { name: 'rock', img: '/assets/rock.png' },
  { name: 'paper', img: '/assets/paper.png' },
  { name: 'scissors', img: '/assets/scissors.png' },
]

export const useGameLogic = () => {
  const { totalScore, setTotalScore } = useGameContext()
  const [playerAChoice, setPlayerAChoice] = useState(DEFAULT_CHOICES[0])
  const [playerBChoice, setPlayerBChoice] = useState(DEFAULT_CHOICES[0])
  const [gameResult, setGameResult] = useState('')

  const getPlayerChoices = () => {
    setPlayerAChoice(CHOICES[1])
    const randomNumber = Math.floor(Math.random() * CHOICES.length)
    setPlayerBChoice(CHOICES[randomNumber])
  }

  const playGame = () => {
    if (playerAChoice.name === playerBChoice?.name) {
      setTotalScore({
        ...totalScore,
        tieScore: totalScore.tieScore + 1,
        numberGamePlayed: totalScore.numberGamePlayed + 1,
      })
      setGameResult('TIE')
    } else if (playerBChoice?.name === 'rock') {
      setTotalScore({
        ...totalScore,
        playerAScore: totalScore.playerAScore + 1,
        numberGamePlayed: totalScore.numberGamePlayed + 1,
      })
      setGameResult('Player A Wins!')
    } else if (playerBChoice?.name === 'scissors') {
      setTotalScore({
        ...totalScore,
        playerBScore: totalScore.playerBScore + 1,
        numberGamePlayed: totalScore.numberGamePlayed + 1,
      })
      setGameResult('Player B Wins!')
    }
  }

  return {
    playerAChoice,
    playerBChoice,
    gameResult,
    setGameResult,
    setPlayerAChoice,
    setPlayerBChoice,
    getPlayerChoices,
    playGame,
  }
}
