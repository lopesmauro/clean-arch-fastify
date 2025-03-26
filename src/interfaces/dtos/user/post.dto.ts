import { UserDTO} from './user.dto'
import { CommentDTO } from './comment.dto'

export interface CreatePostDTO {
    title: string
    content: string
    authorId: string
}
  
export interface PostDTO {
    id: string
    title: string
    content: string
    author: UserDTO
    comments: CommentDTO[]
    createdAt: Date
    updatedAt: Date
}
