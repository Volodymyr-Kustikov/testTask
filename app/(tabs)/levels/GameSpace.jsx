import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native' // Fixed: Image not image
import React, { useState, useEffect } from 'react'
import rocket from '../../../assets/game_space/rocket.png'
import machine from '../../../assets/game_space/machine.png'
import bro from '../../../assets/game_space/blueBro.png'
import { useCardGame } from '../../../hooks/useCardGame'
import bgSpace from '../../../assets/game_space/bg.png'
import Cards from './Card/Cards'

const imagesForGame = [
  { src: rocket , matched: false},
  { src: machine, matched: false },
  { src: bro, matched: false }
]

const GameSpace = () => {

  const {cards, turns, handleNewGame, setTurns} = useCardGame(imagesForGame)

  return (
    <Cards cards={cards} bgImage={bgSpace} setTurns={setTurns}/>
  )
}

export default GameSpace

const s = StyleSheet.create({
  
})