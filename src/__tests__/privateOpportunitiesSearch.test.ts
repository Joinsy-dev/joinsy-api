require('dotenv').config();
import { PrivateOpportunitiesRequest } from '../requests/privateOpportunities';
import * as moment from 'moment';
import { AuthRequest } from '../requests/auth';

jest.setTimeout(60000);

AuthRequest.setAccessToken({ accessToken: process.env.TOKEN_ACCESS, expiresAt: moment().add(1, `day`).toDate() });
test('Private Opportunities Search API Test', async () => {
  expect(
    (
      await PrivateOpportunitiesRequest.search({
        privateOpportunities: {
          closeEndDate: moment().toDate(),
          closeStartDate: moment().subtract(7, `day`).toDate(),
          take: 10,
          skip: 0,
        },
      })
    ).metadata.code,
  ).toBe(200);
});
