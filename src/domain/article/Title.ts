export default class Title {
  private constructor(public readonly title: string) {
    Object.freeze(this);
  }

  static create(title: string): Title {
    return new Title(title);
  }

  get value(): string {
    return this.title;
  }
}
