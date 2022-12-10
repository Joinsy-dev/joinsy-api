import axios from 'axios';
import { AuthRequest } from '../requests/auth';

const baseURL = process.env.NODE_ENV === 'development' ? 'https://api-dev.joinsy.com.br' : 'https://api.joinsy.com.br';

const instance = axios.create({
  baseURL,
});

if (AuthRequest?.authAccessToken)
  instance.defaults.headers.common = { Authorization: `bearer ${AuthRequest.authAccessToken}` };

export default instance;
