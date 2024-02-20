import { useGetTotalScore } from '../../hooks/useGetTotalScore'

const ShowScore = () => {
  const { totalScore, getPlayerAScore, getPlayerBScore, getTieScore } = useGetTotalScore()
  return (
    <div className="flex justify-center flex-col items-center md:my-14 my-5">
      <p>
        Total games:{' '}
        {`${totalScore.numberGamePlayed.toString()}
				 /	${totalScore.maxGamesNumber.toString()}`}
      </p>
      <p>
        Player A wins{' '}
        {`${getPlayerAScore().toString()}
				 of	${totalScore.maxGamesNumber.toString()} games`}
      </p>
      <p>
        Player B wins{' '}
        {`${getPlayerBScore().toString()}
				 of	${totalScore.maxGamesNumber.toString()} games`}
      </p>
      <p>
        Tie:{' '}
        {`${getTieScore().toString()}
				 of	${totalScore.maxGamesNumber.toString()} games`}
      </p>
    </div>
  )
}

export default ShowScore
