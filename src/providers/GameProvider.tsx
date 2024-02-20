import { useState, useEffect, ReactNode, useContext, createContext } from 'react'

interface ITotalScore {
  maxGamesNumber: number
  numberGamePlayed: number
  playerAScore: number
  playerBScore: number
  tieScore: number
}

type GameContextProviderProps = {
  children: ReactNode
}

type GameContextProviderTypes = {
  totalScore: ITotalScore
  setTotalScore: React.Dispatch<React.SetStateAction<ITotalScore>>
}

export const GameContext = createContext({} as GameContextProviderTypes)

export const GameProvider = ({ children }: GameContextProviderProps) => {
  const [totalScore, setTotalScore] = useState(() => {
    const savedTotalScore = localStorage.getItem('totalScore')
    if (savedTotalScore) {
      return JSON.parse(savedTotalScore)
    } else {
      return {
        maxGamesNumber: 1000,
        numberGamePlayed: 0,
        playerAScore: 0,
        playerBScore: 0,
        tieScore: 0,
      }
    }
  })

  useEffect(() => {
    localStorage.setItem('totalScore', JSON.stringify(totalScore))
  }, [totalScore])

  return (
    <GameContext.Provider value={{ totalScore, setTotalScore }}>{children}</GameContext.Provider>
  )
}

export const useGameContext = () => {
  const { totalScore, setTotalScore } = useContext(GameContext)

  return { totalScore, setTotalScore }
}
