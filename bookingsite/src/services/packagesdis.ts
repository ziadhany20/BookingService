// lib/api.ts
import axios from 'axios';

const sec_URL = 'https://europe-west6-service-booking-99250.cloudfunctions.net/getDiscountedPackages';

// Original function name
export const getDiscountedPackages = async () => {
  try {
    const response = await axios.post(sec_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching discounted packages:', error);
    throw error;
  }
};
