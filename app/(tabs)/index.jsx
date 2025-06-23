import { Platform, StyleSheet, View, TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import React from 'react';
import MemoryGame from './memoryGame.jsx';
import AsyncStorage from '@react-native-async-storage/async-storage';
import getLocation from '../../hooks/getLocation.jsx';
import WhiteScreen from './whiteScreen.jsx';

export default function HomeScreen() {
  const { latitude, longitude, errorMsg, address, loading } = getLocation();

  // Debug logging
  console.log("HomeScreen render - loading:", loading, "address:", address);

  // Show loading screen while getting location
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#43BCF0" />
        <Text style={styles.loadingText}>Getting your location...</Text>
      </View>
    );
  }

  // Show error screen if location failed
  if (errorMsg) {
    console.log("Location error, showing WhiteScreen:", errorMsg);
    return <WhiteScreen />;
  }

  // Wait until we have a definitive address
  if (address === null || address === undefined) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#43BCF0" />
        <Text style={styles.loadingText}>Determining location...</Text>
      </View>
    );
  }

  // Your location logic
  const isUkraine = address && (
    address === "Ukraine" ||
    address === "UA" ||
    address === "Україна" ||
    address.toLowerCase().includes("ukraine")
  );

  console.log("Final render decision - address:", address, "showing MemoryGame:", address === "United States");

  return (
    <View style={styles.container}>
      {address !== "United States" ? <WhiteScreen /> : <MemoryGame />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  loadingText: {
    marginTop: 15,
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  startPage: {},
  startPageButton: {
    backgroundColor: "red",
    padding: 30,
    fontSize: 30,
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});