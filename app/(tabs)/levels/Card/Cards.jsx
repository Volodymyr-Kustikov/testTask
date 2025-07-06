import { StyleSheet, Text, View, Image, ImageBackground, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'
import SingleCard from './SingleCard/SingleCard'
import Header from './Header'

const Cards = ({ cards, setCards, bgImage, setTurns, setWrongMatches }) => {
  const [firstCard, setFirstCard] = useState(null)
  const [secondCard, setSecondCard] = useState(null)
  const [showAllCards, setShowAllCards] = useState(true) // New state for showing all cards
  const [gameStarted, setGameStarted] = useState(false) // New state to track if game has started
  
  const screenWidth = Dimensions.get('window').width;
  const numCards = cards.length;
  const columns = numCards < 12 ? 2 : 3;
  const cardSize = numCards < 12 ? 150 : 100;

  // Effect to handle the initial card rotation (showing all cards for 1 second)
  // Only trigger on mount or when a completely new game starts
  useEffect(() => {
    if (cards.length > 0 && !gameStarted) {
      setShowAllCards(true);
      const rotationTimer = setTimeout(() => {
        setShowAllCards(false);
        setGameStarted(true);
      }, 1000); // Show all cards for 1 second

      return () => clearTimeout(rotationTimer);
    }
  }, [cards.length, gameStarted]); // Only depend on cards.length, not the cards array itself

  const handleCardClick = (clickedCard) => {
    // Prevent clicking during rotation period
    if (showAllCards) return;
    
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
          console.log('cards aren\'t matched');
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
    <View style={s.container}>
      <Header/>
      <ImageBackground source={bgImage} style={s.bgImage}>
        <View style={s.containerGrid}>
          {cards.map((card, index) => (
            <SingleCard
              key={index}
              card={card}
              onCardClick={() => handleCardClick(card)}
              flipped={
                showAllCards || // Show all cards during rotation
                card === firstCard || 
                card === secondCard || 
                card.matched
              }
              cardSize={cardSize}
              columns={columns}
            />
          ))}
        </View>
        {showAllCards && (
          <View style={s.rotationOverlay}>
            <Text style={s.rotationText}>Remember the cards!</Text>
          </View>
        )}
      </ImageBackground>
    </View>
  )
}

export default Cards

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  rotationOverlay: {
    position: 'absolute',
    top: '50%',
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 1000,
  },
  rotationText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    textAlign: 'center',
  }
})