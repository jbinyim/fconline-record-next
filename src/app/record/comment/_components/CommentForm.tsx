"use client";

import useComment from "@/hooks/useComment";
import { useState } from "react";

export default function CommentForm({ ouid }: { ouid: string }) {
  const [formData, setFormData] = useState({
    text: "",
    password: "",
    nickname: "익명",
  });
  const [error, setError] = useState(false);

  const { mutate, isPending, isError } = useComment.usePostComment();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.password.trim() || !formData.text.trim()) {
      alert("비밀번호 와 코멘트를 입력해주세요.");
      setError(true);
      return;
    }

    mutate(
      {
        ouid,
        nickname: formData.nickname,
        text: formData.text,
        password: formData.password,
      },
      {
        onSuccess: () => {
          setFormData(() => ({ nickname: "익명", text: "", password: "" }));
        },
      },
    );
  };

  return (
    <div className="w-[90%] tablet:w-[85%] mx-auto">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-[10px]">
        <div className="w-[100%] tablet:w-[75%] pc:w-[50%] flex justify-between gap-[10px]">
          <input
            value={formData.nickname}
            onChange={(e) => setFormData((prev) => ({ ...prev, nickname: e.target.value }))}
            type="text"
            name="작성자"
            placeholder="작성자"
            className="outline-0 w-[50%] border border-black rounded-[10px] px-[20px] py-[5px] bg-white text-black font-bold text-base"
          />
          <input
            value={formData.password}
            onChange={(e) => setFormData((prev) => ({ ...prev, password: e.target.value }))}
            type="password"
            name="비밀번호"
            placeholder="비밀번호"
            className="outline-0 w-[50%] border border-black rounded-[10px] px-[20px] py-[5px] bg-white text-black font-bold text-base"
          />
        </div>
        <textarea
          value={formData.text}
          onChange={(e) => setFormData((prev) => ({ ...prev, text: e.target.value }))}
          className="outline-0 px-[20px] py-[10px] h-[100px] w-full bg-white font-bold text-base rounded-[10px] text-black"
          placeholder="유저에게 코멘트를 달아주세요."
        />
        {isError && <p className="text-red200">댓글 등록에 실축했습니다.</p>}
        <div className="text-right">
          <button
            disabled={isPending}
            className="px-[20px] py-[5px] rounded-[10px] text-white bg-green200 font-bold text-xl hover:bg-[#084c36] hover:translate-y-[-2px] duration-300"
          >
            {isPending ? "작성중" : "작성하기"}
          </button>
        </div>
      </form>
    </div>
  );
}
