import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import React, { useState, useEffect } from 'react'
import SingleCard from './SingleCard/SingleCard'

const Cards = ({ cards, setCards, bgImage, setTurns, setWrongMatches }) => {
  const [firstCard, setFirstCard] = useState(null)
  const [secondCard, setSecondCard] = useState(null)

const handleCardClick = (clickedCard) => {
  if (clickedCard.matched) return;

  if (firstCard && firstCard === clickedCard) return;

  if (!firstCard) {
    setFirstCard(clickedCard);
  } else if (!secondCard) {
    setSecondCard(clickedCard);
  }
};

useEffect(() => {
  if (firstCard && secondCard) {
    const timer = setTimeout(() => {
      if (firstCard.src === secondCard.src) {
        console.log('cards are matched')
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.src === firstCard.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurns()
      } else {
        console.log('cards aren’t matched');
        setWrongMatches(prev => prev + 1)
        resetTurns();
      }
    }, 1000);

    return () => clearTimeout(timer);
  }
}, [firstCard, secondCard]);

  const resetTurns = () => {
    setFirstCard(null)
    setSecondCard(null)
    setTurns(prev => prev + 1)
  }

  return (
    <ImageBackground source={bgImage} style={s.bgImage}>
      <View style={s.containerGrid}>
        {cards.map((card, index) => (
          <SingleCard
            key={index}
            card={card}
            onCardClick={() => handleCardClick(card)}
            flipped={
              card === firstCard || card === secondCard || card.matched
            }
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