import axios, { AxiosError, AxiosResponse } from 'axios';
import axiosInstance from '../common/axiosDefault';
import { AuthAccessToken, AuthNewToken, AuthNewTokenResponse } from '../types/auth.dto';
import { MainResponseError } from '../types/mainResponse';

export class AuthRequest {
  static authAccessToken: AuthAccessToken | null = null;

  static async newToken({ authNewToken }: { authNewToken: AuthNewToken }) {
    const response: AxiosResponse<AuthNewTokenResponse> | AxiosError<MainResponseError> = await axiosInstance
      .post(`auth/token`, authNewToken)
      .catch((error) => error);
    if (axios.isAxiosError(response)) {
      throw new Error(response.response?.data.metadata.error);
    }
    AuthRequest.setAccessToken({ ...response.data.result });
    return response.data;
  }

  static setAccessToken(token: AuthAccessToken) {
    AuthRequest.authAccessToken = token;
  }
}
