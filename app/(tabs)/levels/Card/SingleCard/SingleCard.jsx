import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import frontImage from '../../../../../assets/cards/back.png'

const SingleCard = ({ card, onCardClick, flipped }) => {
  return (
    <TouchableOpacity
      style={s.cardContainer}
      onPress={onCardClick}
    >
      <Image
        source={flipped ? card.src : frontImage}
        style={s.card}
      />
    </TouchableOpacity>
  );
};

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