import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
});

const externalApi = axios.create({
  baseURL: 'https://bellbird.joinhandshake-internal.com/push',
});

export const getAllChirps = () => api.get(`/`);

export const postNewChirp = (chirpText) => {
  return api.post(`/`, { text: chirpText })
}

export const notifyUsers = (chirpId) => {
  return externalApi.post('/', {
    chirp_id: chirpId
  })
}

const apis = {
  getAllChirps,
  postNewChirp,
  notifyUsers,
};

export default apis;