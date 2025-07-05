import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native' // Fixed: Image not image
import React, { useState, useEffect } from 'react'
import rocket from '../../../assets/game_space/rocket.png'
import machine from '../../../assets/game_space/machine.png'
import bro from '../../../assets/game_space/blueBro.png'
import { useCardGame } from '../../../hooks/useCardGame'
import bgSpace from '../../../assets/game_space/bg.png'
import Cards from './Card/Cards'
import WinOrLose from './Card/WinOrLose'


const imagesForGame = [
  { src: rocket , matched: false},
  { src: machine, matched: false },
  { src: bro, matched: false }
]

const GameSpace = () => {

   const {
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
  } = useCardGame(imagesForGame)
  

  return (
    <View style={s.container}>

      <Cards
        cards={cards} 
        setCards={setCards} 
        bgImage={bgSpace} 
        setTurns={setTurns}
        setWrongMatches={setWrongMatches}
        />

      <WinOrLose
        visible={showOverlay}
        isWinner={isWinner}
        onPlayAgain={handlePlayAgain}
        onClose={handleCloseOverlay}
      />

    </View>
  )
}

export default GameSpace

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
})