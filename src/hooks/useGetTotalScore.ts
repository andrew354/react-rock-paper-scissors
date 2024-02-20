import { useGameContext } from '@/providers/GameProvider'

export const useGetTotalScore = () => {
  const { totalScore } = useGameContext()

  const getPlayerAScore = () => {
    return totalScore.playerAScore
  }
  const getPlayerBScore = () => {
    return totalScore.playerBScore
  }
  const getTieScore = () => {
    return totalScore.tieScore
  }

  return {
    totalScore,
    getPlayerAScore,
    getPlayerBScore,
    getTieScore,
  }
}
