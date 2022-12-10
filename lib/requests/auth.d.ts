import { AuthAccessToken, AuthNewToken, AuthNewTokenResponse } from '../types/auth.dto';
export declare class AuthRequest {
    static authAccessToken: AuthAccessToken | null;
    static newToken({ authNewToken }: {
        authNewToken: AuthNewToken;
    }): Promise<AuthNewTokenResponse>;
    static setAccessToken(token: AuthAccessToken): void;
}
