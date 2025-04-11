import { useTranslations } from "next-intl";

export const SkeletonOne = () => {
    const t = useTranslations("skeletons")
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
        {t("skeleton1-t")}
        </p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        {t("skeleton1-desc")}
        </p>
      </div>
    );
  };