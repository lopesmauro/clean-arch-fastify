import { authRepository } from "../../../infrastructure/repositories/authRepositories"

export const getUserByEmail = async (email: string, password: string) => {
  const user = await authRepository.getUserByEmail(email, password)
  if (!user) return null
  return user
}