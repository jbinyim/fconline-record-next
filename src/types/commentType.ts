export interface CommentType {
  createdAt: string;
  id: string;
  ipAddress: string;
  like: number;
  nickname: string;
  text: string;
}

export interface PostCommentResponse {
  id: string;
  fcOuid: string;
  nickname: string;
  text: string;
  like: number;
  createdAt: string;
  updateAt: string;
}

export interface PostCommentError {
  error: string;
}

export interface DeleteCommentError {
  sucess: boolean;
  message: string;
}

export interface ToggleLikeResponse {
  success: boolean;
  action: string;
  likeCount: number;
}
export interface ToggleLikeError {
  success: boolean;
  error: string;
  likeCount: number;
}
