import { USER_ROLES } from '../../../types/UserRoles';

export interface ICreateUserRequestDTO {
  name: any;
  nickname: any;
  email: any;
  password: any;
  role: any;
}

export interface ICreateUserValidatedDataDTO {
  name: string;
  nickname: string;
  email: string;
  password: string;
  role: USER_ROLES;
}

export interface ICreateUserResponseDTO {
  token: string;
  message: string;
}
