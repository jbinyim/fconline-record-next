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

const useUsermaxdivision = () => {
  return useMutation({
    mutationFn: accountApi.getUserMaxdivision,
  });
};

export default { useOuid, useUserBasic, useUsermaxdivision };
