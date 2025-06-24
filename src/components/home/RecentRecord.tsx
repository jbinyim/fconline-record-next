import Link from "next/link";
import React from "react";

const RecentRecord = () => {
  return (
    <div>
      <section className="w-full mb-10 pc:mb-20">
        <div className="w-[80%] mx-auto rounded-[20px] bg-white/10 p-8 border border-[rgba(255,255,255,0.2)]">
          <h2 className="w-full mb-10 font-bold text-lg tablet:text-xl pc:text-2xl">
            최근 조회한 유저
          </h2>
          <ul className="mobile:w-[90%] mx-auto grid grid-cols-2 gap-5 pc:gap-10 pc:flex pc:justify-between pc:items-center pc:w-full">
            <li className="p-[10px] rounded-[10px] bg-white/10 border border-[rgba(255,255,255,0.1)] text-center w-full flex justify-center duration-300 hover:translate-y-[-5px] hover:bg-white/20 hover:shadow-[0_0_20px_rgba(0,0,0,0.3)]">
              <div className="">
                <Link
                  href=""
                  className="flex items-center justify-between gap-[10px] flex-col"
                >
                  <h3 className="font-normal text-sm tablet:text-base pc:text-xl">
                    닉네임
                  </h3>
                  <img
                    src="https://ssl.nexon.com/s2/game/fo4/obt/rank/large/update_2009/ico_rank0.png"
                    alt=""
                    className=""
                  />
                </Link>
              </div>
            </li>
            <li className="p-[10px] rounded-[10px] bg-white/10 border border-[rgba(255,255,255,0.1)] text-center w-full flex justify-center duration-300 hover:translate-y-[-5px] hover:bg-white/20 hover:shadow-[0_0_20px_rgba(0,0,0,0.3)]">
              <div className="">
                <Link
                  href=""
                  className="flex items-center justify-between gap-[10px] flex-col"
                >
                  <h3 className="font-normal text-sm tablet:text-base pc:text-xl">
                    닉네임
                  </h3>
                  <img
                    src="https://ssl.nexon.com/s2/game/fo4/obt/rank/large/update_2009/ico_rank0.png"
                    alt=""
                    className=""
                  />
                </Link>
              </div>
            </li>
            <li className="p-[10px] rounded-[10px] bg-white/10 border border-[rgba(255,255,255,0.1)] text-center w-full flex justify-center duration-300 hover:translate-y-[-5px] hover:bg-white/20 hover:shadow-[0_0_20px_rgba(0,0,0,0.3)]">
              <div className="">
                <Link
                  href=""
                  className="flex items-center justify-between gap-[10px] flex-col"
                >
                  <h3 className="font-normal text-sm tablet:text-base pc:text-xl">
                    닉네임
                  </h3>
                  <img
                    src="https://ssl.nexon.com/s2/game/fo4/obt/rank/large/update_2009/ico_rank0.png"
                    alt=""
                    className=""
                  />
                </Link>
              </div>
            </li>
            <li className="p-[10px] rounded-[10px] bg-white/10 border border-[rgba(255,255,255,0.1)] text-center w-full flex justify-center duration-300 hover:translate-y-[-5px] hover:bg-white/20 hover:shadow-[0_0_20px_rgba(0,0,0,0.3)]">
              <div className="">
                <Link
                  href=""
                  className="flex items-center justify-between gap-[10px] flex-col"
                >
                  <h3 className="font-normal text-sm tablet:text-base pc:text-xl">
                    닉네임
                  </h3>
                  <img
                    src="https://ssl.nexon.com/s2/game/fo4/obt/rank/large/update_2009/ico_rank0.png"
                    alt=""
                    className=""
                  />
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default RecentRecord;
