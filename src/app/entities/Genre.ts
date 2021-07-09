export class Genre {
  public readonly id!: string;

  public name!: string;

  constructor(props: Omit<Genre, 'id' | 'getId'>, id: string) {
    Object.assign(this, props);

    this.id = id;
  }
}
