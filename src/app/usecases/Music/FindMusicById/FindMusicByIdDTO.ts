import { Music } from '../../../entities/Music';

export interface IFindMusicByIdRequestDTO {
  token: any;
  id: any;
}

export interface IFindMusicByIdValidatedDataDTO {
  token: string;
  id: string;
}

export interface IFindMusicByIdResponseDTO {
  message: string;
  music: Music;
}
