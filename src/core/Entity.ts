import { UniqueEntityId } from './UniqueEntityId';

export abstract class Entity<T> {
  public readonly id: UniqueEntityId;
  protected props: T;

  constructor(props: T, id?: UniqueEntityId) {
    this.id = id ? id : new UniqueEntityId();
    this.props = props;
  }
}
