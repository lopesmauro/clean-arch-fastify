import { userRepository } from '../../../infrastructure/repositories/userRepository';

export const createUser = async (user: { name: string; email: string, password: string }) => {
  await userRepository.create(user)
}
