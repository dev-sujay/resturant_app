import AsyncStorage from '@react-native-async-storage/async-storage';
export const API_URL = 'http://localhost:8000/api/v1'

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MTY4MTk1NjhjMmRmYmZiZjE3NDQzMyIsImVtYWlsIjoicGF1bHN1amF5OTk5QGdtYWlsLmNvbSIsInVzZXJUeXBlIjoiYWRtaW4iLCJpYXQiOjE3MTI5NDM3Nzd9.0y8Q15VG7AgO_RLJNJhX2cPbttWniEYKhJy8U0vjxUI"

const apiService = async (obj) => {
    let settings = {
        method: obj.method,
        credentials: 'include',
        headers: {
            'Content-Type': obj.content_type ? obj.content_type : 'application/json',
            "authorization": "Bearer " + (obj.accessToken ? obj.accessToken : token),
        },
    }
    if (obj?.data) {
        settings.body = JSON.stringify(obj.data)
    }
    if (obj?.query && Object.keys(obj.query).length > 0) {
        obj.url += "?"
        for (const [key, value] of Object.entries(obj.query)) {
            obj.url += `${key}=${value}&`
        }
        obj.url = obj.url.slice(0, -1)
    }
    try {
        const response = await fetch(`${API_URL}${obj.url}`, settings);
        let result = await response.json();
        return { success: response.success, data: result.data };
    } catch (error) {
        throw error;
    }
};

export default apiService;
