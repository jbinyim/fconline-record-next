import matchApi from "@/api/matchApi";
import { useQuery } from "@tanstack/react-query";

const useMatchDetail = (matchid: string | undefined) => {
  return useQuery({
    queryKey: ["matchDetail", matchid],
    queryFn: () => matchApi.getMatchDetail(matchid),
    enabled: !!matchid,
  });
};

const useMatch = { useMatchDetail };
export default useMatch;
