import { useTranslations } from "next-intl";
import Image from "next/image";
import { FaFacebookF, FaTiktok } from "react-icons/fa";
import SmallerContainer from "./smallerContianer";
function Footer() {
  const t = useTranslations("footer");
  return (
    <footer className="bg-black pt-12 px-2 border-t-2 border-white/40 shadow-[0_-2px_4px_rgba(255,255,255,0.3)]">
      <SmallerContainer>
        <div className="flex flex-col extraSm:flex-row items-start justify-between py-10 ">
          <div className="flex items-center gap-2 w-full">
            <Image
              src="/assets/JG-FREE.png"
              alt="Logo"
              width={80}
              height={80}
              className="w-auto h-auto"
              priority
            />
            <h2 className="font-bold text-white">LG BOXING</h2>
          </div>
          <div className="text-white flex extraSm:items-end items-center flex-col gap-7 justify-between w-full">
            <div className="flex items-center gap-2 text-xl text-right">
              <a href="https://www.facebook.com/ucha.maisuradze.9235dx">
                <FaFacebookF className="transition-transform duration-300 hover:scale-125 cursor-pointer" />
              </a>
              <a href="https://www.tiktok.com/@uchamaisuradze5">
                <FaTiktok className="transition-transform duration-300 hover:scale-125 cursor-pointer" />
              </a>
            </div>
            <div className="extraSm:text-right text-center">
              <h1 className="font-semibold text-sm">{t("boxing")}</h1>
              <h1 className="font-semibold text-sm">{t("reserved")}</h1>
            </div>

            <div className="text-white underline text-xs extraSm:text-right text-center">
              <h2>{t("privacy")}</h2>
              <h2>{t("blog")}</h2>
              <h2>{t("core")}</h2>
            </div>
          </div>
        </div>
        <div className="text-center text-white pb-4 text-xs font-mono">
          <h3>{t("sponsor")}</h3>
        </div>
      </SmallerContainer>
    </footer>
  );
}

export default Footer;
