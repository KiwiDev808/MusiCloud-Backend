export interface ICreateAlbumRequestDTO {
  name: any;
  token: any;
}

export interface ICreateAlbumValidatedDataDTO {
  name: string;
  token: string;
}

export interface ICreateAlbumResponseDTO {
  message: string;
}
