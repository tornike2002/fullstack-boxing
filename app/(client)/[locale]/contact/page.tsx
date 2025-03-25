import ContactUs from "./_components/_contactus/contactus";
import dynamic from "next/dynamic";

const ContactUsMap = dynamic(
  () => import("./_components/_contactus/contactusMap"),
  { ssr: false }
);

function Contact() {
  return (
    <>
      <ContactUs />
      <ContactUsMap />
    </>
  );
}

export default Contact;
