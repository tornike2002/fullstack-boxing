import Image from "next/image";
import { NavLinks } from "../../../lib/links";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

function Navbar() {
  const t = useTranslations("NavLinks");
  return (
    <div className="bg-black text-white flex justify-between items-center px-5">
      <div className="flex items-center ">
        <Image
          src="/assets/JG-FREE.png"
          alt="Logo"
          width={80}
          height={80}
          className="w-auto h-auto"
          priority
        />
        <h2>JG BOXING</h2>
      </div>
      <div className="flex items-center gap-4 pl-10">
        {NavLinks.map((link) => (
          <Link key={link.id} href={link.path}>
            {t(link.name)}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
