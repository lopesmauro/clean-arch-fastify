import { User } from "@prisma/client"

export interface UserRepository {
  createUser(user: { name: string; email: string }): Promise<void>
  getUserById(id: string): Promise<User | null>
  updateUser(id: string, userData: { name: string; email: string }): Promise<void>
  deleteUser(id: string): Promise<void>;
}
   