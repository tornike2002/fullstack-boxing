import dynamic from "next/dynamic";
import { Marquee } from "./_components/_contactus/marquee";
import { Lamp } from "./_components/_contactus/lamp";
import MainContainer from "../_components/MainContainer";

const ContactUsMap = dynamic(
  () => import("./_components/_contactus/contactusMap"),
  { ssr: false }
);

function Contact() {
  return (
    <div className="bg-black">
  
      <Lamp />
      <MainContainer>
        <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center justify-items-center bg-black w-full">
          <Marquee />
          <ContactUsMap />
        </div>
      </MainContainer>
    </div>
  );
}

export default Contact;
