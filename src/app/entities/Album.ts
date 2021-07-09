export class Album {
  private readonly id!: string;

  public name!: string;
  public user_id!: string;

  public getId() {
    return this.id;
  }

  constructor(props: Omit<Album, 'id' | 'getId'>, id: string) {
    Object.assign(this, props);

    this.id = id;
  }
}
