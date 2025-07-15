import useMeta from "@/hooks/useMeta";
import fo4Mappings from "@/utils/fo4Mappings";

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

  const { data, isPending } = useMeta.useMetaSpid(String(spId));

  if (isPending) return <div>로딩</div>;

  return (
    // 선수 위치
    <div className={`absolute ${typeof posInfo === "object" && posInfo.class[team]}`}>
      <div className="relative">
        <img
          src="https://fco.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p834167495.png"
          alt=""
          className="w-[30px] tablet:w-[30px] pc:w-[45px] border-white/30 border-[2px] rounded-full bg-white/20"
        />
        <img
          src="https://ssl.nexon.com/s2/game/fc/online/obt/externalAssets/new/season/24ucl.png"
          alt=""
          className="absolute left-[-3px] bottom-[-3px] w-[20px]"
        />
        {/* 선수 이름 */}
        <span className="absolute bottom-[-20px] text-[8px] tablet:text-[9px] pc:text-[10px] tablet:bottom-[-25px] left-[50%] translate-x-[-50%] font-bold text-nowrap px-[5px] py-[1px] rounded-[10px] border-white/20 border">
          {typeof posInfo === "object" && posInfo.name} {data.name.split(" ").pop()}
        </span>
        {/* 선수 평점 */}
        <span className="absolute bg-[#33C771] font-bold text-[8px] tablet:text-[9px] pc:text-[10px] top-[-5px] right-[-10px] px-[5px] py-[2px] rounded-[5px]">
          {spRating}
        </span>
        {/* 강화 등급 */}
        <span
          className={`absolute bottom-[-5px] right-[-10px] w-[15px] tablet:w-[20px] pc:w-[20px] text-[9px] tablet:text-[11px] pc:text-[13px] rounded-[5px] text-center ${fo4Mappings.getGradeColor(
            spGrade,
          )}`}
        >
          {spGrade}
        </span>
      </div>
    </div>
  );
};
