interface player {
  id: number | string;
  name: string;
}

const getMetaSpid = async (spid: string) => {
  try {
    const res = await fetch(`https://open.api.nexon.com/static/fconline/meta/spid.json`);

    if (!res.ok) throw new Error("선수 목록을 가져오지 못했습니다");

    const data = await res.json();

    const player = data.find((p: player) => String(p.id) === spid);

    if (!player) throw new Error("선수 정보를 찾을 수 없습니다");

    return player;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

const getMetaSeasonid = async (seasonid: string) => {
  try {
    const res = await fetch("https://open.api.nexon.com/static/fconline/meta/seasonid.json");

    if (!res.ok) throw new Error("시즌 정보를 가져오지 못 했습니다.");

    const data = await res.json();

    const season = data.find((s: any) => String(s.seasonId) === seasonid);

    if (!season) throw new Error("시즌 정보를 찾을 수 없습니다");

    return season;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

const metaApi = { getMetaSpid, getMetaSeasonid };
export default metaApi;
