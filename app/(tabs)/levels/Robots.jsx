import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Cards from './Card/Cards'
import { useCardGame } from '../../../hooks/useCardGame'
import bgImage from '../../../assets/game_magic/bgFlasks.png'
import blueRobot from '../../../assets/game_robots/blueRobot.png'
import orangeRobot from '../../../assets/game_robots/orangeRobot.png'
import yellowRobot from '../../../assets/game_robots/yellowRobot.png'
import greenRobot from '../../../assets/game_robots/greenRobot.png'
import pinkRobot from '../../../assets/game_robots/pinkRobot.png'
import whiteRobot from '../../../assets/game_robots/whiteRobot.png'
import WinOrLose from './Card/WinOrLose'
import imageStorage from '../../../utils/imagesStore'
import {useImageStore} from '../../../hooks/useImageStore'



const imagesForGame = [
  { src: blueRobot, matched: false },
  { src: orangeRobot, matched: false },
  { src: yellowRobot, matched: false },
  { src: greenRobot, matched: false },
  { src: pinkRobot, matched: false },
  { src: whiteRobot, matched: false }
]


const robots = () => {

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

    </View>
  )
}

export default robots

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
})