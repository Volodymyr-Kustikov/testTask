import { Platform, StyleSheet, View, TouchableOpacity, } from 'react-native';
import { Link } from 'expo-router';
import { Provider } from 'react-redux'
import { store } from '../../store/store.js'
import { LinearGradient } from 'expo-linear-gradient'; // Changed import


export default function HomeScreen() {
  return (
    <Provider store={store}>
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

    </Provider>

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
