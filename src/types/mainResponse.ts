export interface MainResponse {
  metadata: Metadata | MetadataWithPageInfo;
}

export interface Metadata {
  code: number;
}

export interface MetadataWithPageInfo {
  code: number;
  total: number;
  skip: number;
  take: number;
}
