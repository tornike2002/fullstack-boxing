import { HomeCardsTypes } from "@/types/homeTypes";
import { useLocale } from "next-intl";
import { AiOutlineEye } from "react-icons/ai";

function HomeCardsContent({ image, title, description }: HomeCardsTypes) {
  const locale = useLocale() as "en" | "ka" | "ru";
  return (
    <div className="relative w-full h-96 group overflow-hidden rounded-lg shadow-lg bg-white ring-1 ring-gray-200 transition-all duration-300 hover:ring-4 hover:ring-white hover:shadow-2xl">
      <img
        src={image}
        alt={"image"}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-70 transition-all duration-300"></div>

      <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
        <AiOutlineEye className="w-12 h-12 text-white opacity-80" />
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 transition-all duration-300 opacity-0 group-hover:opacity-100">
        <h2 className="text-xl font-semibold">{title[locale]}</h2>
        <p className="text-sm">{description[locale]}</p>
      </div>
    </div>
  );
}

export default HomeCardsContent;
