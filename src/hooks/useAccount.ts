import accountApi from "@/api/accountApi";
import { useMutation, useQuery } from "@tanstack/react-query";

const useOuid = () => {
  return useMutation({
    mutationFn: accountApi.getOuid,
  });
};

const useUserBasic = () => {
  return useMutation({
    mutationFn: accountApi.getUserBasic,
  });
};

export default { useOuid, useUserBasic };
