import { getAnnouncements } from "@/services/announcServices";
import { useQuery } from "@tanstack/react-query";

export function useGetAnnouncement() {
  return useQuery({
    queryKey: ["announcement"],
    queryFn: getAnnouncements,
  });
}
