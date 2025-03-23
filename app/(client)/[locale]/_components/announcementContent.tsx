import { Link } from "@/navigation";
import { AnnouncementTypes } from "@/types/announcementTypes";
import Image from "next/image";
function AnnouncementContent({ title, description, image }: AnnouncementTypes) {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-8 md:gap-2 place-items-center">
      <div className="text-white flex flex-col items-center  gap-2">
        <h1 className="text-[25px] mediumSm:text-[35px] text-center font-bold">
          {title}
        </h1>
        <p className="text-xs max-w-[70%] text-center ">{description}</p>
        <Link href={"/contact"}>
          <button
            className="text-white text-sm font-semibold py-3 px-10
       border-white border hover:bg-white
        hover:text-black transition-all duration-300 ease mt-5"
          >
            LEARN MORE & ABOUT US
          </button>
        </Link>
      </div>
      <div>
        <Image
          src={image}
          alt="announcement"
          className="object-cover object-center bg-no-repeat"
          width={500}
          height={600}
        />
      </div>
    </div>
  );
}

export default AnnouncementContent;
