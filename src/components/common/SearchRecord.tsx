"use client";

import useAccount from "@/hooks/useAccount";
import saveSearchHistory from "@/utils/saveSearchHistory";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const SearchRecord = () => {
  const [userName, setUserName] = useState<string>("");
  const router = useRouter();

  const { mutate, data, isPending, error } = useAccount.useOuid();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate(userName);
  };

  useEffect(() => {
    if (data) {
      router.push(`/record/officialGame?ouid=${data.ouid}`);
      saveSearchHistory(data.ouid);
      setUserName("");
    }
  }, [data]);

  return (
    <div>
      <section className="searchArea mb-[30px] tablet:mb-[65px] pc:mb-[100px]">
        <div className="w-[80%] my-0 mx-auto tablet:w-[60%] pc:w-[40%]">
          <h2 className="w-[100%] mx-auto text-center mb-[15px] font-bold text-xl">
            유저 검색
          </h2>
          <form
            onSubmit={handleSubmit}
            className="relative w-[100%] text-center"
          >
            <img
              src="/icons/search-icon.png"
              alt="검색 아이콘"
              className="absolute left-[20px] top-[50%] translate-y-[-50%]"
            />
            <input
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              type="search"
              name="search"
              placeholder="닉네임을 입력하세요."
              className="rounded-lg border-2 border-white w-[100%] focus:outline-none px-[60px] py-2 appearance-none"
            />
          </form>
        </div>
      </section>
    </div>
  );
};

export default SearchRecord;
