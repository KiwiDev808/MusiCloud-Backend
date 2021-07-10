export interface IUserProfileRequestDTO {
  token: any;
}

export interface IUserProfileValidatedDataDTO {
  token: string;
}

export interface IUserProfileProfileDTO {
  name: string;
  nickname: string;
}

export interface IUserProfileResponseDTO {
  message: string;
  profile: IUserProfileProfileDTO;
}
