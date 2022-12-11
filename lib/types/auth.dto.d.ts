import { MainResponse } from './mainResponse';
export declare class AuthNewToken {
    clientId: string | undefined;
    clientSecret: string | undefined;
    password: string | undefined;
    username: string | undefined;
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
