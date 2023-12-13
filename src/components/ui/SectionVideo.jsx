function SectionVideo({ src }) {
  return (
    <div className="relative max-w-max mx-auto mb-12">
      <video className="w-40 h-40 object-cover z-0 saturate-0" autoPlay loop muted>
        <source src={src} type="video/mp4" />
      </video>
    </div>
  )
}

export default SectionVideo