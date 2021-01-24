export default class ImagePath {
  private constructor(public readonly path: string) {
    Object.freeze(this);
  }

  static create(path: string): ImagePath {
    return new ImagePath(path);
  }
  get value(): string {
    return this.path;
  }
}
