import { Album } from '../../../entities/Album';

export interface IGetAllAlbumsRequestDTO {
  token: any;
}

export interface IGetAllAlbumsValidatedDataDTO {
  token: string;
}

export interface IGetAllAlbumsResponseDTO {
  message: string;
  albums: Album[];
}
