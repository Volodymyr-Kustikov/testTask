import { useState, useEffect } from 'react';
import { shuffleCards } from '../app/shuffle.jsx'

export const useCardGame = (imagesForGame) => {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [showOverlay, setShowOverlay] = useState(false)
    const [isWinner, setIsWinner] = useState(false)
    const [wrongMatches, setWrongMatches] = useState(0)

  useEffect(() => {
    const shuffledCards = shuffleCards(imagesForGame);
    setCards(shuffledCards);
  }, [imagesForGame]);

  const handleNewGame = () => {
    const shuffledCards = shuffleCards(imagesForGame);
    setCards(shuffledCards);
    setTurns(0);
  };
      useEffect(() => {
      if (cards.length > 0) {
        const allMatched = cards.every(card => card.matched)
        if (allMatched) {
          setIsWinner(true)
          setShowOverlay(true)
        }
      }
    }, [cards])
  
      useEffect(() => {
      if (wrongMatches >= 1) {
        setIsWinner(false)
        setShowOverlay(true)
      }
    }, [wrongMatches])
  
      const handlePlayAgain = () => {
      setShowOverlay(false)
      setIsWinner(false)
      setWrongMatches(0)
      handleNewGame()
    }
  
    const handleCloseOverlay = () => {
      setShowOverlay(false)
    }

  return {
    cards,
    setCards,
    turns,
    handleNewGame,
    setTurns,
    showOverlay,
    isWinner,
    wrongMatches,
    setWrongMatches,
    handlePlayAgain,
    handleCloseOverlay
  };
};