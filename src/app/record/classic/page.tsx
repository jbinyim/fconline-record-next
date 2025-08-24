"use client";

import React from "react";
import LoadingSkeleton from "@/components/common/LoadingSkeleton";
import RecordBody from "@/components/common/RecordBody";
import useAccount from "@/hooks/useAccount";
import { useSearchParams } from "next/navigation";
import MatchGame from "../officialGame/_components/page/MatchGame";
import NoData from "@/components/common/NoData";

export default function ClassicGame() {
  const ouid = useSearchParams().get("ouid");

  const {
    data: classicData,
    isPending,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useAccount.useUserMatch(ouid!, 40);

  console.log(classicData);

  if (isPending) {
    <RecordBody>
      <LoadingSkeleton type="match" />
    </RecordBody>;
  }

  return (
    <div>
      <RecordBody>
        {classicData?.pages[0].length === 0 && <NoData />}
        {classicData?.pages.map((page, idx) => (
          <React.Fragment key={idx}>
            {page.map((match: string) => (
              <MatchGame key={match} matchData={match} />
            ))}
          </React.Fragment>
        ))}
      </RecordBody>
      <div className="mb-20">
        {hasNextPage && (
          <button
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
            className="mx-auto mt-[45px] block text-center px-[100px] py-[25px] font-bold text-2xl bg-gradient-to-r from-[#50c878] to-[#4ecdc4] rounded-[20px]"
          >
            {isFetchingNextPage ? "불러오는 중.." : "더보기"}
          </button>
        )}
      </div>
    </div>
  );
}
