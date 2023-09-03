const changeClass = (change) => {
  const strChange = change.toString()
  const startsDash = strChange.startsWith('-')

  return startsDash ? "text-red-500" : "text-green-500"
}

export default changeClass
