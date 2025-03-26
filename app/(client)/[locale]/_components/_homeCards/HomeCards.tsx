"use client";
import { HomeCardsTypes } from "@/types/homeTypes";
import ErrorDisplay from "../errorDisplay";
import NoDataAnimation from "../noDataAnimation";
import SmallerContainer from "../smallerContianer";
import { useGetHomeCards } from "@/hooks/useGetHomeCards";

import HomeCardsContent from "./HomeCardsContent";
import { motion } from "framer-motion";
import HomeCardsSkeleton from "./HomeCardsSkeleton";

function HomeCards() {
  const { data, isLoading, isError, error } = useGetHomeCards();

  if (isLoading) return <HomeCardsSkeleton />;
  if (isError) return <ErrorDisplay errorMsg={error.message} />;
  if (!data || data.length === 0) return <NoDataAnimation />;

  return (
    <section className="bg-black px-6 md:px-0">
      <SmallerContainer>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 py-10">
          {data.map((card: HomeCardsTypes) => (
            <motion.div
              key={card.id}
              className="relative group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <HomeCardsContent
                title={card.title}
                description={card.description}
                image={card.image}
              />
            </motion.div>
          ))}
        </div>
      </SmallerContainer>
    </section>
  );
}

export default HomeCards;
