export enum VideoAssetStatus {
  Pending = 'PENDING',
  Success = 'SUCCESS',
  Failed = 'FAILED',
}

export enum VideoAssetQuality {
  Preview = 'preview',
  Max = '',
}

export interface VideoAssetOptions {
  quality?: VideoAssetQuality;
}
