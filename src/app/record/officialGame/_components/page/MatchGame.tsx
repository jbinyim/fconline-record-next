"use client";

import useMatch from "@/hooks/useMatch";
import { useState } from "react";
import MatchLineup from "./MatchLineup";
import MatchDetailRecord from "./MatchDetailRecord";
import { formatNotificationTime } from "@/utils/timeFormat";
import GoalPlayer from "../common/GoalPlayer";
import { useSearchParams } from "next/navigation";
import { MatchDetailData, MatchInfo } from "@/types/matchDateType";

interface MatchItemProps {
  matchData: string | undefined;
}

const MatchGame = ({ matchData }: MatchItemProps) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isMatchDetailToggle, setIsMatchDetailToggle] = useState<boolean>(true);
  const ouid = useSearchParams().get("ouid");

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const { data, isPending } = useMatch.useMatchDetail(matchData);

  if (isPending) {
    return <div>loaing</div>;
  }

  const currentUserMatch = data.matchInfo.find((d: MatchInfo) => d.ouid === ouid);

  const matchInfo = currentUserMatch.matchDetail.matchResult;

  const extractDetailData = (matchInfo: MatchInfo): MatchDetailData => ({
    controller: matchInfo.matchDetail.controller,
    shoot: matchInfo.shoot.shootTotal,
    effectShoot: matchInfo.shoot.effectiveShootTotal,
    share: matchInfo.matchDetail.possession,
    tryPass: matchInfo.pass.passTry,
    SuccessPass: matchInfo.pass.passSuccess,
    foul: matchInfo.matchDetail.foul,
    yellowCard: matchInfo.matchDetail.yellowCards,
    redCard: matchInfo.matchDetail.redCards,
    offside: matchInfo.matchDetail.offsideCount,
    cornerKick: matchInfo.matchDetail.cornerKick,
  });

  return (
    <div>
      <div className="">
        {/* 초기 조회 정보 */}
        <div
          className={`relative flex items-center justify-between bg-gradient-to-r ${
            matchInfo === "승" && "from-green200 to-green100"
          } ${matchInfo === "패" && "from-red-400 to-red-500"} ${
            matchInfo === "무" && "from-blue-400 to-blue-500"
          } text-white p-[25px] cursor-pointer transition-all duration-300 ease-in-out ${
            isExpanded ? "rounded-t-[10px] rounded-b-none" : "rounded-[10px]"
          }`}
          onClick={toggleExpanded}
        >
          <div className="w-[50px] tablet:w-[80px] text-[10px] tablet:text-sm pc:text-base">
            {formatNotificationTime(data.matchDate)}
          </div>
          <div className="flex-1 flex items-center justify-center text-nowrap">
            <div className="grid grid-cols-3 items-center w-[100%] tablet:w-[85%] pc:w-[50%] ">
              {/* 왼쪽 플레이어 닉네임 */}
              <div className="text-right pr-2">
                <span className="text-base tablet:text-lg pc:text-xl font-bold">
                  {data.matchInfo[0].nickname}
                </span>
              </div>

              <div className="text-center">
                <span className="text-base tablet:text-lg pc:text-xl font-bold">
                  {data.matchInfo[0].shoot.goalTotal || 0} :{" "}
                  {data.matchInfo[1].shoot.goalTotal || 0}
                </span>
              </div>

              <div className="text-left pl-2">
                <span className="text-base tablet:text-lg pc:text-xl font-bold">
                  {data.matchInfo[1].nickname}
                </span>
              </div>
            </div>
          </div>
          <div className="duration-300">
            <img
              src="/icons/arrow-t.png"
              alt=""
              className={`duration-300 ${isExpanded ? "rotate-180" : "rotate-0"}`}
            />
          </div>
        </div>

        {/*상세 정보 */}
        <div
          className={`bg-red50 border-l border-r border-b border-gray-200 transition-all duration-300 ease-in-out overflow-hidden rounded-b-[10px] ${
            isExpanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pb-3">
            {/* 상세 메뉴 */}
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
                  !isMatchDetailToggle && "bg-gray-600 text-white rounded-md p-2"
                }`}
              >
                라인업
              </button>
            </div>
            {/* 유저닉네임 + 골 넣은 선수 정보 */}
            <div className="flex items-center justify-center tablet:justify-between mb-6">
              <div className="w-[145px] p-[10px] hidden tablet:block tablet:text-sm pc:text-base">
                <span className="block text-black font-bold mb-[5px]">Home</span>
                <span className="block text-black">{data.matchInfo[0].nickname}</span>
              </div>
              <div className="flex-1 flex items-center justify-center text-nowrap">
                <div className="w-[100%] tablet:w-[70%] pc:w-[50%] grid grid-cols-3 items-center gap-[20px] text-nowrap">
                  <div className="text-black grid grid-cols-1 text-right text-xs tablet:text-sm pc:text-base">
                    <span className="text-[12px] tablet:text-[13px]">
                      {data.matchInfo[0].shootDetail.map((shoot: any, idx: number) =>
                        shoot.result === 3 ? <GoalPlayer key={idx} spid={shoot.spId} /> : null,
                      )}
                    </span>
                  </div>
                  <img src="/icons/soccer-ball.png" alt="" className="text-center mx-auto" />
                  <div className="text-black grid grid-cols-1 text-left text-xs tablet:text-sm pc:text-base">
                    <span className="text-[12px] tablet:text-[13px]">
                      {data.matchInfo[1].shootDetail.map((shoot: any, idx: number) =>
                        shoot.result === 3 ? <GoalPlayer key={idx} spid={shoot.spId} /> : null,
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-[145px] p-[10px] hidden tablet:block tablet:text-sm pc:text-base text-right">
                <span className="block text-black font-bold mb-[5px]">Away</span>
                <span className="block text-black">{data.matchInfo[1].nickname}</span>
              </div>
            </div>
            {/* 경기 상세 정보 */}
            {isMatchDetailToggle ? (
              <MatchDetailRecord
                homeDetail={extractDetailData(data.matchInfo[0])}
                awayDetail={extractDetailData(data.matchInfo[1])}
              />
            ) : (
              <MatchLineup />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchGame;
