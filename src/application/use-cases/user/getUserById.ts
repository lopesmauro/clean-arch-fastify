import { userRepository } from "../../../infrastructure/repositories/userRepository"

export const getUserById = async (id: string) => {
  return await userRepository.getUserById(id)
}