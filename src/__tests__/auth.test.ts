require('dotenv').config();
import { AuthRequest } from '../requests/auth';

test('Auth API Test', async () => {
  expect(
    (
      await AuthRequest.newToken({
        authNewToken: {
          clientId: process.env.CLIENT_ID,
          clientSecret: process.env.CLIENT_SECRET,
          password: process.env.PASSWORD,
          username: process.env.USER_NAME,
        },
      })
    ).metadata.code,
  ).toBe(200);
});
