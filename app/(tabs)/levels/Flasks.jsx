import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useCardGame } from '../../../hooks/useCardGame'
import Cards from './Card/Cards'
import bgImage from '../../../assets/game_magic/bgFlasks.png'
import greenFlask from '../../../assets/game_magic/greenFlask.png'
import orangeFlask from '../../../assets/game_magic/orangeFlask.png'
import pinkFlask from '../../../assets/game_magic/pinkFlask.png'


const imagesForGame = [
  { src: greenFlask, matched: false},
  { src: orangeFlask, matched: false},
  { src: pinkFlask, matched: false}
]

const Flasks = () => {
  const {cards, turns, handleNewGame, setTurns} = useCardGame(imagesForGame)

  return (
    <Cards cards={cards} bgImage={bgImage} setTurns={setTurns}/>
  )
}

export default Flasks

const styles = StyleSheet.create({})