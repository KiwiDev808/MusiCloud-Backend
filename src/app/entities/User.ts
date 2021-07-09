import { USER_ROLES } from '../types/UserRoles';

export class User {
  public readonly id!: string;

  public name!: string;
  public nickname!: string;
  public email!: string;
  public password!: string;
  public role!: USER_ROLES;

  constructor(props: Omit<User, 'id' | 'getId'>, id: string) {
    Object.assign(this, props);

    this.id = id;
  }
}
