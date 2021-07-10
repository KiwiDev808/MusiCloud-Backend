export interface IFindProfileRequestDTO {
  token: any;
  id: any;
}

export interface IFindProfileValidatedDataDTO {
  token: string;
  id: string;
}

export interface IFindProfileProfileDTO {
  name: string;
  nickname: string;
}

export interface IFindProfileResponseDTO {
  message: string;
  profile: IFindProfileProfileDTO;
}
