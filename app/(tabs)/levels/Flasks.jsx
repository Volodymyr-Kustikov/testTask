import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useCardGame } from '../../../hooks/useCardGame'
import Cards from './Card/Cards'
import bgImage from '../../../assets/game_magic/bgFlasks.png'
import greenFlask from '../../../assets/game_magic/greenFlask.png'
import orangeFlask from '../../../assets/game_magic/orangeFlask.png'
import pinkFlask from '../../../assets/game_magic/pinkFlask.png'
import WinOrLose from './Card/WinOrLose'

const imagesForGame = [
  { src: greenFlask, matched: false},
  { src: orangeFlask, matched: false},
  { src: pinkFlask, matched: false}
]

const Flasks = () => {
  const {cards, 
    setCards, 
    turns, 
    handleNewGame, 
    setTurns,     
    showOverlay,
    isWinner,
    wrongMatches,
    setWrongMatches,
    handlePlayAgain,
    handleCloseOverlay} = useCardGame(imagesForGame)


  return (
    <View style={s.container}>

      <Cards
        cards={cards} 
        setCards={setCards} 
        bgImage={bgImage} 
        setTurns={setTurns}
        setWrongMatches={setWrongMatches}
        />

      <WinOrLose
        visible={showOverlay}
        isWinner={isWinner}
        onPlayAgain={handlePlayAgain}
        onClose={handleCloseOverlay}
      />

    </View>  )
}

export default Flasks

const s = StyleSheet.create({
    container: {
    flex: 1,
  },
})