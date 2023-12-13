function SectionLighting() {
  return (
    <>
      <div aria-hidden="true" className="left-1/2 -top-px w-[700px] user-select-none center pointer-events-none absolute h-1 max-w-full -translate-x-1/2 -translate-y-1/2" style={{ background: 'linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0.0) 0%, rgba(255,255,255,.5) 50%, rgba(0, 0, 0, 0) 100%)' }}></div>
      <div aria-hidden="true" className="left-1/2 top-0 h-[200px] w-[500px] user-select-none center pointer-events-none absolute max-w-full -translate-x-1/2 -translate-y-1/2" style={{ background: 'conic-gradient(from 90deg at 50% 50%, #00000000 50%, #000 50%),radial-gradient(rgba(200,200,200,0.075) 0%, transparent 80%)' }}></div>
    </>
  )
}

export default SectionLighting