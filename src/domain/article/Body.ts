export default class Body {
  private constructor(public readonly body: string) {
    Object.freeze(this);
  }

  static create(body: string): Body {
    return new Body(body);
  }

  get value(): string {
    return this.body;
  }
}
