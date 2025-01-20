import axios from 'axios';

const baseUrl = process.env.NEXT_PUBLIC_API_URL; // Ensure this is correctly set up in .env.local

const ApiCall = {
  Product: {
    getAll: async () => {
      try {
        const response = await axios.get(`${baseUrl}/products`);
        return response.data; // Axios response data is in `data`
      } catch (error) {
        console.error('Error fetching all products:', error);
        throw error;
      }
    },
  },
};

export default ApiCall;
