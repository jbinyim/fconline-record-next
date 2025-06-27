const BASE_URL = process.env.NEXT_PUBLIC_NEXON_BASE_URL!;
const API_KEY = process.env.NEXT_PUBLIC_NEXON_API_KEY!;

const getOuid = async (userName: string) => {
  try {
    const res = await fetch(`${BASE_URL}/id?nickname=${userName}`, {
      headers: {
        "x-nxopen-api-key": API_KEY!,
      },
    });

    if (!res.ok) {
      return new Error("OUID 조회 실패");
    }

    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

const getUserBasic = async (ouid: string) => {
  try {
    const res = await fetch(`${BASE_URL}/user/basic?ouid=${ouid}`, {
      headers: {
        "x-nxopen-api-key": API_KEY!,
      },
    });

    if (!res.ok) throw new Error("유저 조회 실패");

    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export default { getOuid, getUserBasic };
