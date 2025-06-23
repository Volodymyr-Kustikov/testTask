// utils/imageStorage.js
import AsyncStorage from '@react-native-async-storage/async-storage';

const IMAGE_STORAGE_KEY = '@memory_game_images';

export const imageStorage = {
  saveImages: async (images) => {
    try {
      const jsonValue = JSON.stringify(images);
      await AsyncStorage.setItem(IMAGE_STORAGE_KEY, jsonValue);
      console.log('Images saved successfully');
      return true;
    } catch (error) {
      console.error('Error saving images:', error);
      return false;
    }
  },

  loadImages: async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(IMAGE_STORAGE_KEY);
      if (jsonValue != null) {
        const images = JSON.parse(jsonValue);
        console.log('Images loaded successfully');
        return images;
      }
      return null;
    } catch (error) {
      console.error('Error loading images:', error);
      return null;
    }
  },

  clearImages: async () => {
    try {
      await AsyncStorage.removeItem(IMAGE_STORAGE_KEY);
      console.log('Images cleared successfully');
      return true;
    } catch (error) {
      console.error('Error clearing images:', error);
      return false;
    }
  },

  hasImages: async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(IMAGE_STORAGE_KEY);
      return jsonValue !== null;
    } catch (error) {
      console.error('Error checking images:', error);
      return false;
    }
  }
};