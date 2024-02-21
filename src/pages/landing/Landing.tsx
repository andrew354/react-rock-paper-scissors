import Button from '@/components/Button/Button'
import PlayersSection from '@/features/gameLogic/PlayersSelection/PlayersSelection'
import ShowScore from '@/features/gameLogic/ShowScore/ShowScore'
import Title from '@/components/Title/Title'
import { useGameLogic } from '@/hooks/useGameLogic'
import { useTimer } from '@/hooks/useTimer'
import { useGameContext } from '@/providers/GameProvider'
import { useEffect } from 'react'

export interface IChoice {
  name: string
  img: string
}

const Landing = () => {
  const { totalScore } = useGameContext()
  const { playerAChoice, playerBChoice, gameResult, setGameResult, getPlayerChoices, playGame } =
    useGameLogic()
  const { timer, runTimer, startTimer } = useTimer(3)

  useEffect(() => {
    if (runTimer && !timer) {
      playGame()
    }
  }, [runTimer, timer, playGame])

  const startGame = () => {
    setGameResult('')
    startTimer()
    getPlayerChoices()
  }

  return (
    <div className="md:mt-14 mt-5 h-screen relative flex flex-col justify-center items-center">
      <Title title="Rock, Paper, Scissors" />
      <div>
        <ShowScore />
        {gameResult ? (
          <div className="flex justify-center">
            <p className="text-center text-lg">
              Final Score: <br /> <strong>{gameResult}</strong>
            </p>
          </div>
        ) : (
          <div className="h-6"></div>
        )}
        <PlayersSection
          runTimer={runTimer}
          getPlayerAScore={totalScore.playerAScore}
          getPlayerBScore={totalScore.playerBScore}
          timer={timer}
          playerAChoice={playerAChoice}
          playerBChoice={playerBChoice}
        />
        <Button content="Play" onClick={startGame} />
      </div>
    </div>
  )
}

export default Landing
