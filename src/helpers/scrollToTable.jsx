export const scrollToTable = () => {
  const table = document.getElementById('market-update')
  
  window.scrollTo({
    top: table.offsetTop + 400,
    behavior: "smooth",
  })
}