// import { createSlice } from '@reduxjs/toolkit';

// const cardSlice = createSlice({
//   name: 'cards',
//   initialState: {
//     flippedCards: [],
//     matchedCards: [],
//     moves: 0,
//     gameWon: false,
//     canFlip: true,
//   },
//   reducers: {
//     flipCard: (state, action) => {
//       const cardId = action.payload;
//       if (state.flippedCards.length < 2 && !state.flippedCards.includes(cardId)) {
//         state.flippedCards.push(cardId);
//         if (state.flippedCards.length === 2) {
//           state.canFlip = false;
//         }
//       }
//     },
//     checkMatch: (state, action) => {
//       const { cards } = action.payload;
//       const [firstId, secondId] = state.flippedCards;
      
//       const firstCard = cards.find(card => card.id === firstId);
//       const secondCard = cards.find(card => card.id === secondId);
      
//       if (firstCard && secondCard && firstCard.src === secondCard.src) {
//         // Cards match
//         state.matchedCards.push(firstId, secondId);
//         state.flippedCards = [];
//         state.canFlip = true;
        
//         // Check if game is won
//         if (state.matchedCards.length === cards.length) {
//           state.gameWon = true;
//         }
//       }
//       state.moves += 1;
//     },
//     resetFlippedCards: (state) => {
//       state.flippedCards = [];
//       state.canFlip = true;
//     },
//     resetGame: (state) => {
//       state.flippedCards = [];
//       state.matchedCards = [];
//       state.moves = 0;
//       state.gameWon = false;
//       state.canFlip = true;
//     },
//   },
// });

// export const { flipCard, checkMatch, resetFlippedCards, resetGame } = cardSlice.actions;
// export default cardSlice.reducer;