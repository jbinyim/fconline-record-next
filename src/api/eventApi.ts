const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

async function getEvent() {
  try {
    const res = await fetch(`${BASE_URL}/events/get`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error("이벤트 정보를 가져오지 못 했습니다.");
    }

    const data = await res.json();

    return data;
  } catch (e) {
    throw e;
  }
}

export default {
  getEvent,
};
