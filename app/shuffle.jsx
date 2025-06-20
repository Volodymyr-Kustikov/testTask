export const shuffleCards = (arrayOfImages) => {
  const shuffledCards = [...arrayOfImages, ...arrayOfImages]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random() }))
  
  return shuffledCards
}