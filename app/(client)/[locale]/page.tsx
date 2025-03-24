import Announcement from "./_components/_announcement/announcement";
import HomeCards from "./_components/_homeCards/HomeCards";
import { ImageGrid } from "./_components/_homeGrid/imageGrid";
import HomeHero from "./_components/hero";

function HomePage() {
  return (
    <div>
      <HomeHero />
      <Announcement />
      <HomeCards />
      <ImageGrid />
    </div>
  );
}

export default HomePage;
