import MainContainer from "@/ui/MainContainer";
import { useTranslations } from "next-intl";
function HomeHero() {
  const t = useTranslations("hero");
  return (
    <section className="bg-black">
      <MainContainer>
        <div className="bg-black h-screen">
          <div
            className="relative h-full w-full bg-no-repeat bg-cover bg-top"
            style={{ backgroundImage: "url('/assets/home.jpg')" }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute bottom-24 left-4 sm:left-24 text-white text-4xl font-bold">
              <h1>{t("main-title")}</h1>
              <h1>{t("sub-title")}</h1>
            </div>
          </div>
        </div>
      </MainContainer>
    </section>
  );
}

export default HomeHero;
