import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export const getAllChirps = () => api.get(`/`);

export const postNewChirp = (chirpText) => {
  return api.post(`/`, { text: chirpText })
}

const apis = {
  getAllChirps,
  postNewChirp,
};

export default apis;