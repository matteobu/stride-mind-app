// client/src/services/authService.ts
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

interface ErrorResponse {
  message: string;
  // other properties if applicable
}

export const register = async (
  name: string,
  email: string,
  password: string
) => {
  try {
    const response = await axios.post(`${API_URL}/register`, {
      name,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw (error as ErrorResponse).message;
  }
};
