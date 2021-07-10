import { MusicDetails } from '../../../types/MusicDTO';

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
  musicDetails: MusicDetails;
}
