import { StyleSheet, Text, View, Image } from 'react-native' // Fixed: Image not image
import React, { useState, useEffect } from 'react'
import rocket from '../../../assets/game_space/rocket.png'
import machine from '../../../assets/game_space/machine.png'
import bro from '../../../assets/game_space/blueBro.png'
import { shuffleCards } from '../../shuffle'

const GameSpace = () => {

  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)

  const imagesForGame = [
    { src: rocket },
    { src: machine },
    { src: bro }
  ]

 useEffect(() => {
    const shuffledCards = shuffleCards(imagesForGame)
    setCards(shuffledCards)
  }, [])

  const handleNewGame = () => {
    const shuffledCards = shuffleCards(imagesForGame)
    setCards(shuffledCards)
    setTurns(0)
  }

return (
    <View style={s.containerGrid}>
      {cards.map((card) => (
        <View key={card.id} style={s.card}>
          <Image source={card.src} style={s.image} />
        </View>
      ))}
    </View>
  )
}

export default GameSpace

const s = StyleSheet.create({
  text: {
    fontSize: 50
  },
  containerGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
  },
  card: {
    width: '30%',
    aspectRatio: 1,
    margin: '1.5%',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
  }
})