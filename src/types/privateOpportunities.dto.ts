import { MainResponse, MetadataWithPageInfo } from './mainResponse';

export interface PrivateOpportunitiesSearch {
  publicationStart?: Date;
  publicationEnd?: Date;
  closeStartDate?: Date;
  closeEndDate?: Date;
  order?: string;
  orderBy?: string;
  states?: string[];
  cities?: string[];
  externalId?: string;
  status?: string;
  portal?: number[];
  modality?: string;
  exclusive?: boolean;
  nationalRegistry?: string;
  take: number;
  skip: number;
  keywords?: string[];
  negativeKeywords?: string[];
  description?: string;
  companyName?: string;
}

export interface PrivateOpportunitiesSearchResponse extends MainResponse {
  result: {
    id: number;
    key: string;
    externalId: string;
    modality: string;
    hashId: string;
    declined: boolean;
    declinedDateTime?: any;
    process: boolean;
    title: string;
    city: string;
    state: string;
    openingDate: string;
    openingHour: string;
    proposalHashid?: any;
    publicationDate: string;
    exclusive: boolean;
    objectives: string;
    portalId: number;
    client: string;
    portal: string;
    tags?: any;
    backlogHashId?: any;
    visualized: boolean;
    changed: boolean;
    attachments: {
      fileName: string;
      hashId: string;
      name: string;
      hash: string;
      object: string;
      bucket: string;
    }[];
    nationalRegistries: {
      nationalRegistry: string;
      logins: string[];
      company: string;
    }[];
    posibleDecline: boolean;
  }[];
}
