import { getAnnouncements } from "@/services/homeServices";
import { useQuery } from "@tanstack/react-query";

export function useGetAnnouncement() {
  return useQuery({
    queryKey: ["announcement"],
    queryFn: getAnnouncements,
  });
}
