import { MusicWithAuthor } from '../../../types/MusicDTO';

export interface IGetAllMusicsRequestDTO {
  token: any;
}

export interface IGetAllMusicsValidatedDataDTO {
  token: string;
}

export interface IGetAllMusicsResponseDTO {
  message: string;
  musics: MusicWithAuthor[];
}
