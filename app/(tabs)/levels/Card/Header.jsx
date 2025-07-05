import { StyleSheet, Text, View, Image} from 'react-native'
import { Link } from 'expo-router'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { ImageBackground } from 'expo-image'
import LeftArrow from '../../../../assets/header/left-arrow.png'
import HP from '../../../../assets/header/heart.png'

const Header = () => {
  return (
    <LinearGradient
      colors={['#43BCF0', '#541896', '#711280']}
      locations={[0, 0.5591, 1]}
      style={styles.gradient}
    >
      <View style={styles.header}>
        <Link href={'../levels'}>
          <Image style={styles.icon} source={LeftArrow}/>
        </Link>

        <Image style={[styles.icon, styles.HP]} source={HP}/>

        <LinearGradient 
          style={styles.numberOfGame}
          colors={['#00FFB2', '#24BFC9']}
        >
          <Text style={styles.text}>
            2/8
          </Text>
        </LinearGradient >


      </View>
    </LinearGradient>
  )
}

export default Header

const styles = StyleSheet.create({
  header: {
    height:80,
    flexDirection:'row',
    textAlign: 'center',
    padding:30,
    justifyContent: 'space-between'
  },
  numberOfGame: {
    width:48,
    height:30,
    color:'white',
        justifyContent: 'center',
    alignItems: 'center', 
    borderRadius: 30
  },
   icon: {
    width:30,
    height:30
   },
   text:{
    color:'white',
    textAlign:'center',
    justifyContent:'center'
   }
})