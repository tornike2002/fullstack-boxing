import { useTranslations } from "next-intl";
function HomePage() {
  const t = useTranslations("homepage");
  return (
    <div>
      <h1>{t("title")}</h1>
      <p>{t("content")}</p>
    </div>
  );
}

export default HomePage;
