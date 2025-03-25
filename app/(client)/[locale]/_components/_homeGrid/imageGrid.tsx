import { LayoutGrid } from "@/components/ui/layout-grid";
import SmallerContainer from "../smallerContianer";
import SnowingAnimation from "../SnowingAnimation";
export function ImageGrid() {
  return (
    <section className=" bg-black text-white ">
      <SmallerContainer>
        <h1 className="text-center text-xl sm:text-2xl md:text-[42px] font-bold uppercase font-mono pt-20 pb-6">
          Become the champion you were born to be
        </h1> 
        <hr className="border-white border-2 w-[120px] hover:w-[170px] transition-all duration-300 ease mx-auto" />
        <div className="h-screen py-20 w-full flex">
      <SnowingAnimation />
          <LayoutGrid cards={cards} />
        <SnowingAnimation />
        </div>
      </SmallerContainer>
    </section>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Train like a champion
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Push your limits and train like a true champion. Every punch, every
        move, brings you closer to greatness.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Rise above the competition
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Step into the ring and rise above the competition. It&apos;s your time
        to shine and prove your worth.
      </p>
    </div>
  );
};

const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Embrace the grind
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Boxing is not just a sport, it&apos;s a lifestyle. Embrace the grind and
        let your hard work speak for itself.
      </p>
    </div>
  );
};

const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Fight with heart
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        In the ring, it&apos;s not just about skill, it&apos;s about heart.
        Fight with passion and determination to achieve victory.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: "/assets/home.jpg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: "/assets/ggg.jpg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: "/assets/gcan.webp",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: "/assets/gird2.jpg",
  },
];
