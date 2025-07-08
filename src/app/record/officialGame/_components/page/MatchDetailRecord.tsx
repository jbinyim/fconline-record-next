import { MatchDetailData } from "@/types/matchDateType";
import React from "react";
import RecordCard from "../common/RecordCard";

interface MatchDetailRecordProps {
  homeDetail: MatchDetailData;
  awayDetail: MatchDetailData;
}

// 경기기록 상세정보 *공통된 부분 컴포넌트화 필요*
const MatchDetailRecord = ({ homeDetail, awayDetail }: MatchDetailRecordProps) => {
  return (
    <div>
      <section className="w-full mx-auto border-t-black border">
        <div className="flex flex-col gap-[20px] text-nowrap mb-[110px]">
          <div className="w-[80%] tablet:w-[60%] pc:w-[40%] mx-auto pt-[10px] text-black font-bold text-center flex justify-between">
            <span className="w-[100px] text-center">홈팀 </span>
            <h2 className="w-[100px] text-center">팀 기록</h2>
            <span className="w-[100px] text-center">원정팀</span>
          </div>
          <RecordCard
            homeRecord={homeDetail.shoot}
            nameRecord="슈팅"
            awayRecord={awayDetail.shoot}
          />

          <div className="w-[80%] tablet:w-[60%] pc:w-[40%] mx-auto text-black flex justify-between">
            <span className="text-xs tablet:text-sm pc:text-base w-[100px] text-center">
              {homeDetail.effectShoot}
            </span>
            <span className="text-xs tablet:text-sm pc:text-base w-[100px] text-center">
              유효슈팅
            </span>
            <span className="text-xs tablet:text-sm pc:text-base w-[100px] text-center">
              {awayDetail.effectShoot}
            </span>
          </div>
          <div className="w-[80%] tablet:w-[60%] pc:w-[40%] mx-auto text-black flex justify-between">
            <span className="text-xs tablet:text-sm pc:text-base w-[100px] text-center">
              {homeDetail.share}%
            </span>
            <span className="text-xs tablet:text-sm pc:text-base w-[100px] text-center">
              점유율
            </span>
            <span className="text-xs tablet:text-sm pc:text-base w-[100px] text-center">
              {awayDetail.share}%
            </span>
          </div>
          <div className="w-[80%] tablet:w-[60%] pc:w-[40%] mx-auto text-black flex justify-between">
            <span className="text-xs tablet:text-sm pc:text-base w-[100px] text-center">
              {homeDetail.tryPass}
            </span>
            <span className="text-xs tablet:text-sm pc:text-base w-[100px] text-center">
              패스 횟수
            </span>
            <span className="text-xs tablet:text-sm pc:text-base w-[100px] text-center">
              {awayDetail.tryPass}
            </span>
          </div>
          <div className="w-[80%] tablet:w-[60%] pc:w-[40%] mx-auto text-black flex justify-between">
            <span className="text-xs tablet:text-sm pc:text-base w-[100px] text-center">
              {homeDetail.SuccessPass}
            </span>
            <span className="text-xs tablet:text-sm pc:text-base w-[100px] text-center">
              패스 성공 횟수
            </span>
            <span className="text-xs tablet:text-sm pc:text-base w-[100px] text-center">
              {awayDetail.SuccessPass}
            </span>
          </div>
          <div className="w-[80%] tablet:w-[60%] pc:w-[40%] mx-auto text-black flex justify-between">
            <span className="text-xs tablet:text-sm pc:text-base w-[100px] text-center">
              {homeDetail.foul}
            </span>
            <span className="text-xs tablet:text-sm pc:text-base w-[100px] text-center">파울</span>
            <span className="text-xs tablet:text-sm pc:text-base w-[100px] text-center">
              {awayDetail.foul}
            </span>
          </div>
          <div className="w-[80%] tablet:w-[60%] pc:w-[40%] mx-auto text-black flex justify-between">
            <span className="text-xs tablet:text-sm pc:text-base w-[100px] text-center">
              {homeDetail.yellowCard}
            </span>
            <span className="text-xs tablet:text-sm pc:text-base w-[100px] text-center">
              옐로우 카드
            </span>
            <span className="text-xs tablet:text-sm pc:text-base w-[100px] text-center">
              {awayDetail.yellowCard}
            </span>
          </div>
          <div className="w-[80%] tablet:w-[60%] pc:w-[40%] mx-auto text-black flex justify-between">
            <span className="text-xs tablet:text-sm pc:text-base w-[100px] text-center">
              {homeDetail.redCard}
            </span>
            <span className="text-xs tablet:text-sm pc:text-base w-[100px] text-center">
              레드 카드
            </span>
            <span className="text-xs tablet:text-sm pc:text-base w-[100px] text-center">
              {awayDetail.redCard}
            </span>
          </div>
          <div className="w-[80%] tablet:w-[60%] pc:w-[40%] mx-auto text-black flex justify-between">
            <span className="text-xs tablet:text-sm pc:text-base w-[100px] text-center">
              {homeDetail.offside}
            </span>
            <span className="text-xs tablet:text-sm pc:text-base w-[100px] text-center">
              오프사이드
            </span>
            <span className="text-xs tablet:text-sm pc:text-base w-[100px] text-center">
              {awayDetail.offside}
            </span>
          </div>
          <div className="w-[80%] tablet:w-[60%] pc:w-[40%] mx-auto text-black flex justify-between">
            <span className="text-xs tablet:text-sm pc:text-base w-[100px] text-center">
              {homeDetail.cornerKick}
            </span>
            <span className="text-xs tablet:text-sm pc:text-base w-[100px] text-center">
              코너킥
            </span>
            <span className="text-xs tablet:text-sm pc:text-base w-[100px] text-center">
              {awayDetail.cornerKick}
            </span>
          </div>
          <div className="w-[80%] tablet:w-[60%] pc:w-[40%] mx-auto text-black flex justify-between">
            <span className="text-xs tablet:text-sm pc:text-base w-[100px] text-center">
              {homeDetail.controller}
            </span>
            <span className="text-xs tablet:text-sm pc:text-base w-[100px] text-center">
              컨트롤러
            </span>
            <span className="text-xs tablet:text-sm pc:text-base w-[100px] text-center">
              {awayDetail.controller}
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MatchDetailRecord;
