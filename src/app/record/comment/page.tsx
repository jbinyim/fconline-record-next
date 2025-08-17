"use client";

import useComment from "@/hooks/useComment";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { CommentGnb } from "./_components/CommentGnb";
import CommentBox from "./_components/CommentBox";
import Pagination from "@/components/common/Pagination";
import CommentForm from "./_components/CommentForm";

const Comment = () => {
  const ouid = useSearchParams().get("ouid");
  const [category, setCategory] = useState<"desc" | "popular">("desc");
  const [page, setPage] = useState<number>(1);

  const { data, isPending, isError } = useComment.useGetComments(ouid!, category, page);

  if (isPending) return <div>loading</div>;
  if (isError) return <div>error</div>;

  return (
    <div>
      <section className="w-[90%] tablet:w-[80%] pc:w-[1200px] mx-auto bg-gray50 rounded-[10px] py-5">
        <div className="w-[90%] mx-auto mb-10">
          <h2 className="font-bold text-3xl">
            <img src="/icons/comment.png" alt="유저 코멘트" className="inline-block" /> 유저 코멘트{" "}
            <p className="inline-block px-1.5 py-0.5 rounded-[10px] bg-green200 text-center text-2xl">
              {data.totalCount}
            </p>
          </h2>
        </div>
        <CommentGnb category={category} setCategory={setCategory} />
        <div className="w-[90%] tablet:w-[85%] mx-auto">
          {data.comments.length === 0 ? (
            <p className="text-center my-20">아직 받은 코멘트가 없습니다!</p>
          ) : (
            <>
              <CommentBox comments={data.comments} />
              <Pagination currentPage={page} onPageChange={setPage} totalPages={data.totalPages} />
            </>
          )}
          <p className="w-[70%] tablet:w-[85%] mx-auto mt-4 text-[#9e9e9e] text-m lg:text-xl mb-10 font-bold">
            무분별한 악플은 관리자의 권한하에 지워질 수 있습니다. 욕설을 삼가하고 건전한 인터넷
            문화를 만들어 주세요.
          </p>
        </div>
        <CommentForm ouid={ouid!} />
      </section>
    </div>
  );
};

export default Comment;
