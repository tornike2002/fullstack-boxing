const ContactUsSkeleton = () => {
  return (
    <section className="bg-black mx-auto p-4 min-h-screen pt-32">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8 md:gap-2 place-items-center">
        <div className="text-white flex flex-col items-start gap-6">
          <div className="h-10 w-48 bg-gray-600 animate-pulse rounded mt-5"></div>
          
          <div className="h-4 w-2/3 bg-gray-600 animate-pulse rounded mt-2"></div>
          <div className="h-4 w-2/3 bg-gray-600 animate-pulse rounded mt-5"></div>
          <div className="h-4 w-2/3 bg-gray-600 animate-pulse rounded mt-5"></div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSkeleton;
