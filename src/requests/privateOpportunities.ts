import axios, { AxiosResponse } from 'axios';
import axiosInstance from '../common/axiosDefault';
import { PrivateOpportunitiesSearch, PrivateOpportunitiesSearchResponse } from '../types/privateOpportunities.dto';

export class PrivateOpportunitiesRequest {
  static async search({ privateOpportunities }: { privateOpportunities: PrivateOpportunitiesSearch }) {
    const result: AxiosResponse<PrivateOpportunitiesSearchResponse> = await axiosInstance.post(
      `/opportunities/private/search`,
      privateOpportunities,
    );
    if (axios.isAxiosError(result)) throw new Error(result.response?.data?.error);
    return result.data;
  }
}
