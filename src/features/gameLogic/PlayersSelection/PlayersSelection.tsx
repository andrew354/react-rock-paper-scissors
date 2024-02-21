import PlayerBox from '../PlayerBox/PlayerBox'
import { CHOICES, DEFAULT_CHOICES } from '../../../hooks/useGameLogic'
import { IChoice } from '@/pages/landing/Landing'
import { useGameContext } from '@/providers/GameProvider'

interface IPlayersSectionProps {
  runTimer: boolean
  timer: number
  playerAChoice: IChoice
  playerBChoice: IChoice
  getPlayerAScore: number
  getPlayerBScore: number
}

const PlayersSection = ({
  runTimer,
  timer,
  playerAChoice,
  playerBChoice,
}: IPlayersSectionProps) => {
  const { totalScore } = useGameContext()

  return (
    <div className="flex gap-0 md:gap-20 items-center">
      <div>
        <PlayerBox
          animate={runTimer ? true : false}
          image={runTimer ? CHOICES[0].img : playerAChoice.img}
          choice={runTimer ? CHOICES[0].name : playerAChoice.name}
          playerColor="blue"
          name="Player A"
          totalScore={totalScore.playerAScore}
        />
      </div>
      <div className="text-center text-3xl md:text-7xl min-w-16">{timer}</div>
      <div>
        <PlayerBox
          rotate
          animate={runTimer ? true : false}
          image={runTimer ? DEFAULT_CHOICES[1].img : playerBChoice.img}
          choice={runTimer ? DEFAULT_CHOICES[1].name : playerBChoice.name}
          playerColor="red"
          name="Player B"
          totalScore={totalScore.playerBScore}
        />
      </div>
    </div>
  )
}

export default PlayersSection
