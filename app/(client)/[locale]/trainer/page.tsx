import InstructorDesc from "./_components/instructorDesc";
import { HeroScrollDemo } from "./_components/heroScrollDemo";

function TrainerPage() {
  return (
    <div className="min-h-screen bg-black">
      <InstructorDesc />
      {/* <InstructorCards /> */}
      <HeroScrollDemo />
    </div>
  );
}

export default TrainerPage;
