import { AiOutlineEye } from "react-icons/ai";
import SmallerContainer from "../smallerContianer";

const HomeCardsSkeleton = () => {
  return (
    <section className="bg-black py-20">
      <SmallerContainer>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="relative w-full h-96 group overflow-hidden rounded-lg shadow-lg bg-white ring-1 ring-gray-200 animate-pulse"
            >
              <div className="w-full h-full bg-gray-300 rounded-lg"></div>
              <div className="absolute inset-0 bg-black bg-opacity-50 transition-all duration-300"></div>

              <div className="absolute inset-0 flex items-center justify-center opacity-60">
                <AiOutlineEye className="w-12 h-12 text-white opacity-80" />
              </div>

              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 opacity-60">
                <div className="w-2/3 h-6 bg-gray-300 rounded"></div>
                <div className="w-4/5 h-4 mt-2 bg-gray-300 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </SmallerContainer>
    </section>
  );
};

export default HomeCardsSkeleton;
