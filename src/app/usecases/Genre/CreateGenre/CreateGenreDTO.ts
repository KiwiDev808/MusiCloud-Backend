export interface ICreateGenreRequestDTO {
  name: any;
  token: any;
}

export interface ICreateGenreValidatedDataDTO {
  name: string;
  token: string;
}

export interface ICreateGenreResponseDTO {
  message: string;
}
