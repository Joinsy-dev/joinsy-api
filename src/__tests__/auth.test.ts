require('dotenv').config();
import { AuthRequest } from '../requests/auth';

test('Auth API Test', async () => {
  expect(
    (
      await AuthRequest.newToken({
        authNewToken: {
          clientId: process.env.clientId,
          clientSecret: process.env.clientSecret,
          password: process.env.password,
          username: process.env.username,
        },
      })
    ).metadata.code,
  ).toBe(200);
});
