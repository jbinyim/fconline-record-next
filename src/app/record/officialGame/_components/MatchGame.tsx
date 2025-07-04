"use client";

import useMatch from "@/hooks/useMatch";
import { useState } from "react";
import MatchLineup from "./MatchLineup";
import MatchDetailRecord from "./MatchDetailRecord";

interface MatchItemProps {
  matchData: string | undefined;
}

const MatchGame = ({ matchData }: MatchItemProps) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isMatchDetailToggle, setIsMatchDetailToggle] = useState<boolean>(true);
  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const { data, isPending } = useMatch.useMatchDetail(matchData);

  console.log(data);

  if (isPending) {
    return <div>loaing</div>;
  }

  return (
    <div>
      <div className="">
        <div
          className={`relative flex items-center justify-between bg-gradient-to-r from-red-400 to-red-500 text-white p-[25px] cursor-pointer transition-all duration-300 ease-in-out ${
            isExpanded ? "rounded-t-[10px] rounded-b-none" : "rounded-[10px]"
          }`}
          onClick={toggleExpanded}
        >
          <div className="w-[50px] tablet:w-[80px] text-[10px] tablet:text-sm pc:text-base">
            1분 전
          </div>
          <div className="flex-1 flex items-center justify-center text-nowrap">
            <div className="grid grid-cols-3 items-center w-[100%] tablet:w-[85%] pc:w-[50%] ">
              {/* 왼쪽 플레이어 닉네임 */}
              <div className="text-right pr-2">
                <span className="text-base tablet:text-lg pc:text-xl font-bold">{data.matchInfo[0].nickname}</span>
              </div>

              <div className="text-center">
                <span className="text-base tablet:text-lg pc:text-xl font-bold">
                  {data.matchInfo[0].shoot.goalTotal} : {data.matchInfo[1].shoot.goalTotal}
                </span>
              </div>

              <div className="text-left pl-2">
                <span className="text-base tablet:text-lg pc:text-xl font-bold">{data.matchInfo[1].nickname}</span>
              </div>
          </div>
        </div>
          <div className="duration-300">
            <img
              src="/icons/arrow-t.png"
              alt=""
              className={`duration-300 ${
                isExpanded ? "rotate-180" : "rotate-0"
              }`}
            />
          </div>
        </div>

        <div
          className={`bg-red50 border-l border-r border-b border-gray-200 transition-all duration-300 ease-in-out overflow-hidden rounded-b-[10px] ${
            isExpanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pb-3">
            <div className="flex justify-center gap-[20px] mb-5 bg-white">
              <button
                onClick={() => setIsMatchDetailToggle(true)}
                className={`text-gray-600 border-b-2 border-transparent hover:border-gray-600 duration-300 ${
                  isMatchDetailToggle && "bg-gray-600 text-white rounded-md p-2"
                }`}
              >
                경기 기록
              </button>
              <button
                onClick={() => setIsMatchDetailToggle(false)}
                className={`text-gray-600 border-b-2 border-transparent hover:border-gray-600 duration-300 ${
                  !isMatchDetailToggle &&
                  "bg-gray-600 text-white rounded-md p-2"
                }`}
              >
                라인업
              </button>
            </div>
            <div className="flex items-center justify-center tablet:justify-between mb-6">
              <div className="p-[10px] hidden tablet:block tablet:text-sm pc:text-base">
                <span className="block text-black font-bold mb-[5px]">
                  Home
                </span>
                <span className="block text-black">
                  {data.matchInfo[0].nickname}
                </span>
              </div>
              <div className="flex items-center gap-4 text-nowrap">
                <div className="text-black grid grid-cols-1 text-right text-xs tablet:text-sm pc:text-base">
                  <span>
                    {data.matchInfo[0].shootDetail.map(
                      (shoot: any, idx: number) => (
                        <span key={idx}>{shoot.spId}</span>
                      ),
                    )}
                  </span>
                  <span>리오넬 메시</span>
                </div>
                <img src="/icons/soccer-ball.png" alt="" />
                <div className="text-black grid grid-cols-1 text-left text-xs tablet:text-sm pc:text-base">
                  <span>즐라탄 이브라히모비치</span>
                  <span>라울 히메네스</span>
                </div>
              </div>
              <div className="p-[10px] hidden tablet:block tablet:text-sm pc:text-base">
                <span className="block text-black font-bold mb-[5px]">
                  Away
                </span>
                <span className="block text-black">
                  {data.matchInfo[1].nickname}
                </span>
              </div>
            </div>

            {isMatchDetailToggle ? <MatchDetailRecord /> : <MatchLineup />}
          </div>
        </div>
      </div>
      {/* <div className="">
        <div
          className={`relative flex items-center justify-between bg-gradient-to-r from-green200 to-green100 text-white p-[25px] cursor-pointer transition-all duration-300 ease-in-out ${
            isExpanded ? "rounded-t-[10px] rounded-b-none" : "rounded-[10px]"
          }`}
          onClick={toggleExpanded}
        >
          <div className="w-[50px] tablet:w-[80px] text-[10px] tablet:text-base pc:text-lg">
            12시간 전
          </div>
          <div className="text-center">
            <span className="text-base tablet:text-lg pc:text-xl font-bold">
              {matchData.homeTeam} {matchData.homeScore} : {matchData.awayScore}{" "}
              {matchData.awayTeam}
            </span>
          </div>
          <div className="duration-300">
            <img
              src="/icons/arrow-t.png"
              alt=""
              className={`duration-300 ${
                isExpanded ? "rotate-180" : "rotate-0"
              }`}
            />
          </div>
        </div>

        <div
          className={`bg-green50 border-l border-r border-b border-gray-200 transition-all duration-300 ease-in-out overflow-hidden rounded-b-[10px] ${
            isExpanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pb-3">
            <div className="flex justify-center gap-[20px] mb-5 bg-white">
              <button className="text-gray-600 border-b-2 border-transparent hover:border-gray-600 duration-300">
                경기 기록
              </button>
              <button className="bg-gray-600 text-white rounded-md p-2 hover:border-gray-600 duration-300">
                라인업
              </button>
            </div>

            <div className="flex items-center justify-center tablet:justify-between mb-6">
              <div className="p-[10px] hidden tablet:block tablet:text-sm pc:text-base">
                <span className="block text-black font-bold mb-[5px]">
                  우리팀
                </span>
                <span className="block text-black">{matchData.homeTeam}</span>
              </div>
              <div className="flex items-center gap-4 text-nowrap">
                <div className="text-black grid grid-cols-1 text-right text-xs tablet:text-sm pc:text-base">
                  <span>크리스티아누 호날두</span>
                  <span>리오넬 메시</span>
                </div>
                <img src="/icons/soccer-ball.png" alt="" />
                <div className="text-black grid grid-cols-1 text-left text-xs tablet:text-sm pc:text-base">
                  <span>즐라탄 이브라히모비치</span>
                  <span>라울 히메네스</span>
                </div>
              </div>
              <div className="p-[10px] hidden tablet:block tablet:text-sm pc:text-base">
                <span className="block text-black font-bold mb-[5px]">
                  상대팀
                </span>
                <span className="block text-black">{matchData.awayTeam}</span>
              </div>
            </div>

            <div className="">
              <div className="w-[100%] mx-auto relative">
                <img
                  src="/backgroundImgs/field.png"
                  alt=""
                  className="relative z-1 mx-auto"
                />
                <div className="absolute z-10"></div>
                <div className="absolute z-10"></div>
                <div className="absolute z-10"></div>
                <div className="absolute z-10"></div>
                <div className="absolute z-10"></div>
                <div className="absolute z-10"></div>
                <div className="absolute z-10"></div>
                <div className="absolute z-10"></div>
                <div className="absolute z-10"></div>
                <div className="absolute z-10"></div>
                <div className="absolute z-10"></div>
                <div className="absolute z-10"></div>
                <div className="absolute z-10"></div>
                <div className="absolute z-10"></div>
                <div className="absolute z-10"></div>
                <div className="absolute z-10"></div>
                <div className="absolute z-10"></div>
                <div className="absolute z-10"></div>
                <div className="absolute z-10"></div>
                <div className="absolute z-10"></div>
                <div className="absolute z-10"></div>
                <div className="absolute z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default MatchGame;
