import { TfiMouse } from "react-icons/tfi"

function HeroBg() {
  return (
    <>
      {/* Right top shadow */}
      <div className="max-lg:hidden absolute pointer-events-none w-[35rem] h-[20rem] -right-16 -top-24 -rotate-[25deg] translate-x-40 bg-[radial-gradient(rgba(255,255,255,.075),transparent)]"></div>

      {/* Left top shadow */}
      <div className="max-lg:hidden absolute pointer-events-none w-[35rem] h-[20rem] -left-16 -top-24 rotate-[25deg] -translate-x-40 bg-[radial-gradient(rgba(255,255,255,.075),transparent)]"></div>

      {/* Grid background */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,.075)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,.075)_1px,transparent_1px)] bg-[length:100px_100px] -z-50"></div>
        <div className="absolute inset-0 bg-[linear-gradient(0deg,black,transparent)] -z-40"></div>
      </div>

      {/* Scroll Down */}
      <div className="max-lg:hidden absolute bottom-12 left-1/2 -translate-x-1/2 ml-1 flex flex-col items-center gap-3 opacity-50 text-xs">
        <TfiMouse size={20} className="opacity-80" />
        <span>Scroll Down</span>
      </div>
    </>
  )
}

export default HeroBg