"use client";

import LoadingSkeleton from "@/components/common/LoadingSkeleton";
import useAccount from "@/hooks/useAccount";
import fo4Mappings from "@/utils/fo4Mappings";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

type DivisionInfo = {
  matchType: number;
  division: number;
  achievementDate: string;
};

const SearchLayout = () => {
  const ouid = useSearchParams().get("ouid");
  const currentRouter = usePathname();

  const {
    data: userBasic,
    isPending: userBasicLoading,
    isError: userBasicError,
  } = useAccount.useUserBasic(ouid!);
  const {
    data: userMaxDivision,
    isPending: userMaxDivisionLoading,
    isError: userMaxDivisionError,
  } = useAccount.useUsermaxdivision(ouid!);

  const isLoading = userBasicLoading || userMaxDivisionLoading;
  const isError = userBasicError || userMaxDivisionError;

  let pageLabel = "";
  if (currentRouter.includes("officialGame")) {
    pageLabel = "공식경기";
  } else if (currentRouter.includes("comment")) {
    pageLabel = "한줄평가";
  } else if (currentRouter.includes("classic")) {
    pageLabel = "클래식 1대1";
  } else if (currentRouter.includes("aiEvaluation")) {
    pageLabel = "AI평가";
  }

  let content;

  if (isLoading) {
    content = <LoadingSkeleton type="search" />;
  } else if (isError) {
    content = <div className="mx-auto py-5">사용자를 불러오다 실패했습니다.</div>;
  } else {
    content = (
      <>
        <div className="text-center w-[30%] text-base tablet:text-xl pc:text-2xl font-bold">
          <span className="block mb-5 text-green200">{userBasic.nickname}</span>
          <span className="block">Lv.{userBasic.level}</span>
        </div>
        <div className="flex justify-around w-[70%] text-center">
          {userMaxDivision.map((match: DivisionInfo) => (
            <div
              key={match.matchType}
              className="flex justify-center items-center flex-col gap-[5px]"
            >
              <h2 className="font-bold text-xs tablet:text-sm pc:text-base">
                {fo4Mappings.getMatchType(match.matchType)}
              </h2>
              <img
                src={fo4Mappings.getDivisionImg(match.division)}
                alt="티어 이미지"
                className="block"
              />
              <span className="hidden pc:block text-xs tablet:text-sm pc:text-base">
                {fo4Mappings.getDivision(match.division)}
              </span>
              <time className="block text-[10px] tablet:text-sm pc:text-base text-nowrap">
                {match.achievementDate.slice(0, 10)}
              </time>
            </div>
          ))}
        </div>
      </>
    );
  }

  return (
    <div>
      <section className="mx-auto w-[90%] tablet:w-[80%] pc:w-[1200px]">
        <div className="flex items-center p-5 bg-white/10 border border-[rgba(255,255,255,0.1)] rounded-[10px] mb-[35px]">
          {content}
        </div>
        <div className="py-5 px-[30px] bg-white/10 border border-[rgba(255,255,255,0.1)] rounded-[10px] mb-[30px]">
          <ul className="flex justify-center tablet:justify-start gap-[40px] font-bold">
            <li
              className={`cursor-pointer hover:text-green100 duration-300 ${
                pageLabel === "공식경기" && "text-green100"
              }`}
            >
              <Link href={`/record/officialGame?ouid=${ouid}`}>공식경기</Link>
            </li>
            <li
              className={`cursor-pointer hover:text-green100 duration-300 ${
                pageLabel === "클래식 1대1" && "text-green100"
              }`}
            >
              <Link href={`/record/classic?ouid=${ouid}`}>클래식 1대1</Link>
            </li>
            <li
              className={`cursor-pointer hover:text-green100 duration-300 ${
                pageLabel === "한줄평가" && "text-green100"
              }`}
            >
              <Link href={`/record/comment?ouid=${ouid}`}>한줄평가</Link>
            </li>
            <li
              className={`cursor-pointer hover:text-green100 duration-300 ${
                pageLabel === "AI평가" && "text-green100"
              }`}
            >
              <Link href={`/record/aiEvaluation?ouid=${ouid}`}>AI평가</Link>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default SearchLayout;
