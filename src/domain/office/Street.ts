export class Street {
  public readonly name: string;
  private constructor(name: string) {
    this.name = name;
    Object.freeze(this);
  }

  static create(name: string): Street {
    return new Street(name);
  }

  get value(): string {
    return this.name;
  }
}
