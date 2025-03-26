const MapSkeleton = () => {
  return (
    <div className="skeleton-loader w-[700px] h-[500px] bg-black relative animate-pulse">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-3/5 h-[20px] rounded animate-ping"></div>
    </div>
  );
};

export default MapSkeleton;
