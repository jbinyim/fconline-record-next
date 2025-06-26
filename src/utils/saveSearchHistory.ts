function saveSearchHistory(newOuid: string) {
  const key = "userouid";

  const existing = JSON.parse(localStorage.getItem(key) || "[]");

  const filtered = existing.filter((ouid: string) => ouid !== newOuid);

  const updated = [newOuid, ...filtered];

  const sliced = updated.slice(0, 4);

  localStorage.setItem(key, JSON.stringify(sliced));
}

export default saveSearchHistory;
