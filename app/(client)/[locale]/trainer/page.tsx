import InstructorDesc from "./_components/instructorDesc";
import { InstructorCards } from "./_components/instructorCards";

function TrainerPage() {
  return (
    <div className="min-h-screen bg-black">
      <InstructorDesc />
      <InstructorCards />
    </div>
  );
}

export default TrainerPage;
