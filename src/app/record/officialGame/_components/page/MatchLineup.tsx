import { SpPlayer } from "@/types/matchDateType";
import React from "react";
import { PlayerPosition } from "../common/PlayerPosition";

interface MatchLineupProps {
  homePlayer: SpPlayer[];
  awayPlayer: SpPlayer[];
}

const MatchLineup = ({ homePlayer, awayPlayer }: MatchLineupProps) => {
  return (
    <div className="h-[1520px] tablet:h-[1370px] pc:h-[1220px]">
      <div className="w-full mx-auto relative">
        {/* 경기장 이미지 */}
        <img
          src="/backgroundImgs/pc-field.png"
          alt=""
          className="relative z-1 mx-auto w-full h-[1220px] bg-red-300 hidden tablet:hidden pc:block"
        />
        <img
          src="/backgroundImgs/tablet-field.png"
          alt=""
          className="relative z-1 mx-auto w-full h-[1370px] hidden tablet:block pc:hidden"
        />
        <img
          src="/backgroundImgs/m-field.png"
          alt=""
          className="relative z-1 mx-auto w-full h-[1520px] block tablet:hidden pc:hidden"
        />

        {homePlayer.map((p) => (
          <PlayerPosition
            key={Number(p.spId) + Number(p.status.dribble)}
            spId={p.spId}
            spPosition={p.spPosition}
            spGrade={p.spGrade}
            spRating={p.status.spRating}
            team="home"
          />
        ))}

        {awayPlayer.map((p) => (
          <PlayerPosition
            key={Number(p.spId) + Number(p.status.dribble)}
            spId={p.spId}
            spPosition={p.spPosition}
            spGrade={p.spGrade}
            spRating={p.status.spRating}
            team="away"
          />
        ))}
      </div>
    </div>
  );
};

export default MatchLineup;
