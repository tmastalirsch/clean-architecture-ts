export default class Item {
  private constructor(public readonly item: string) {
    Object.freeze(this);
  }

  static create(item: string): Item {
    return new Item(item);
  }

  get value(): string {
    return this.item;
  }
}
