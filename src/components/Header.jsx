function Header() {
  return (
    <div className="border-b border-[#23262f] h-20">
      <div className="container h-full flex items-center justify-between">
        <div className="text-3xl">
          <span className="font-extralight">Mee</span><span className="font-semibold">Coin</span>
        </div>
        <nav className="flex gap-4 items-center">
          <a href="#" className="p-2">Home</a>
          <a href="#" className="p-2">Popular</a>
          <a href="#" className="p-2">Coin List</a>
          <a href="#" className="ml-2 text-white bg-brand py-2 px-4 rounded-md flex items-center">Join Us</a>
        </nav>
      </div>
    </div>
  )
}

export default Header