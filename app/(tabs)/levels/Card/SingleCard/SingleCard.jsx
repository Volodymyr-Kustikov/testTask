import { StyleSheet, Text, View, Image, } from 'react-native'
import React , {useState} from 'react'
import frontImage from '../../../../../assets/cards/back.png'
import handleClick from '../handleFunc/handleFunction'

const SingleCard = ({backImage}) => {


  return (
    <View style={s.cardContainer} onPress ={()=>handleClick(backImage)} >
      <Image source={frontImage} style={s.card}/>
      <Image source={backImage} style={s.card}/>
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