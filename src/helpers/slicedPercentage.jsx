const slicedPercentage = (percent) => {
  const strPercent = percent.toString()
  const startsDash = strPercent.startsWith('-')

  return startsDash ? strPercent.substr(0, 5) : strPercent.substr(0, 4)
}

export default slicedPercentage
