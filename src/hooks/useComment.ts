import commentApi from "@/api/commentApi";
import { PostCommentError, PostCommentResponse } from "@/types/commentType";
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

export default { useGetComments, usePostComment };
