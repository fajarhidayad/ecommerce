import axios from 'axios';

const API_BASE_URL = process.env.API_BASE_URL || 'http://localhost:5001';
export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
