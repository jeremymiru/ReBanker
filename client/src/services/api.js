import axios from 'axios';

// You might have your server running at http://localhost:5000
// Adjust accordingly if you deploy or run on a different port
const api = axios.create({
  baseURL: 'http://localhost:5000/api'
});

export default api;
