import User from '../../entities/User';
import { UserRepository } from '../../repositories/UserRepository';
export class CreateUserUseCase {
  public constructor(public readonly userRepository: UserRepository) {}

  async execute(data: User): Promise<void> {
    const user = User.toPersistence(data);
    const userAlreadyExist = await this.userRepository.findByEmail(user.email);

    if (userAlreadyExist) {
      throw new Error('User already exist.');
    }

    await this.userRepository.save(user);
  }
}
