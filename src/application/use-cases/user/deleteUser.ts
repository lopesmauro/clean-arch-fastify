import { userRepository } from "../../../infrastructure/repositories/userRepository"

export const deleteUser = async (id: string) => {
  await userRepository.deleteUser(id)
}