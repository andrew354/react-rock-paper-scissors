interface IPlayerBoxProps {
  name: string
  choice: string
  image: string
  playerColor: string
  totalScore: number
  animate: boolean
  rotate?: boolean
}

const PlayerBox = ({ name, choice, image, totalScore, animate, rotate }: IPlayerBoxProps) => {
  return (
    <>
      <p className="text-center font-semibold text-base my-3">{name}</p>
      <div className="rounded-md justify-center h-[180px] w-[130px] md:h-[200px] md:w-[270px] relative bg-red-400 flex items-center">
        <img
          className={`${
            animate ? 'animateObject w-full h-full' : ''
          }  bg-red-400 max-h-[100px] object-contain`}
          src={image}
          alt={choice}
        />
      </div>
      <p className="text-center my-3">Total Score: {totalScore}</p>
    </>
  )
}

export default PlayerBox
