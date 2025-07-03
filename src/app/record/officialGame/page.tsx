"use client";

import React from "react";
import MatchGame from "./_components/MatchGame";
import { useSearchParams } from "next/navigation";
import useAccount from "@/hooks/useAccount";

const OfficialGame = () => {
  const ouid = useSearchParams().get("ouid");

  const {
    data: matchData,
    isPending,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useAccount.useUserMatch(ouid!);

  if (isPending) {
    return <div>loaing</div>;
  }

  return (
    <div>
      <section className="pc:w-[1200px] tablet:w-[80%] w-[90%] mx-auto grid grid-cols-1 gap-[20px]">
        {matchData?.pages.map((page, idx) => (
          <React.Fragment key={idx}>
            {page.map((match: string) => (
              <MatchGame key={match} matchData={match} />
            ))}
          </React.Fragment>
        ))}
      </section>
      <div>
        {hasNextPage && (
          <button onClick={() => fetchNextPage()} disabled={isFetchingNextPage} className="mx-auto mt-[45px] block text-center px-[100px] py-[25px] font-bold text-2xl bg-gradient-to-r from-[#50c878] to-[#4ecdc4] rounded-[20px]" >
            {isFetchingNextPage ? "불러오는 중..." : "더보기"}
          </button>
        )}
      </div>
    </div>
  );
};

export default OfficialGame;
