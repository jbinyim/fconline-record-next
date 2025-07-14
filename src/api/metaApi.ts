interface player {
  id: number | string;
  name: string;
}

const getMetaSpid = async (spid: string) => {
  try {
    const res = await fetch(`https://open.api.nexon.com/static/fconline/meta/spid.json`);

    if (!res.ok) throw new Error("선수 목록을 가져오지 못했습니다");

    const data = await res.json();

    const player = data.find((p: player) => p.id === spid);

    return player;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

const metaApi = { getMetaSpid };
export default metaApi;
