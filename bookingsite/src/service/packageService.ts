import axios from 'axios';

const BASE_URL = 'https://europe-west6-service-booking-99250.cloudfunctions.net';

export interface Package {
    id?: string;
    title: string;
    description: string;
    price: number;
    isTopDeal: boolean;
    discount: number;
    imageUrl: string;
}

export const getAllPackages = async (): Promise<Package[]> => {
    try {
        const response = await axios.post<Package[]>(`${BASE_URL}/getAllPackages`);
        
        return response.data;
    } catch (error) {
        console.error('Error getting all packages', error);
        throw error;
    }
};
