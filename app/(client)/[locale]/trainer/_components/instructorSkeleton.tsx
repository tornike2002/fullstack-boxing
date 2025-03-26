const InstructorSkeleton = () => {
  return (
    <div className="flex flex-col gap-6 mt-10 justify-center items-center w-full">
      {/* Title Skeleton */}
      <div className="w-full text-center text-3xl md:text-6xl font-bold py-4 bg-black animate-pulse h-8 rounded"></div>

      {/* Description and Image Skeleton */}
      <div className="flex flex-col md:flex-row gap-8 justify-between items-stretch mb-16 w-full">
        {/* Description Skeleton */}
        <div className="w-full md:w-1/2 flex items-center px-6 md:pl-10">
          <div className="bg-gray-400 animate-pulse w-full h-32 rounded"></div>
        </div>

        {/* Image Skeleton */}
        <div className="w-full md:w-1/2 h-full flex items-center justify-center">
          <div className="bg-gray-400 animate-pulse w-full h-[500px] md:h-[600px] rounded-lg shadow-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default InstructorSkeleton;
