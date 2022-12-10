import { PrivateOpportunitiesSearch, PrivateOpportunitiesSearchResponse } from '../types/privateOpportunities.dto';
export declare class PrivateOpportunitiesRequest {
    static search({ privateOpportunities }: {
        privateOpportunities: PrivateOpportunitiesSearch;
    }): Promise<PrivateOpportunitiesSearchResponse>;
}
