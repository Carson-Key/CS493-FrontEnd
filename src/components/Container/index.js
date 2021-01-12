const Container = (props) => {
  const { children, className } = props

  return (
    <div className={"bg-white " + className}>
      {children}
    </div>
  )
}

export default Container;
