import Announcement from "./_components/_announcement/announcement";
import HomeCards from "./_components/_homeCards/HomeCards";
import HomeHero from "./_components/hero";

function HomePage() {
  return (
    <div>
      <HomeHero />
      <Announcement />
      <HomeCards />
    </div>
  );
}

export default HomePage;
