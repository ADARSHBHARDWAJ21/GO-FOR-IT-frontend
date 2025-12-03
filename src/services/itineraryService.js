const API_BASE_URL = 'https://go-for-it-backend-1-9rqz.onrender.com/api';

class ItineraryService {
    async generateItinerary(tripDetails) {
        try {
            const response = await fetch(`${API_BASE_URL}/itinerary/generate`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(tripDetails)
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to generate itinerary');
            }

            const data = await response.json();
            return data.data;
        } catch (error) {
            console.error('Error generating itinerary:', error);
            throw error;
        }
    }

    async generateCustomItinerary(tripDetails, customizations = {}) {
        try {
            const response = await fetch(`${API_BASE_URL}/itinerary/generate-custom`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...tripDetails,
                    customizations
                })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to generate custom itinerary');
            }

            const data = await response.json();
            return data.data;
        } catch (error) {
            console.error('Error generating custom itinerary:', error);
            throw error;
        }
    }

    async regenerateItinerary(originalItinerary, modifications = {}, customizations = {}) {
        try {
            const response = await fetch(`${API_BASE_URL}/itinerary/regenerate`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    originalItinerary,
                    modifications,
                    customizations
                })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to regenerate itinerary');
            }

            const data = await response.json();
            return data.data;
        } catch (error) {
            console.error('Error regenerating itinerary:', error);
            throw error;
        }
    }
}

export default new ItineraryService();

