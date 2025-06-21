import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useCardGame } from '../../../hooks/useCardGame'
import Cards from './Card/Cards'
import bgImage from '../../../assets/game_magic/bgFlasks.png'
import greenFlask from '../../../assets/game_magic/greenFlask.png'
import orangeFlask from '../../../assets/game_magic/orangeFlask.png'
import pinkFlask from '../../../assets/game_magic/pinkFlask.png'


const imagesForGame = [
  { src: greenFlask },
  { src: orangeFlask },
  { src: pinkFlask }
]

const Flasks = () => {
  const {cards, turns, handleNewGame} = useCardGame(imagesForGame)

  return (
    <Cards cards={cards} bgImage={bgImage} />
  )
}

export default Flasks

const styles = StyleSheet.create({})