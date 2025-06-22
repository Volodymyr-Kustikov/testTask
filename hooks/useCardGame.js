import { useState, useEffect } from 'react';
import { shuffleCards } from '../app/shuffle.jsx'

export const useCardGame = (imagesForGame) => {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  useEffect(() => {
    const shuffledCards = shuffleCards(imagesForGame);
    setCards(shuffledCards);
  }, [imagesForGame]);

  const handleNewGame = () => {
    const shuffledCards = shuffleCards(imagesForGame);
    setCards(shuffledCards);
    setTurns(0);
  };

  return {
    cards,
    setCards,
    turns,
    handleNewGame,
    setTurns
  };
};