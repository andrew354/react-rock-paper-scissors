interface IButton {
  onClick: () => void
  content: string | React.ReactNode
}

const Button = ({ onClick, content }: IButton) => {
  return (
    <div className="flex justify-center md:my-20 my-8">
      <button
        className="min-w-[100px] border bg-blue-500 rounded-md py-5 px-14 font-bold text-white"
        onClick={onClick}
      >
        {content}
      </button>
    </div>
  )
}

export default Button
