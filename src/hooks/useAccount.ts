import accountApi from "@/api/accountApi";
import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";

const useOuid = () => {
  return useMutation({
    mutationFn: accountApi.getOuid,
  });
};

const useUserBasic = (ouid: string) => {
  return useQuery({
    queryKey: ["userBasic", ouid],
    queryFn: () => accountApi.getUserBasic(ouid),
    enabled: !!ouid,
  });
};

const useUsermaxdivision = (ouid: string) => {
  return useQuery({
    queryKey: ["userMaxDivision", ouid],
    queryFn: () => accountApi.getUserMaxdivision(ouid),
    enabled: !!ouid,
  });
};

const useUserMatch = (ouid: string) => {
  return useInfiniteQuery({
    queryKey: ["userMatch", ouid],
    queryFn: ({ pageParam = 0 }) => accountApi.getUserMatch(ouid, pageParam, 10),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length > 0) {
        return allPages.length * 10;
      }
      return undefined;
    },
    enabled: !!ouid,
  });
};

const useAccount = { useOuid, useUserBasic, useUsermaxdivision, useUserMatch };
export default useAccount;
