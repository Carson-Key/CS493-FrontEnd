const Button = (props) => {
  const { onClick, children, className, black, blue } = props
  let buttonClass = "px-4 py-1"

  if (black) {
    buttonClass += " bg-black text-white "
  } else if (blue) {
    buttonClass += " bg-blue-300 text-white "
  }

  return (
    <button type="button" onClick={onClick} className={className + buttonClass}>
      {children}
    </button>
  )
}

export default Button;
