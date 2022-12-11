import axios, { AxiosError, AxiosResponse } from 'axios';
import axiosInstance from '../common/axiosDefault';
import { MainResponseError } from '../types/mainResponse';
import { PrivateOpportunitiesSearch, PrivateOpportunitiesSearchResponse } from '../types/privateOpportunities.dto';
import { AuthRequest } from './auth';

export class PrivateOpportunitiesRequest {
  static async search({ privateOpportunities }: { privateOpportunities: PrivateOpportunitiesSearch }) {
    const result: AxiosResponse<PrivateOpportunitiesSearchResponse> | AxiosError<MainResponseError> =
      await axiosInstance
        .post(`/opportunities/private/search`, privateOpportunities, {
          headers: {
            Authorization: 'Bearer ' + AuthRequest.authAccessToken?.accessToken,
          },
        })
        .catch((error: AxiosError<MainResponseError>) => error);
    if (axios.isAxiosError(result)) {
      throw new Error(result.response?.data.metadata.error);
    }
    return result.data;
  }
}
