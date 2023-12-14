function WhyUsItem({ Icon, title, text }) {
  return (
    <div>
      <Icon size={24} className="mb-4 max-md:mx-auto" />

      <h3 className="text-2xl font-medium mb-2">{title}</h3>

      <p className="line-clamp-3 opacity-50 max-md:max-w-md max-md:mx-auto max-md:line-clamp-none">
        {text}
      </p>
    </div>
  )
}

export default WhyUsItem
