"use client";
import { HomeCardsTypes } from "@/types/homeTypes";
import ErrorDisplay from "../errorDisplay";
import NoDataAnimation from "../noDataAnimation";
import SmallerContainer from "../smallerContianer";
import { useGetHomeCards } from "@/hooks/useGetHomeCards";
function HomeCards() {
  const { data, isLoading, isError, error } = useGetHomeCards();
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <ErrorDisplay errorMsg={error.message} />;
  if (!data || data.length === 0) return <NoDataAnimation />;
  return (
    <section>
      <SmallerContainer>
        <div className="w-full grid grid-cols-3 gap-10">
          {data.map((card: HomeCardsTypes) => (
            <div className="" key={card.id}>
              <img
                src={card.image}
                alt={card.title.en}
                className="w-full h-96 object-cover"
              />
              <h2>{card.title.en}</h2>
              <p>{card.description.en}</p>
            </div>
          ))}
        </div>
      </SmallerContainer>
    </section>
  );
}

export default HomeCards;
