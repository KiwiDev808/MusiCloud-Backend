export class MusicGenre {
  public music_id!: string;
  public genre_id!: string;

  constructor(props: MusicGenre) {
    Object.assign(this, props);
  }
}
