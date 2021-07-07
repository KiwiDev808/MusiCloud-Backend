export class Genre {
  private readonly id!: string;

  public name!: string;

  constructor(props: Omit<Genre, 'id'>, id: string) {
    Object.assign(this, props);

    this.id = id;
  }
}
