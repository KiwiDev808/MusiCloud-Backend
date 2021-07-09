export interface ICreateMusicRequestDTO {
  title: any;
  file: any;
  genres: any;
  album_id: any;
  token: any;
}

export interface ICreateMusicValidatedDataDTO {
  title: string;
  file: string;
  genres: string[];
  album_id: string;
  token: string;
}

export interface ICreateMusicResponseDTO {
  message: string;
}
