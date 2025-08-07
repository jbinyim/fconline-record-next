const BASE_URL = process.env.API_URL || "http://localhost:5000";

async function getComment(ouid: string, category: string, offset: number) {
  try {
    const res = await fetch(
      `${BASE_URL}/comments/get/${ouid}?category=${category}&offset=${offset}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    if (!res.ok) {
      throw new Error("코멘트 정보를 가져오다 넘어졌습니다.");
    }

    const data = await res.json();

    return data;
  } catch (e) {
    throw e;
  }
}

export default {
  getComment,
};
