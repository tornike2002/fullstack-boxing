import { getContact } from "@/services/contactServices";
import { useQuery } from "@tanstack/react-query";

export function useGetContact() {
  return useQuery({
    queryKey: ["contact"],
    queryFn: getContact,
  });
}
