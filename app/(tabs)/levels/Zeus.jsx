import { StyleSheet, View } from 'react-native'
import Colizei from '../../../assets/game_zeus/Colizei.png'
import Zeus from '../../../assets/game_zeus/Zeus.png'
import zeusBg from '../../../assets/game_zeus/zeusBg.png'
import { useCardGame } from '../../../hooks/useCardGame'
import Cards from './Card/Cards'
import WinOrLose from './Card/WinOrLose'
import React, { useState, useEffect } from 'react'



const imagesForGame = [
  {src: Colizei, matched: false},
  {src: Zeus, matched: false},
]

const ZeusGame = () => {

  const {cards, setCards, turns, handleNewGame, setTurns,     showOverlay,
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
        bgImage={zeusBg} 
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

export default ZeusGame

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
})