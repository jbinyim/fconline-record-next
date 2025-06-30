import accountApi from "@/api/accountApi";
import { useMutation, useQuery } from "@tanstack/react-query";

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

export default { useOuid, useUserBasic, useUsermaxdivision };
