import { Genre } from '../../../entities/Genre';

export interface IGetAllGenresRequestDTO {
  token: any;
}

export interface IGetAllGenresValidatedDataDTO {
  token: string;
}

export interface IGetAllGenresResponseDTO {
  message: string;
  genres: Genre[];
}
