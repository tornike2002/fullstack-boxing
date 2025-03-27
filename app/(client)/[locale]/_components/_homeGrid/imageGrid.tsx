import { LayoutGrid } from "@/components/ui/layout-grid";
import SmallerContainer from "../smallerContianer";
import SnowingAnimation from "../SnowingAnimation";
import { useTranslations } from "next-intl";
export function ImageGrid() {
const t = useTranslations("skeletons")
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

const SkeletonOne = () => {
  const t = useTranslations("skeletons")
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
      {t("skeleton1-t")}
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      {t("skeleton1-desc")}
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  const t = useTranslations("skeletons")
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
      {t("skeleton2-t")}
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      {t("skeleton2-desc")}
      </p>
    </div>
  );
};

const SkeletonThree = () => {
  const t = useTranslations("skeletons")
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
      {t("skeleton3-t")}
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      {t("skeleton3-desc")}
      </p>
    </div>
  );
};

const SkeletonFour = () => {
  const t = useTranslations("skeletons")
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
      {t("skeleton4-t")}
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      {t("skeleton4-desc")}.
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
