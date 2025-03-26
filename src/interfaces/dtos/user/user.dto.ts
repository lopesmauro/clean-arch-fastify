import { PostDTO } from "./post.dto"
import { CommentDTO } from "./comment.dto"
import { SessionDTO } from "./session.dto"


export interface UserDTO {
    id: string
    name: string
    email: string
    password: string
    posts: PostDTO[]
    comments: CommentDTO[]
    sessions: SessionDTO[]
    createdAt: Date
    updatedAt: Date
  
}
export interface GetUserIdDTO {
    id: string
}