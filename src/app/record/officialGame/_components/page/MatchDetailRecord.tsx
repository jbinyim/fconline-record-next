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

          <RecordCard
            homeRecord={homeDetail.effectShoot}
            nameRecord="유효슈팅"
            awayRecord={awayDetail.effectShoot}
          />

          <RecordCard
            homeRecord={homeDetail.share}
            nameRecord="점유율"
            awayRecord={awayDetail.share}
          />

          <RecordCard
            homeRecord={homeDetail.tryPass}
            nameRecord="패스 횟수"
            awayRecord={awayDetail.tryPass}
          />

          <RecordCard
            homeRecord={homeDetail.SuccessPass}
            nameRecord="패스 성공 횟수"
            awayRecord={awayDetail.SuccessPass}
          />

          <RecordCard
            homeRecord={homeDetail.foul}
            nameRecord="파울"
            awayRecord={awayDetail.foul}
          />

          <RecordCard
            homeRecord={homeDetail.yellowCard}
            nameRecord="옐로우 카드"
            awayRecord={awayDetail.yellowCard}
          />

          <RecordCard
            homeRecord={homeDetail.redCard}
            nameRecord="레드 카드"
            awayRecord={awayDetail.redCard}
          />

          <RecordCard
            homeRecord={homeDetail.offside}
            nameRecord="오프사이드"
            awayRecord={awayDetail.offside}
          />

          <RecordCard
            homeRecord={homeDetail.cornerKick}
            nameRecord="코너킥"
            awayRecord={awayDetail.cornerKick}
          />

          <RecordCard
            homeRecord={homeDetail.controller}
            nameRecord="컨트롤러"
            awayRecord={awayDetail.controller}
          />

        </div>
      </section>
    </div>
  );
};

export default MatchDetailRecord;
