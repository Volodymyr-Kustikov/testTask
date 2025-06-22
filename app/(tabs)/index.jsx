import { Platform, StyleSheet, View, TouchableOpacity, } from 'react-native';
import { Link } from 'expo-router';
import { Provider } from 'react-redux'
import { store } from '../../store/store.js'
import { LinearGradient } from 'expo-linear-gradient';
import MemoryGame from './memoryGame.jsx'

export default function HomeScreen() {
  return (

    <MemoryGame/>

  );
}

const styles = StyleSheet.create({
  startPage:{

  },

  startPageButton:{
    backgroundColor:"red",
    padding: 30,
    fontSize:30,
  },
    gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
