const AnnouncementSkeleton = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 py-10 gap-8 md:gap-2 place-items-center bg-black">
      <div className="text-white flex flex-col items-center gap-4">
        <div className="h-8 w-3/4 bg-gray-600 animate-pulse rounded"></div>{" "}
        <div className="h-4 w-2/3 bg-gray-600 animate-pulse rounded mt-2"></div>{" "}
        <div className="h-10 w-48 bg-gray-600 animate-pulse rounded mt-5"></div>{" "}
      </div>

      <div className="w-full max-w-[500px]">
        <div className="w-full h-[300px] bg-gray-600 animate-pulse rounded"></div>{" "}
      </div>
    </div>
  );
};

export default AnnouncementSkeleton;
