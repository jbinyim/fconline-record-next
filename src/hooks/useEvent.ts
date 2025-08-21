import eventApi from "@/api/eventApi";
import { useQuery } from "@tanstack/react-query";

function useGetEvent() {
  return useQuery({
    queryKey: ["events"],
    queryFn: () => eventApi.getEvent(),
    placeholderData: (prev) => prev,
  });
}

export default { useGetEvent };
