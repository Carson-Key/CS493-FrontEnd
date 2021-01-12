const Page = (props) => {
  const { children } = props

  return (
    <div className="bg-gray-400">
      {children}
    </div>
  )
}

export default Page;
