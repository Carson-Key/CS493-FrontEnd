const Page = (props) => {
  const { children } = props

  return (
    <div className="bg-gray-400 h-screen">
      {children}
    </div>
  )
}

export default Page;
