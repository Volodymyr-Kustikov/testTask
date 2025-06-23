import { Platform, StyleSheet, View, TouchableOpacity, } from 'react-native';
import { Link } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

const MemoryGame = () => {
  return (
      <LinearGradient
        colors={['#43BCF0', '#541896', '#711280']}
        locations={[0, 0.5591, 1]}
        style={styles.gradient}
      >
        <View style={styles.startPage}>
          <Link href={'/levels'} style={styles.startPageButton}>
            Start
          </Link>
        </View>
      </LinearGradient>
  )
}



export default MemoryGame

const styles = StyleSheet.create({
  startPage:{
    
  },

  startPageButton:{
    backgroundColor:'#43BCF0',
    width:100,
    textAlign:'center',
    padding: 12,
    fontSize:20,
    color: '#fff',
    borderRadius: 80
  },
    gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})