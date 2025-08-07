"use client";

import useComment from "@/hooks/useComment";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { CommentGnb } from "./_components/CommentGnb";
import CommentBox from "./_components/CommentBox";
import Pagination from "@/components/common/Pagination";

const Comment = () => {
  const ouid = useSearchParams().get("ouid");
  const [category, setCategory] = useState<"desc" | "popular">("desc");
  const [page, setPage] = useState<number>(1);

  const { data, isPending, isError } = useComment.useGetComments(ouid!, category, page);

  console.log(data);

  if (isPending) return <div>loading</div>;
  if (isError) return <div>error</div>;

  return (
    <div>
      <section className="w-[90%] tablet:w-[80%] pc:w-[1200px] mx-auto bg-gray50 rounded-[10px] py-5">
        <div className="w-[90%] mx-auto mb-10">
          <h2 className="font-bold text-3xl">
            <img src="/icons/comment.png" alt="유저 코멘트" className="inline-block" /> 유저 코멘트{" "}
            <span className="inline-block w-[30px] h-[30px] rounded-[10px] bg-red100 text-center text-2xl">
              {data.totalCount}
            </span>
          </h2>
        </div>
        <CommentGnb category={category} setCategory={setCategory} />
        <div className="w-[90%] tablet:w-[85%] mx-auto">
          <CommentBox comments={data.comments} />
          <Pagination currentPage={page} onPageChange={setPage} totalPages={data.totalPages} />
          <p className="w-[70%] tablet:w-[85%] mx-auto text-[#9e9e9e] text-xl mb-10 font-bold">
            무분별한 악플은 관리자의 권한하에 지워질 수 있습니다. 욕설을 삼가하고 건전한 인터넷
            문화를 만들어 주세요.
          </p>
        </div>
        <div className="w-[90%] tablet:w-[85%] mx-auto">
          <form className="grid grid-cols-1 gap-[10px]">
            <div className="w-[100%] tablet:w-[75%] pc:w-[50%] flex justify-between gap-[10px]">
              <input
                type="text"
                name="작성자"
                placeholder="작성자"
                className="outline-0 w-[50%] border border-black rounded-[10px] px-[20px] py-[5px] bg-white text-black font-bold text-base"
              />
              <input
                type="password"
                name="비밀번호"
                placeholder="비밀번호"
                className="outline-0 w-[50%] border border-black rounded-[10px] px-[20px] py-[5px] bg-white text-black font-bold text-base"
              />
            </div>
            <div className="">
              <textarea
                name=""
                id=""
                className="outline-0 px-[20px] py-[10px] h-[100px] w-full bg-white font-bold text-base rounded-[10px] text-black"
                placeholder="임정빈님에게 코멘트를 달아주세요."
              />
            </div>
            <div className="text-right">
              <button className="px-[20px] py-[5px] rounded-[10px] text-white bg-green200 font-bold text-xl hover:bg-[#084c36] hover:translate-y-[-2px] duration-300">
                작성하기
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Comment;
