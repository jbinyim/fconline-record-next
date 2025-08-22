"use client";

import fo4Mappings from "@/utils/fo4Mappings";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useQueries } from "@tanstack/react-query";
import accountApi from "@/api/accountApi";
import LoadingSkeleton from "../common/LoadingSkeleton";

type DivisionInfo = {
  matchType: number;
  division: number;
  achievementDate: string;
};

type UserInfo = {
  ouid: string;
  nickname: string;
  division: DivisionInfo[];
};

const RecentRecord = () => {
  const [recentOuids, setRecentOuids] = useState<string[]>([]);

  const router = useRouter();

  useEffect(() => {
    const storge = localStorage.getItem("userouid");
    if (storge) {
      try {
        const ouid = JSON.parse(storge);
        // 유효한 ouid 배열인지 확인
        if (Array.isArray(ouid)) {
          setRecentOuids(ouid.filter((id) => typeof id === "string" && id.trim() !== ""));
        }
      } catch (error) {
        console.error("localStorage 파싱 에러:", error);
        setRecentOuids([]);
      }
    }
  }, []);

  const userBasicQueries = useQueries({
    queries: recentOuids.map((ouid) => ({
      queryKey: ["userBasic", ouid],
      queryFn: () => accountApi.getUserBasic(ouid),
      enabled: !!ouid,
    })),
  });

  const userDivisionQueries = useQueries({
    queries: recentOuids.map((ouid) => ({
      queryKey: ["userMaxDivision", ouid],
      queryFn: () => accountApi.getUserMaxdivision(ouid),
      enabled: !!ouid,
    })),
  });

  const isPending =
    userBasicQueries.some((query) => query.isPending) ||
    userDivisionQueries.some((query) => query.isPending);
  const isError =
    userBasicQueries.some((query) => query.isError) ||
    userDivisionQueries.some((query) => query.isError);

  const userInfos: UserInfo[] = recentOuids.map((ouid, idx) => {
    const basicData = userBasicQueries[idx]?.data;
    const divisionData = userDivisionQueries[idx]?.data;
    return {
      ouid,
      nickname: basicData?.nickname || "Unknown",
      division: divisionData || [],
    };
  });

  let content;

  if (isPending) {
    content = (
      <ul className="mobile:w-[90%] mx-auto grid grid-cols-2 gap-5 pc:gap-10 pc:flex pc:justify-between pc:items-center pc:w-full">
        {Array(4)
          .fill(0)
          .map((_, idx) => (
            <LoadingSkeleton type="recent" key={idx} />
          ))}
      </ul>
    );
  } else if (userInfos.length === 0 || isError) {
    content = <div className="text-center py-10">최근 조회한 유저가 없습니다!</div>;
  } else {
    content = (
      <ul className="mobile:w-[90%] mx-auto grid grid-cols-2 gap-5 pc:gap-10 pc:flex pc:justify-between pc:items-center pc:w-full">
        {userInfos.map((result) => (
          <li
            key={result.ouid}
            onClick={() => router.push(`/record/officialGame?ouid=${result.ouid}`)}
            className="hover:text-green-200 cursor-pointer p-[10px] rounded-[10px] bg-white/10 border border-[rgba(255,255,255,0.1)] text-center w-full flex justify-center duration-300 hover:translate-y-[-5px] hover:bg-white/20 hover:shadow-[0_0_20px_rgba(0,0,0,0.3)]"
          >
            <div>
              <div className="flex items-center justify-between gap-[10px] flex-col">
                <h3 className="font-normal text-sm tablet:text-base pc:text-xl">
                  {result.nickname}
                </h3>
                <img
                  src={fo4Mappings.getDivisionImg(result.division[0]?.division)}
                  alt="유저 티어 이미지"
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div>
      <section className="w-full mb-10 pc:mb-20">
        <div className="w-[80%] mx-auto rounded-[20px] bg-white/10 p-8 border border-[rgba(255,255,255,0.2)] pc:w-[1200px]">
          <h2 className="w-full mb-10 font-bold text-lg tablet:text-xl pc:text-2xl">
            <img src="/icons/recent-record.png" alt="" className="inline-block mr-[15px]" />
            최근 조회한 유저
          </h2>
          {content}
        </div>
      </section>
    </div>
  );
};

export default RecentRecord;
