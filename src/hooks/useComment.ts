import commentApi from "@/api/commentApi";
import { useQuery } from "@tanstack/react-query";

function useGetComments(ouid: string, category: string, offset: number) {
  return useQuery({
    queryKey: ["comments", ouid, category, offset],
    queryFn: () => commentApi.getComment(ouid, category, offset),
    placeholderData: (prevData) => prevData,
    staleTime: 1000 * 5,
  });
}

export default { useGetComments };
