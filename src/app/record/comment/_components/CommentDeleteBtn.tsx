"use client";

import useComment from "@/hooks/useComment";
import { useState } from "react";

export default function CommentDeleteBtn({ commentId }: { commentId: string }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");

  const { mutate, isPending, isError } = useComment.useDeleteComment();

  const handleClick = () => {
    if (!password.trim()) {
      alert("비밀번호를 입력해주세요!");
      return;
    }
    console.log(commentId, password);
    mutate(
      {
        id: commentId,
        password,
      },
      {
        onSuccess: () => {
          setIsOpen(false);
          setPassword("");
          alert("삭제 되었습니다!");
        },

        onError: (e) => {
          alert(e.message || "코멘트 삭제에 실패했습니다");
          return;
        },
      },
    );
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        type="button"
        className="text-red100 text-[10px] lg:text-xs"
      >
        {isOpen ? "" : "삭제"}
      </button>
      {isOpen && (
        <div className="absolute right-0 flex items-center gap-1">
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="비밀번호를 입력하세요"
            className="border outline-none rounded-lg px-2"
          />
          <button
            onClick={handleClick}
            className="bg-[#d9d9d9d9] text-black50 font-bold px-1.5 rounded-lg hover:bg-green200 hover:text-white"
          >
            {isPending ? "삭제중" : "삭제"}
          </button>
          <button onClick={() => setIsOpen(false)}>닫기</button>
        </div>
      )}
    </>
  );
}
