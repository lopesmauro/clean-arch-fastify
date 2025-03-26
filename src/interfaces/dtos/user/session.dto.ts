import { UserDTO } from "./user.dto"

export interface CreateSessionDTO {
    userId: string
    token: string
    expiresAt: Date
  }
  
  export interface SessionDTO {
    id: string
    user: UserDTO
    token: string
    createdAt: Date
    expiresAt: Date
  }
  