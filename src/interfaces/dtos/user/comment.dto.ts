import { UserDTO } from "./user.dto"
import { PostDTO } from "./post.dto"

export interface CreateCommentDTO {
    content: string
    authorId: string
    postId: string
}
  
export interface CommentDTO {
    id: string
    content: string
    author: UserDTO
    post: PostDTO
    createdAt: Date
    updatedAt: Date
}
  