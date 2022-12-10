import axios, { AxiosResponse } from 'axios';
import axiosInstance from '../common/axiosDefault';
import { AuthAccessToken, AuthNewToken, AuthNewTokenResponse } from '../types/auth.dto';

export class AuthRequest {
  static authAccessToken: AuthAccessToken | null = null;

  static async newToken({ authNewToken }: { authNewToken: AuthNewToken }) {
    const result: AxiosResponse<AuthNewTokenResponse> = await axiosInstance.post(`auth/token`, authNewToken);
    if (axios.isAxiosError(result)) throw new Error(result.response?.data?.error);

    AuthRequest.setAccessToken({ ...result.data.result });
    return result.data;
  }

  static setAccessToken(token: AuthAccessToken) {
    this.authAccessToken = token;
  }
}
