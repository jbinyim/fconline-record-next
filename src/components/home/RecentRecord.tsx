"use client";

import fo4Mappings from "@/utils/fo4Mappings";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import LoadingSpinner from "../common/LoadingSpinner";
import { useQueries } from "@tanstack/react-query";
import accountApi from "@/api/accountApi";

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
      const ouid = JSON.parse(storge);
      setRecentOuids(ouid);
    }
  }, []);

  const userBasicQueries = useQueries({
    queries: recentOuids.map((ouid) => ({
      queryKey: ["userBasic", ouid],
      queryFn: () => accountApi.getUserBasic(ouid),
    })),
  });

  const userDivisionQueries = useQueries({
    queries: recentOuids.map((ouid) => ({
      queryKey: ["userMaxDivision", ouid],
      queryFn: () => accountApi.getUserMaxdivision(ouid),
      enabled: !!ouid,
    })),
  });

  const isLoading =
    userBasicQueries.some((q) => q.isLoading) || userDivisionQueries.some((q) => q.isLoading);

  const userInfos: UserInfo[] = recentOuids.map((ouid, idx) => {
    const basicData = userBasicQueries[idx]?.data;
    const divisionData = userDivisionQueries[idx]?.data;
    return {
      ouid,
      nickname: basicData?.nickname || "Unknown",
      division: divisionData || [],
    };
  });

  return (
    <div>
      <section className="w-full mb-10 pc:mb-20">
        <div className="w-[80%] mx-auto rounded-[20px] bg-white/10 p-8 border border-[rgba(255,255,255,0.2)] pc:w-[1200px]">
          <h2 className="w-full mb-10 font-bold text-lg tablet:text-xl pc:text-2xl">
            <img src="/icons/recent-record.png" alt="" className="inline-block mr-[15px]" />
            최근 조회한 유저
          </h2>
          {isLoading && <LoadingSpinner />}
          <ul className="mobile:w-[90%] mx-auto grid grid-cols-2 gap-5 pc:gap-10 pc:flex pc:justify-between pc:items-center pc:w-full">
            {userInfos.map((result) => (
              <li
                key={result.ouid}
                onClick={() => router.push(`/record/officialGame?ouid=${result.ouid}`)}
                className="hover:text-green-200 cursor-pointer p-[10px] rounded-[10px] bg-white/10 border border-[rgba(255,255,255,0.1)] text-center w-full flex justify-center duration-300 hover:translate-y-[-5px] hover:bg-white/20 hover:shadow-[0_0_20px_rgba(0,0,0,0.3)]"
              >
                <div className="">
                  <div className="flex items-center justify-between gap-[10px] flex-col">
                    <h3 className="font-normal text-sm tablet:text-base pc:text-xl">
                      {result.nickname}
                    </h3>
                    <img
                      src={fo4Mappings.getDivisionImg(result.division[0]?.division)}
                      alt=""
                      className=""
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default RecentRecord;
