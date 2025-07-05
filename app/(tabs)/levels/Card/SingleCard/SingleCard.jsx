import { StyleSheet, Text, View, Image, TouchableOpacity,Dimensions } from 'react-native'
import React from 'react'
import frontImage from '../../../../../assets/cards/back.png'
import OverlappingSquares from './backForCard'

const SingleCard = ({ card, onCardClick, flipped, cardSize, columns }) => {
  const cardWidth = cardSize;
  const marginHorizontal = (screenWidth - (columns * cardSize)) / (columns + 1) / 2;
  const { width: screenWidth } = Dimensions.get('window');

  return (
    <TouchableOpacity
      style={[
        s.cardContainer,
        {
          width: cardWidth,
          height: cardWidth,
          marginHorizontal: marginHorizontal,
          marginVertical: 8,
        }
      ]}
      onPress={onCardClick}
    >
      {flipped ? (
        <Image
          source={card.src}
          style={[s.cardImage, { 
            width: cardWidth, 
            height: cardWidth,
            borderRadius: cardSize * 0.067
          }]}
        />
      ) : (
        <OverlappingSquares cardSize={cardSize} />
      )}
    </TouchableOpacity>
  );
};

export default SingleCard

const s = StyleSheet.create({
  cardContainer: {
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardImage: {
    resizeMode: 'cover',
  },
})