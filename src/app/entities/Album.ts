export class Album {
  private readonly id!: string;

  public name!: string;
  public user_id!: string;

  constructor(props: Omit<Album, 'id'>, id: string) {
    Object.assign(this, props);

    this.id = id;
  }
}
