import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import frontImage from '../../../../../assets/cards/back.png'

const SingleCard = ({ backImage, onCardClick, flipped }) => {
  const handleClick = () => {
    onCardClick(backImage)
  }

  return (
    <View>
       return (
  <View>
    { flipped ? 
      <TouchableOpacity
        style={s.cardContainer}
        onPress={() => handleClick(backImage)}
      >
        <Image
          source={backImage}  // Show back image when flipped
          style={s.card}
        />
      </TouchableOpacity>
      :
      <TouchableOpacity
        style={s.cardContainer}
        onPress={() => handleClick(backImage)}  // Always pass backImage
      >
        <Image
          source={frontImage}  // Show front image when not flipped
          style={s.card}
        />
      </TouchableOpacity>
    }
  </View>
)
    </View>
  )
}

export default SingleCard

const s = StyleSheet.create({
  cardContainer: {
    width: '30%',
    aspectRatio: 1,
    margin: '1.5%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
  },
})