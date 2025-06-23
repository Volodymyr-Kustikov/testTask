import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect, useState} from 'react'
import * as Location from 'expo-location'

const getLocation = () => {
  const [errorMsg, setErrorMessage] = useState("");
  const [longitude, setLongitude] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [address, setAddress] = useState(null);
  const [loading, setLoading] = useState(true);

  const getUserLocation = async () => {
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
        console.log("CURRENT LOCATION");
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
            console.log("=== ADDRESS INFO ===");
            console.log("Street:", addressInfo.street || 'N/A');
            console.log("City:", addressInfo.city || 'N/A');
            console.log("Region:", addressInfo.region || 'N/A');
            console.log("Country:", addressInfo.country || 'N/A');
            console.log("Postal Code:", addressInfo.postalCode || 'N/A');
            console.log("========================");
            
            setAddress(addressInfo.country);
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


  useEffect(()=> {
    getUserLocation();
  }, []);
  return {latitude, longitude, errorMsg, address, loading}
}

export default getLocation

const styles = StyleSheet.create({})