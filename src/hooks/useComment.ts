import commentApi from "@/api/commentApi";
import {
  DeleteCommentError,
  PostCommentError,
  PostCommentResponse,
  ToggleLikeError,
  ToggleLikeResponse,
} from "@/types/commentType";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

function useGetComments(ouid: string, category: string, offset: number) {
  return useQuery({
    queryKey: ["comments", ouid, category, offset],
    queryFn: () => commentApi.getComment(ouid, category, offset),
    placeholderData: (prevData) => prevData,
    staleTime: 1000 * 5,
  });
}

function usePostComment() {
  const queryClient = useQueryClient();

  return useMutation<
    PostCommentResponse,
    PostCommentError,
    { ouid: string; nickname: string; text: string; password: string }
  >({
    mutationFn: ({ ouid, nickname, text, password }) =>
      commentApi.postComment(ouid, nickname, text, password),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments"] });
    },

    onError: (e: PostCommentError) => {
      console.error("댓글 작성 실패", e.error);
    },
  });
}

function useDeleteComment() {
  const queryClient = useQueryClient();

  return useMutation<PostCommentResponse, DeleteCommentError, { id: string; password: string }>({
    mutationFn: ({ id, password }) => commentApi.deleteComment(id, password),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments"] });
    },
    onError: (e) => {
      console.error("댓글 삭제 실패", e);
    },
  });
}

function useToggleLike() {
  const queryClient = useQueryClient();

  return useMutation<ToggleLikeResponse, ToggleLikeError, { commentId: string }>({
    mutationFn: ({ commentId }) => commentApi.toggleLike(commentId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["commentLike"] });
    },
    onError: (e) => {
      console.error("좋아요 등록 실패", e);
    },
  });
}

export default { useGetComments, usePostComment, useDeleteComment, useToggleLike };
