import { getInstructors } from "@/services/instructorService";
import { useQuery } from "@tanstack/react-query";

export const useGetInstructors = () => {
  return useQuery({
    queryKey: ["instructors"],
    queryFn: getInstructors,
  });
};
