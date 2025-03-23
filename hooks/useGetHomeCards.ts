import { useQuery } from "@tanstack/react-query";
import { getHomeCards } from "@/services/homeServices";

export function useGetHomeCards() {
  return useQuery({
    queryKey: ["homeCards"],
    queryFn: getHomeCards,
  });
}
