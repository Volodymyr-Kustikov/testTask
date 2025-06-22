import { Platform, StyleSheet, View, TouchableOpacity, } from 'react-native';
import { Link } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

const MemoryGame = () => {
  return (
      <LinearGradient
            colors={['#43BCF0', '#541896', '#711280']}
      locations={[0, 0.5591, 1]} // Approximating the percentage positions
      style={styles.gradient}
      >
        <View style={styles.startPage}>
          <Link href={'/levels'} style={styles.startPageButton}>
            Go to levels
          </Link>
        </View>
      </LinearGradient>
  )
}

export default MemoryGame

const styles = StyleSheet.create({})