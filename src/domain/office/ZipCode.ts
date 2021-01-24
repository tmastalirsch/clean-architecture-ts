export class ZipCode {
  public readonly code: number;
  private constructor(code: number) {
    this.code = code;
    Object.freeze(this);
  }

  static create(code: number): ZipCode {
    return new ZipCode(code);
  }

  get value(): number {
    return this.code;
  }
}
