export const formatNotificationTime = (createdAt: string | Date) => {
  let created = new Date(createdAt);

  // created가 UTC로 해석된 경우 한국 시간으로 맞춰주기 (UTC + 9시간)
  created = new Date(created.getTime() + 9 * 60 * 60 * 1000);

  const now = new Date();

  const createdDate = new Date(created.getFullYear(), created.getMonth(), created.getDate());
  const nowDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  const diffTime = now.getTime() - created.getTime();
  const diffDate = Math.floor((nowDate.getTime() - createdDate.getTime()) / (1000 * 60 * 60 * 24));

  if (diffDate === 0) {
    const diffMinutes = Math.floor(diffTime / (1000 * 60));
    const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
    if (diffMinutes < 1) return "방금 전";
    if (diffMinutes < 60) return `${diffMinutes}분 전`;
    return `${diffHours}시간 전`;
  }

  if (diffDate < 7) return `${diffDate}일 전`;
  if (diffDate < 30) return `${Math.floor(diffDate / 7)}주 전`;
  if (diffDate < 365) return `${Math.floor(diffDate / 30)}개월 전`;
  return `${Math.floor(diffDate / 365)}년 전`;
};
