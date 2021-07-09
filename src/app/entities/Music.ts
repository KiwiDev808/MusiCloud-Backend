export class Music {
  public readonly id!: string;
  public title!: string;
  public file!: string;
  public user_id!: string;
  public album_id!: string;
  public date!: string;

  constructor(props: Omit<Music, 'id' | 'date' | 'getId'>, id: string) {
    Object.assign(this, props);

    this.date = Date.now().toString();
    this.id = id;
  }
}
