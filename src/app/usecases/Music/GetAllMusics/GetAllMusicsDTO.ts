import { Music } from '../../../entities/Music';

export interface IGetAllMusicsRequestDTO {
  token: any;
}

export interface IGetAllMusicsValidatedDataDTO {
  token: string;
}

export interface IGetAllMusicsResponseDTO {
  message: string;
  musics: Music[];
}
