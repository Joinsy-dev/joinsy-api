export interface MainResponse {
    metadata: Metadata | MetadataWithPageInfo | MetadataError;
}
export interface MainResponseError {
    metadata: MetadataError;
}
export interface Metadata {
    code: number;
}
export interface MetadataError {
    code: number;
    error: string;
}
export interface MetadataWithPageInfo {
    code: number;
    total: number;
    skip: number;
    take: number;
}
