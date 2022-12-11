import { MainResponse, MainResponseError } from './mainResponse';

export class AuthNewToken {
  public clientId: string | undefined;
  public clientSecret: string | undefined;
  public password: string | undefined;
  public username: string | undefined;
}

export interface AuthNewTokenResponse extends MainResponse {
  result: {
    accessToken: string;
    expiresAt: Date;
    isFirstLogin: boolean;
    companiesAccess: {
      id: number;
      legacyClientId: number;
      name: string;
      nationalRegistry: string;
      alias: string;
      accessToken: AuthAccessToken;
    }[];
  };
}

export interface AuthAccessToken {
  accessToken: string | undefined;
  expiresAt: Date;
}
