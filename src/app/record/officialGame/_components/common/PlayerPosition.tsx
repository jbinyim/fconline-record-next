"use client";

import useMeta from "@/hooks/useMeta";
import fo4Mappings from "@/utils/fo4Mappings";
import { useState } from "react";

interface PlayerPositionProps {
  spId: number;
  spPosition: number;
  spGrade: number;
  spRating: number;
  team: "home" | "away";
}

export const PlayerPosition = ({
  spId,
  spPosition,
  spGrade,
  spRating,
  team,
}: PlayerPositionProps) => {
  const posInfo = fo4Mappings.getSpposition(spPosition);
  const [imgSrc, setImgSrc] = useState(
    `https://fco.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p${spId}.png`,
  );
  const fallbackImg =
    "https://us.123rf.com/450wm/yuran-78/yuran-781505/yuran-78150500139/40385051-%EC%95%BC%EC%99%B8-%ED%99%9C%EB%8F%99%EC%97%90-%EA%B3%B5%EC%9D%84-%EA%B0%80%EC%A7%84-%EC%B6%95%EA%B5%AC-%EC%84%A0%EC%88%98.jpg?ver=6";

  const { data, isPending } = useMeta.useMetaSpid(String(spId));
  const { data: season, isPending: isPendingSeason } = useMeta.useMetaSeasonid(
    String(spId).slice(0, 3),
  );

  const isLoading = isPending || isPendingSeason;

  if (isLoading) return <div>로딩</div>;

  return (
    // 선수 위치
    <div className={`absolute ${typeof posInfo === "object" && posInfo.class[team]}`}>
      <div onClick={() => console.log(spId)} className="relative">
        <img
          src={imgSrc}
          alt="선수 이미지"
          onError={() => setImgSrc(fallbackImg)}
          className="w-[30px] tablet:w-[30px] pc:w-[45px] border-white/30 border-[2px] rounded-full bg-white/20"
        />
        {/* 선수 시즌 */}
        <img
          src={season.seasonImg}
          alt="선수 시즌"
          className="absolute left-[-15px] bottom-[-3px] w-[20px]"
        />
        {/* 선수 이름 */}
        <span className="absolute bottom-[-20px] text-[8px] tablet:text-[9px] pc:text-[10px] tablet:bottom-[-25px] left-[50%] translate-x-[-50%] font-bold text-nowrap px-[5px] py-[1px] rounded-[10px] border-white/20 border">
          {typeof posInfo === "object" && posInfo.name} {data.name.split(" ").pop()}
        </span>
        {/* 선수 평점 */}
        <span className="absolute bg-[#33C771] font-bold text-[8px] tablet:text-[9px] pc:text-[10px] top-[-5px] right-[-15px] px-[5px] py-[2px] rounded-[5px]">
          {spRating}
        </span>
        {/* 강화 등급 */}
        <span
          className={`absolute bottom-[-3px] right-[-7px] w-[15px] tablet:w-[15px] pc:w-[15px] text-[7px] tablet:text-[9px] pc:text-[11px] rounded-[5px] text-center ${fo4Mappings.getGradeColor(
            spGrade,
          )}`}
        >
          {spGrade}
        </span>
      </div>
    </div>
  );
};
