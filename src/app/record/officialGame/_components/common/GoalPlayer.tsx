import useMeta from "@/hooks/useMeta";
import React from "react";

const GoalPlayer = ({ spid }: { spid: string }) => {
  const { data, isPending, error } = useMeta.useMetaSpid(spid);

  if (isPending) return <span>loading</span>;
  if (error || !data) return <span>정보 없음</span>;

  return (
    <div>
      <span>{data.name}</span>
    </div>
  );
};

export default GoalPlayer;
