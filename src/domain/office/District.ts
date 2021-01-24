export class District {
  public readonly name: string;
  private constructor(name: string) {
    this.name = name;
    Object.freeze(this);
  }

  static create(name: string): District {
    return new District(name);
  }

  get value(): string {
    return this.name;
  }
}
