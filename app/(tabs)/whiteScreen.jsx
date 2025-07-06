import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const WhiteScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Geolocation Error. Write to our support team to get more info</Text>
    </View>
  )
}

export default WhiteScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    textAlign: 'center',
    justifyContent:'center'
  }
})