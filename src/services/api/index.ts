import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://dev-react-native.ispbox.com.br/',
  headers: {
    'Content-Type': 'multipart/form-data',
    'X-Requested-With': 'XMLHttpRequest',
  },
});
