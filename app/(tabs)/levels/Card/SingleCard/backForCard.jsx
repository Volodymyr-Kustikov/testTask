import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const OverlappingSquares = ({ cardSize }) => {
  const offset = cardSize * 0.13; // equivalent to 20px when cardSize=150

  return (
    <LinearGradient
      colors={['#43BCF0', '#541896', '#711280']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={[
        styles.container,
        {
          width: cardSize,
          height: cardSize,
          borderRadius: cardSize * 0.08,
        },
      ]}
    >
      <View style={{ position: 'relative', width: cardSize, height: cardSize }}>
        <View
          style={[
            styles.square,
            {
            width: cardSize - offset * 2,      // Smaller to fit inside
            height: cardSize - offset * 2,     // Smaller to fit inside
              top: offset,
              left: offset,
              borderRadius: cardSize * 0.08,
            },
          ]}
        />
        <View
          style={[
            styles.square,
            {
            width: cardSize - offset,          // Slightly smaller
            height: cardSize - offset, 
            top: offset/2,
            left: offset/2,
              borderRadius: cardSize * 0.08,
            },
          ]}
        />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
        position: 'relative',  // Changed from flex centering

    justifyContent: 'center',
    alignItems: 'center',
  },
  square: {
    position: 'absolute',
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.8)',
  },
});

export default OverlappingSquares;
