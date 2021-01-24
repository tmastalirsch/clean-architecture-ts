export class City {
  public readonly name: string;
  private constructor(name: string) {
    this.name = name;
    Object.freeze(this);
  }

  static create(name: string): City {
    return new City(name);
  }

  get value(): string {
    return this.name;
  }
}
