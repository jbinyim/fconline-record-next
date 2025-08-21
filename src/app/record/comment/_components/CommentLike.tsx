"use client";

import useComment from "@/hooks/useComment";
import { useState } from "react";

export default function CommentLike({ like, commentId }: { like: number; commentId: string }) {
  const [commentLike, setCommentLike] = useState<number>(like);

  const { mutate } = useComment.useToggleLike();

  const handleClick = () => {
    mutate(
      { commentId },
      {
        onSuccess: (data) => {
          setCommentLike(data.likeCount);
        },

        onError: (e) => {
          alert(e.error || "좋아요에 실패했습니다");
          return;
        },
      },
    );
  };

  return (
    <button onClick={handleClick} className="flex items-center gap-1">
      <img src="/icons/thumb.png" alt="좋아요" className="h-3.5" />
      <p className="text-sm align-middle">{commentLike}</p>
    </button>
  );
}
