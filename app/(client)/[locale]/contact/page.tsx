import ContactUs from "./_components/_contactus/contactus";
import dynamic from "next/dynamic";

const ContactUsMap = dynamic(
  () => import("./_components/_contactus/contactusMap"),
  { ssr: false }
);

function Contact() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center justify-items-center bg-black">
      <ContactUs />
      <ContactUsMap />
    </div>
  );
}

export default Contact;
