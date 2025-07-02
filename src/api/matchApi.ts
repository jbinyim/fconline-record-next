const BASE_URL = process.env.NEXT_PUBLIC_NEXON_BASE_URL!;
const API_KEY = process.env.NEXT_PUBLIC_NEXON_API_KEY!;

const getMatchDetail = async (matchid: string | undefined) => {
  try {
    const res = await fetch(`${BASE_URL}/match-detail?matchid=${matchid}`, {
      headers: {
        "x-nxopen-api-key": API_KEY!,
      },
    });

    if (!res.ok) throw new Error("매치 상세 조회 실패");

    const data = await res.json();

    return data;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export default { getMatchDetail };
