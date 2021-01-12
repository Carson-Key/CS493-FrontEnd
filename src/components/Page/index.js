const Page = (props) => {
  const { children } = props

  return (
    <div className="absolute bg-gray-400 h-screen w-screen">
      {children}
    </div>
  )
}

export default Page;
