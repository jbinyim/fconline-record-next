import metaApi from "@/api/metaApi";
import { useQuery } from "@tanstack/react-query";

const useMetaSpid = (spid: string) => {
  return useQuery({
    queryKey: ["metaSpid", spid],
    queryFn: () => metaApi.getMetaSpid(spid),
    enabled: !!spid,
  });
};

export default { useMetaSpid };
