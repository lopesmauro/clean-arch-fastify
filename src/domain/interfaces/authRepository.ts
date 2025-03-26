import { User } from "@prisma/client"

export interface authRepository {
    getUserByEmail(email: string): Promise<User | null>
}