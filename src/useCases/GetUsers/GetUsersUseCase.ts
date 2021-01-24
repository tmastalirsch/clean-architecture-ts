// import User from '../../entities/User';
import { UserRepository } from '../../repositories/UserRepository';
export class CreateUserUseCase {
  public constructor(public readonly userRepository: UserRepository) {}

  // async execute(): Promise<User[]> {
  //   // return await this.userRepository.all();
  // }
}
