import Image from "next/image";
import { NavLinks } from "../../../../lib/links";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import MainContainer from "../../../../ui/MainContainer";

function Navbar() {
  const t = useTranslations("NavLinks");
  return (
    <div className="bg-black">
      <MainContainer>
        <div className="text-white flex justify-between items-center px-5">
          <div className="flex items-center ">
            <Link href="/">
              <Image
                src="/assets/JG-FREE.png"
                alt="Logo"
                width={80}
                height={80}
                className="w-auto h-auto"
                priority
              />
            </Link>
            <h2>JG BOXING</h2>
          </div>
          <div className="hidden items-center gap-4 pl-10 sm:flex">
            {NavLinks.map((link) => (
              <Link key={link.id} href={link.path}>
                {t(link.name)}
              </Link>
            ))}
          </div>
        </div>
      </MainContainer>
    </div>
  );
}

export default Navbar;
