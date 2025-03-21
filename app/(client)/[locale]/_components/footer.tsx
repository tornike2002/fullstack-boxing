import MainContainer from "@/app/(client)/[locale]/_components/MainContainer";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { FaFacebookF, FaTiktok, FaYoutube } from "react-icons/fa";
function Footer() {
  const t = useTranslations("footer");
  return (
    <footer className="bg-black pt-12 px-2">
      <MainContainer>
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
            <h2 className="font-bold text-white">JG BOXING</h2>
          </div>
          <div className="text-white flex extraSm:items-end items-center flex-col gap-7 justify-between w-full">
            <div className="flex items-center gap-2 text-xl text-right">
              <a href="">
                <FaFacebookF className="transition-transform duration-300 hover:scale-125 cursor-pointer" />
              </a>
              <a href="">
                <FaTiktok className="transition-transform duration-300 hover:scale-125 cursor-pointer" />
              </a>
              <a href="">
                <FaYoutube className="transition-transform duration-300 hover:scale-125 cursor-pointer" />
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
      </MainContainer>
    </footer>
  );
}

export default Footer;
