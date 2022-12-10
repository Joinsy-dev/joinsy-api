import { PrivateOpportunitiesRequest } from '../requests/privateOpportunities';
import * as moment from 'moment';

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
