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
    images: imagesForGame,
    isLoading: isLoadingImages,
    error: storageError,
    addImage,
    removeImage,
    updateImageProperty,
    resetToDefaults,
    clearStorage,
    imageCount,
    hasError
  } = useImageStorage(defaultImagesForGame, '@robots_game_images');

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

  const handlePlayAgainWithStorage = async () => {
    try {
      handlePlayAgain();
      for (let i = 0; i < imagesForGame.length; i++) {
        await updateImageProperty(i, 'matched', false);
      }
    } catch (error) {
      console.error('Error in play again with storage:', error);
      handlePlayAgain()
    }
  };

  const addNewRobot = async (robotImage) => {
    const success = await addImage({ src: robotImage, matched: false });
    if (success) {
      console.log('New robot added successfully!');
    }
  };

  const removeRobotByIndex = async (index) => {
    const success = await removeImage(index);
    if (success) {
      console.log(`Robot at index ${index} removed successfully!`);
    }
  };

  const resetAllRobots = async () => {
    const success = await resetToDefaults();
    if (success) {
      console.log('All robots reset to defaults!');
    }
  };

  if (isLoadingImages) {
    return (
      <View style={[s.container, s.centerContent]}>
        <ActivityIndicator size="large" color="#43BCF0" />
        <Text style={s.loadingText}>Loading robot images...</Text>
      </View>
    );
  }
  

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