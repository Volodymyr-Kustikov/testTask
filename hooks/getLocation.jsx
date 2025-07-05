import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Location from 'expo-location'
import AsyncStorage from '@react-native-async-storage/async-storage'

const getLocation = () => {
  const [errorMsg, setErrorMessage] = useState("");
  const [longitude, setLongitude] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [address, setAddress] = useState(null);
  const [loading, setLoading] = useState(true);

  const getUserLocationFromGPS = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMessage('Permission to access location was denied');
        setLoading(false);
        return;
      }

      let location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
      });

      if (location) {
        const { latitude, longitude } = location.coords;
        
        // Log to terminal
        console.log("CURRENT LOCATION FROM GPS");
        console.log("Latitude:", latitude);
        console.log("Longitude:", longitude);
        console.log("Accuracy:", location.coords.accuracy, "meters");
        console.log("Timestamp:", new Date(location.timestamp).toLocaleString());
        
        setLatitude(latitude);
        setLongitude(longitude);

        try {
          let response = await Location.reverseGeocodeAsync({
            latitude,
            longitude
          });

          if (response && response.length > 0) {
            const addressInfo = response[0];
            console.log("=== ADDRESS INFO FROM GPS ===");
            console.log("Street:", addressInfo.street || 'N/A');
            console.log("City:", addressInfo.city || 'N/A');
            console.log("Region:", addressInfo.region || 'N/A');
            console.log("Country:", addressInfo.country || 'N/A');
            console.log("Postal Code:", addressInfo.postalCode || 'N/A');
            console.log("========================");
            
            const countryAddress = addressInfo.country;
            setAddress(countryAddress);

            // Save to AsyncStorage for future use
            await saveLocationToStorage({
              latitude,
              longitude,
              address: countryAddress,
              timestamp: Date.now()
            });
          }
        } catch (geocodeError) {
          console.log("Geocoding error:", geocodeError);
        }
      }
    } catch (error) {
      console.error("Location error:", error);
      setErrorMessage(`Error getting location: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const saveLocationToStorage = async (locationData) => {
    try {
      const locationString = JSON.stringify(locationData);
      await AsyncStorage.setItem('user_location_data', locationString);
      console.log('Location saved to AsyncStorage:', locationData);
    } catch (error) {
      console.error('Failed to save location to AsyncStorage:', error);
    }
  };

  const loadLocationFromStorage = async () => {
    try {
      const storedLocationString = await AsyncStorage.getItem('user_location_data');
      
      if (storedLocationString !== null) {
        const storedLocation = JSON.parse(storedLocationString);
        console.log('Found stored location:', storedLocation);
        
        // Check if stored location is not too old (optional - you can adjust or remove this)
        const oneWeekAgo = Date.now() - (7 * 24 * 60 * 60 * 1000); // 7 days in milliseconds
        
        if (storedLocation.timestamp && storedLocation.timestamp > oneWeekAgo) {
          // Use stored location
          console.log('Using stored location (less than 1 week old)');
          setLatitude(storedLocation.latitude);
          setLongitude(storedLocation.longitude);
          setAddress(storedLocation.address);
          setLoading(false);
          return true; // Successfully loaded from storage
        } else {
          console.log('Stored location is too old, fetching new location');
        }
      } else {
        console.log('No stored location found');
      }
      
      return false; // No valid stored location found
    } catch (error) {
      console.error('Error reading location from AsyncStorage:', error);
      return false;
    }
  };

  useEffect(() => {
    const initializeLocation = async () => {
      console.log('Initializing location...');
      
      // First, try to load from AsyncStorage
      const loadedFromStorage = await loadLocationFromStorage();
      
      // If no valid stored location, fetch from GPS
      if (!loadedFromStorage) {
        console.log('Fetching location from GPS...');
        await getUserLocationFromGPS();
      }
    };

    initializeLocation();
  }, []);

  return { latitude, longitude, errorMsg, address, loading }
}

export default getLocation

const styles = StyleSheet.create({})