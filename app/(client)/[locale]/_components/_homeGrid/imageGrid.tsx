import { LayoutGrid } from "@/components/ui/layout-grid";
import SmallerContainer from "../smallerContianer";
import SnowingAnimation from "../SnowingAnimation";
import { useTranslations } from "next-intl";
import { SkeletonOne } from "./SkeletonOne";
import { SkeletonTwo } from "./SkeletonTwo";
import { SkeletonThree } from "./SkeletonThree";
import { SkeletonFour } from "./SkeletonFour";

export function ImageGrid() {
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
      thumbnail: "/assets/galerry-lasha.webp",
    },
    {
      id: 3,
      content: <SkeletonThree />,
      className: "col-span-1",
      thumbnail: "/assets/lasha3.jpg",
    },
    {
      id: 4,
      content: <SkeletonFour />,
      className: "md:col-span-2",
      thumbnail: "/assets/gird2.jpg",
    },
  ];

  const t = useTranslations("skeletons");
  return (
    <section className=" bg-black text-white ">
      <SmallerContainer>
        <h1 className="text-center text-xl sm:text-2xl md:text-[42px] font-bold uppercase font-mono pt-20 pb-6">
          {t("title")}
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
