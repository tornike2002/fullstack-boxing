"use client";
import { useGetAnnouncement } from "@/hooks/useGetAnnouncement";
import SmallerContainer from "../smallerContianer";
import { AnnouncementTypes } from "@/types/homeTypes";
import AnnouncementContent from "./announcementContent";
import ErrorDisplay from "../errorDisplay";
import AnnouncementSkeleton from "./announcementSkeleton";
import NoDataAnimation from "../noDataAnimation";
function Announcement() {
  const { data, isLoading, isError, error } = useGetAnnouncement();

  if (isLoading) return <AnnouncementSkeleton />;
  if (isError) return <ErrorDisplay errorMsg={error.message} />;
  if (!data || data.length === 0) return <NoDataAnimation />;

  return (
    <section className="bg-black px-6 md:px-0">
      <SmallerContainer>
        <div
          className="bg-black py-10 border border-white rounded-md "
        >
          {data.map((announc: AnnouncementTypes) => (
            <AnnouncementContent
              key={announc.id}
              title={announc.title}
              description={announc.description}
              image={announc.image}
            />
          ))}
        </div>
      </SmallerContainer>
    </section>
  );
}

export default Announcement;
