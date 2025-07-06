import { Platform, StyleSheet, View, TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import MemoryGame from './memoryGame.jsx';
import AsyncStorage from '@react-native-async-storage/async-storage';
import getLocation from '../../hooks/getLocation.jsx';
import WhiteScreen from './whiteScreen.jsx';

export default function HomeScreen() {
  const { latitude, longitude, errorMsg, address, loading } = getLocation();
  
  console.log("HomeScreen render - loading:", loading, "address:", address);

  // Render logic
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#43BCF0" />
        <Text style={styles.loadingText}>Getting your location...</Text>
      </View>
    );
  }

  if (errorMsg) {
    console.log("Location error, showing WhiteScreen:", errorMsg);
    return <WhiteScreen />;
  }

  if (address === null || address === undefined) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#43BCF0" />
        <Text style={styles.loadingText}>Determining location...</Text>
      </View>
    );
  }

  const isUkraine = address && (
    address === "Ukraine" ||
    address === "UA" ||
    address === "Україна" ||
    address.toLowerCase().includes("ukraine")
  );

  return (
    <View style={styles.container}>
      {address !== isUkraine ? <WhiteScreen /> : <MemoryGame />}
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