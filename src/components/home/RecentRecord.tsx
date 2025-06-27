"use client";

import useAccount from "@/hooks/useAccount";
import React, { useEffect, useState } from "react";

const RecentRecord = () => {
  const [recentOuid, setRecentOuid] = useState<string[]>([]);
  const [results, setResults] = useState<any[]>([]);

  useEffect(() => {
    const storge = localStorage.getItem("userouid");

    if (storge) {
      const ouid = JSON.parse(storge);
      setRecentOuid(ouid);
    }
  }, []);

  const { mutateAsync, isPending } = useAccount.useUserBasic();

  useEffect(() => {
    async function fetschAll() {
      const resArr = [];
      for (const ouid of recentOuid) {
        try {
          const res = await mutateAsync(ouid);
          resArr.push(res);
          setResults([...resArr]);
        } catch (e) {
          console.log(e);
        }
      }
    }
    if (recentOuid.length > 0) {
      fetschAll();
    }
  }, [recentOuid]);

  return (
    <div>
      <section className="w-full mb-10 pc:mb-20">
        <div className="w-[80%] mx-auto rounded-[20px] bg-white/10 p-8 border border-[rgba(255,255,255,0.2)] pc:w-[1200px]">
          <h2 className="w-full mb-10 font-bold text-lg tablet:text-xl pc:text-2xl">
            <img
              src="/icons/recent-record.png"
              alt=""
              className="inline-block mr-[15px]"
            />
            최근 조회한 유저
          </h2>
          {isPending && <div>loading</div>}
          <ul className="mobile:w-[90%] mx-auto grid grid-cols-2 gap-5 pc:gap-10 pc:flex pc:justify-between pc:items-center pc:w-full">
            {results.map((result) => (
              <li
                key={result.ouid}
                className="hover:text-green-200 cursor-pointer p-[10px] rounded-[10px] bg-white/10 border border-[rgba(255,255,255,0.1)] text-center w-full flex justify-center duration-300 hover:translate-y-[-5px] hover:bg-white/20 hover:shadow-[0_0_20px_rgba(0,0,0,0.3)]"
              >
                <div className="">
                  <div className="flex items-center justify-between gap-[10px] flex-col">
                    <h3 className="font-normal text-sm tablet:text-base pc:text-xl">
                      {result.nickname}
                    </h3>
                    <img
                      src="https://ssl.nexon.com/s2/game/fo4/obt/rank/large/update_2009/ico_rank0.png"
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
