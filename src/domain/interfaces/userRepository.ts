export interface UserRepository {
  create(user: { name: string; email: string }): Promise<void>;
  getUserById(id: string): Promise<{ name: string; email: string } | null>;
  updateUser(id: string, userData: { name: string; email: string }): Promise<void>;
  deleteUser(id: string): Promise<void>;
}
  