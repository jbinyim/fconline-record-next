import metaApi from "@/api/metaApi";
import { useQuery } from "@tanstack/react-query";

const useMetaSpid = (spid: string) => {
  return useQuery({
    queryKey: ["metaSpid", spid],
    queryFn: () => metaApi.getMetaSpid(spid),
    enabled: !!spid,
  });
};

const useMetaSeasonid = (seasonid: string) => {
  return useQuery({
    queryKey: ["seasonid", seasonid],
    queryFn: () => metaApi.getMetaSeasonid(seasonid),
    enabled: !!seasonid,
  });
};

const useMeta = { useMetaSpid, useMetaSeasonid };
export default useMeta;
