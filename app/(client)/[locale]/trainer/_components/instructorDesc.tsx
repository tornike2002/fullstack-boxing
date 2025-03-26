"use client";

import { useGetInstructors } from "@/hooks/useGetInstructors";

import NoDataAnimation from "../../_components/noDataAnimation";
import ErrorDisplay from "../../_components/errorDisplay";
import InstructorContent from "./instructorContent";
import { InstructorType } from "@/types/instructorTypes";
import SmallerContainer from "../../_components/smallerContianer";
import InstructorSkeleton from "./instructorSkeleton";
function InstructorDesc() {
  const { data: instructors, isLoading, error } = useGetInstructors();
  if (isLoading) return <InstructorSkeleton />;
  if (error) return <ErrorDisplay errorMsg={error.message} />;
  if (!instructors || instructors.length === 0) return <NoDataAnimation />;

  return (
    <SmallerContainer>
      <div className="pt-32 text-white flex justify-between w-full items-center">
        {instructors.map((instructor: InstructorType) => (
          <InstructorContent key={instructor.id} instructor={instructor} />
        ))}
      </div>
    </SmallerContainer>
  );
}

export default InstructorDesc;
