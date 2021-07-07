export class Music {
  private readonly id!: string;
  public title!: string;
  public file!: string;
  public user_id!: string;
  public album_id!: string;

  constructor(props: Omit<Music, 'id'>, id: string) {
    Object.assign(this, props);

    this.id = id;
  }
}
