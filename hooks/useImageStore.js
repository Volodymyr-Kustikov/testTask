// hooks/useImageStorage.js
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * @param {Array} defaultImages - Default images array to use if no stored images
 * @param {string} storageKey - Optional custom storage key (defaults to '@memory_game_images')
 * @returns {Object} Storage utilities and state
 */
export const useImageStorage = (defaultImages = [], storageKey = '@memory_game_images') => {
  const [images, setImages] = useState(defaultImages);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const saveImages = async (imagesToSave = images) => {
    try {
      const jsonValue = JSON.stringify(imagesToSave);
      await AsyncStorage.setItem(storageKey, jsonValue);
      console.log(`Images saved successfully to ${storageKey}`);
      setError(null);
      return true;
    } catch (err) {
      console.error('Error saving images:', err);
      setError('Failed to save images');
      return false;
    }
  };

  const loadImages = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      const jsonValue = await AsyncStorage.getItem(storageKey);
      
      if (jsonValue != null) {
        const savedImages = JSON.parse(jsonValue);
        console.log(`Loaded ${savedImages.length} images from ${storageKey}`);
        setImages(savedImages);
        return savedImages;
      } else {
        console.log('No saved images found, using defaults');
        if (defaultImages.length > 0) {
          await saveImages(defaultImages);
        }
        setImages(defaultImages);
        return defaultImages;
      }
    } catch (err) {
      console.error('Error loading images:', err);
      setError('Failed to load images');
      setImages(defaultImages);
      return defaultImages;
    } finally {
      setIsLoading(false);
    }
  };

  const clearStorage = async () => {
    try {
      await AsyncStorage.removeItem(storageKey);
      console.log(`Images cleared from ${storageKey}`);
      setImages([]);
      setError(null);
      return true;
    } catch (err) {
      console.error('Error clearing images:', err);
      setError('Failed to clear images');
      return false;
    }
  };

  // I Added new image
  const addImage = async (newImage) => {
    try {
      const imageToAdd = typeof newImage === 'object' 
        ? newImage 
        : { src: newImage, matched: false };
      
      const updatedImages = [...images, imageToAdd];
      setImages(updatedImages);
      await saveImages(updatedImages);
      console.log('New image added and saved');
      return true;
    } catch (err) {
      console.error('Error adding image:', err);
      setError('Failed to add image');
      return false;
    }
  };

  // Removed image by index
  const removeImage = async (index) => {
    try {
      if (index < 0 || index >= images.length) {
        throw new Error('Invalid image index');
      }
      
      const updatedImages = images.filter((_, i) => i !== index);
      setImages(updatedImages);
      await saveImages(updatedImages);
      console.log(`Image at index ${index} removed and saved`);
      return true;
    } catch (err) {
      console.error('Error removing image:', err);
      setError('Failed to remove image');
      return false;
    }
  };

  // I have updated specific image
  const updateImage = async (index, updatedImage) => {
    try {
      if (index < 0 || index >= images.length) {
        throw new Error('Invalid image index');
      }
      
      const updatedImages = images.map((img, i) => 
        i === index ? updatedImage : img
      );
      setImages(updatedImages);
      await saveImages(updatedImages);
      console.log(`Image at index ${index} updated and saved`);
      return true;
    } catch (err) {
      console.error('Error updating image:', err);
      setError('Failed to update image');
      return false;
    }
  };

  // Reset to default images
  const resetToDefaults = async () => {
    try {
      setImages(defaultImages);
      await saveImages(defaultImages);
      console.log('Images reset to defaults and saved');
      setError(null);
      return true;
    } catch (err) {
      console.error('Error resetting images:', err);
      setError('Failed to reset images');
      return false;
    }
  };

  // Update image property (like matched status)
  const updateImageProperty = async (index, property, value) => {
    try {
      if (index < 0 || index >= images.length) {
        throw new Error('Invalid image index');
      }
      
      const updatedImages = images.map((img, i) => 
        i === index ? { ...img, [property]: value } : img
      );
      setImages(updatedImages);
      await saveImages(updatedImages);
      return true;
    } catch (err) {
      console.error(`Error updating image ${property}:`, err);
      setError(`Failed to update image ${property}`);
      return false;
    }
  };

  // Check if storage has images
  const hasStoredImages = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(storageKey);
      return jsonValue !== null;
    } catch (err) {
      console.error('Error checking stored images:', err);
      return false;
    }
  };

  //  storage info
  const getStorageInfo = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(storageKey);
      if (jsonValue) {
        const parsedImages = JSON.parse(jsonValue);
        return {
          exists: true,
          count: parsedImages.length,
          size: jsonValue.length,
          lastModified: new Date().toISOString() // AsyncStorage doesn't provide this
        };
      }
      return { exists: false, count: 0, size: 0 };
    } catch (err) {
      console.error('Error getting storage info:', err);
      return { exists: false, count: 0, size: 0, error: err.message };
    }
  };

  useEffect(() => {
    loadImages();
  }, []);

  // Auto-save with debounce when images change(1s)
  useEffect(() => {
    if (!isLoading && images.length >= 0) {
      const timeoutId = setTimeout(() => {
        saveImages(images);
      }, 1000);

      return () => clearTimeout(timeoutId);
    }
  }, [images, isLoading]);

  return {
    // State
    images,
    setImages,
    isLoading,
    error,
    
    // Core functions
    saveImages,
    loadImages,
    clearStorage,
    
    // Image management
    addImage,
    removeImage,
    updateImage,
    updateImageProperty,
    resetToDefaults,
    
    // Utility functions
    hasStoredImages,
    getStorageInfo,
    
    // comp values
    imageCount: images.length,
    isEmpty: images.length === 0,
    hasError: error !== null,
  };
};