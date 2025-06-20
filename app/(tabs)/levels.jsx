import { StyleSheet, Text, View, Image,Dimensions } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { LinearGradient } from 'expo-linear-gradient'
const { width } = Dimensions.get('window');
const imageSize = (width * 0.35) - 20; // where 30 is wishes size


const levels = () => {
  return (
    <LinearGradient
      colors={['#43BCF0', '#571280']}
      style={s.gradient}>
      <View style={s.levels}>

        {/* Zeus link */}

        <Link style={s.link} href={'./levels/Zeus'}>
          <Image style={s.image} source={require('../../assets/levels/zeus.png')}>
      
          </Image>
        </Link>

        {/* Slots doggi */}

        <Link style={s.link} href={'./levels/Dogs'}>
          <Image style={s.image} source={require('../../assets/levels/dogs.png')}>
      
          </Image>
        </Link>

        {/* Tigerr game */}

        <Link style={s.link} href={'./levels/Tiger'}>
          <Image style={s.image} source={require('../../assets/levels/tiger.png')}>
      
          </Image>
        </Link>

        {/* Candy game */}

        <Link style={s.link} href={'./levels/Candy'}>
          <Image style={s.image} source={require('../../assets/levels/girl.png')}>
          </Image>
        </Link>


        {/* Rocket slot */}
        <Link style={s.link} href={'./levels/GameSpace'}>
          <Image style={s.image} source={require('../../assets/levels/space.png')}/>
        </Link>

        {/* Slime slot */}
        <Link style={s.link} href={'./levels/Slime'}>
          <Image style={s.image} source={require('../../assets/levels/slime.png')}>
          </Image>
        </Link>

        {/* Flasks game */}

        <Link style={s.link} href={'./levels/Flasks'}>
          <Image style={s.image} source={require('../../assets/levels/magic.png')}>
          </Image>
        </Link>

        {/* Robots game */}

        <Link style={s.link} href={'./levels/Robots'}>
          <Image style={s.image} source={require('../../assets/levels/robots.png')}>
          </Image>
        </Link>

      </View>
    </LinearGradient>

  )
}

export default levels

const s = StyleSheet.create({
  levels:{
    flex:1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
    paddingVertical:40,
    paddingHorizontal:65
  },
  image:{
    width: '100%',
    height: '100%',
    borderRadius: 10,
    borderColor:'#6EBCF7',
    borderWidth:3,
  },
  link:{
    width: imageSize,
    height: imageSize
  },
    gradient: {
    flex: 1,
  },
})