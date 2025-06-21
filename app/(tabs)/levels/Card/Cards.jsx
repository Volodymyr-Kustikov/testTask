import { StyleSheet, Text, View, Image, ImageBackground} from 'react-native'
import React from 'react'
import SingleCard from './SingleCard/SingleCard'

const Cards = ({cards, bgImage}) => {
  return (
    <ImageBackground source={bgImage} style={s.bgImage} resizeMode="cover">
      <View style={s.containerGrid}>
        {cards.map((card) => (
          <SingleCard backImage={card.src}/>
        ))}
      </View>
    </ImageBackground>
  )
}

export default Cards

const s = StyleSheet.create({
  text: {
    fontSize: 50
  },
  bgImage:{
    flex:1
  },
  containerGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    
  }
})