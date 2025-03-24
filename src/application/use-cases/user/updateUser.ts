import { userRepository } from "../../../infrastructure/repositories/userRepository"

export const updateUser = async (id: string, userData: { name: string; email: string }) => {   
  await userRepository.updateUser(id, userData)
}