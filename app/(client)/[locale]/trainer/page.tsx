import InstructorDesc from "./_components/instructorDesc";
import { HeroScrollDemo } from "./_components/heroScrollDemo";
// import { Carousel } from "./_components/carousel";

function TrainerPage() {
  return (
    <div className="min-h-screen bg-black">
      <InstructorDesc />
      {/* <Carousel /> */}
      <HeroScrollDemo />
    </div>
  );
}

export default TrainerPage;
