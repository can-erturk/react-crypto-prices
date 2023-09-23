function SectionTitle({ title, description }) {
  return (
    <>
      <h2 className="font-normal text-center mb-6 max-sm:mb-2">{title}</h2>
      <p className="text-center max-w-xl m-auto mb-14 text-lg opacity-50 max-sm:text-base max-sm:max-w-xs">{description}</p>
    </>
  )
}

export default SectionTitle
