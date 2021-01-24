import uuid from 'uuid';

export class UniqueEntityId {
  public readonly id: string;
  constructor(id?: string | number) {
    this.id ? id : uuid.v4;
  }
}
