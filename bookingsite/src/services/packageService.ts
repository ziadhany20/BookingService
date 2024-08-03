// services/packageService.ts

import axios from 'axios';

const API_URL = 'https://europe-west6-service-booking-99250.cloudfunctions.net/getAllPackages';

export const getAllPackages = async () => {
  try {
    const response = await axios.post(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching packages:', error);
    throw error;
  }
}; 
