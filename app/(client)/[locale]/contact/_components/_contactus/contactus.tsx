"use client";
import { useGetContact } from "@/hooks/useGetContact";
import NoDataAnimation from "../../../_components/noDataAnimation";
import { motion } from "framer-motion";
import { ContactTypes } from "@/types/contactTypes";
import SmallerContainer from "../../../_components/smallerContianer";
import ContactUsSkeleton from "./contactusSkeleton";
import ContactusContent from "./contactusContent";

function ContactUs() {
  const { data, error, isLoading, isError } = useGetContact();

  if (isLoading) return <ContactUsSkeleton />;
  if (!data || data.length === 0) return <NoDataAnimation />;
  if (isError) return <div>{error.message}</div>;

  return (
    <section className=" mx-auto p-4 min-h-[50vh] lg:min-h-screen pt-32 z-50">
      <SmallerContainer>
        <motion.div>
          {data.map((contact: ContactTypes) => (
            <ContactusContent
              address={contact.address}
              email={contact.email}
              phone={contact.phone}
              title={contact.title}
              key={contact.id}
            />
          ))}
        </motion.div>
      </SmallerContainer>
    </section>
  );
}

export default ContactUs;
