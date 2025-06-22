import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import React, { useState, useEffect } from 'react'
import SingleCard from './SingleCard/SingleCard'

const Cards = ({ cards, setCards, bgImage, setTurns }) => {
  const [firstCard, setFirstCard] = useState(null)
  const [secondCard, setSecondCard] = useState(null)

  const handleCardClick = (backImage) => {
          if (backImage === firstCard || backImage === secondCard) {
    return
  }
  
  if (firstCard && secondCard) {
    return
  }
  
    if (firstCard) {
      setSecondCard(backImage)
    } else {
      setFirstCard(backImage)
    }
    console.log('First card:', firstCard)
    console.log('Second card:', secondCard)
    console.log('Clicked card:', backImage)
  }

  useEffect(() => {

    if (firstCard && secondCard) {
      if (firstCard === secondCard) {
        console.log('cards are matched')
        setCards(prevCards=>{
          return prevCards.map(card => {
            if(card.src === firstCard) {
              return {...card, matched: true} }
              else {
                return card
            }
          })
        })
        resetTurns()
      } else {
        console.log('cards arent matched (src comparison)')
        resetTurns()
      }
    }
  }, [firstCard, secondCard])
  console.log(cards)

  const resetTurns = () => {
    setFirstCard(null)
    setSecondCard(null)
    setTurns(prev => prev + 1)
  }

  return (
    <ImageBackground source={bgImage} style={s.bgImage} resizeMode="cover">
      <View style={s.containerGrid}>
        {cards.map((card, index) => (
          <SingleCard 
            key={index}
            backImage={card.src} 
            onCardClick={handleCardClick}
            flipped={card.src === firstCard || card.src === secondCard || card.matched}
          />
        ))}
      </View>
    </ImageBackground>
  )
}

export default Cards

const s = StyleSheet.create({
  text: {
    fontSize: 50
  },
  bgImage: {
    flex: 1
  },
  containerGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
  }
})