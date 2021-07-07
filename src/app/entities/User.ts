import { USER_ROLES } from '../types/UserRoles';

export class User {
  private readonly _id!: string;

  public name!: string;
  public email!: string;
  public password!: string;
  public role!: USER_ROLES;

  public get id(): string {
    return this._id;
  }

  constructor(props: Omit<User, 'id'>, id: string) {
    Object.assign(this, props);

    this._id = id;
  }
}
