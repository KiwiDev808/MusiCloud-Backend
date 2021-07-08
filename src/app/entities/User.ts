import { USER_ROLES } from '../types/UserRoles';

export class User {
  private readonly id!: string;

  public name!: string;
  public email!: string;
  public password!: string;
  public role!: USER_ROLES;

  public getId() {
    return this.id;
  }

  constructor(props: Omit<User, 'id' | 'getId'>, id: string) {
    Object.assign(this, props);

    this.id = id;
  }
}
