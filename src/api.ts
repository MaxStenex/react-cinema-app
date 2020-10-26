import Axios from 'axios';

const api = Axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});

export const apiKey = '2c255a86f3deaa95c498a434919fc679';

export default api;
