import { HeroSection } from "../components/HeroSection";
import  AboutUs  from "../components/AboutUs";
import  FeaturedRooms   from "../components/rooms/FeaturedRooms";
import RestaurantSection from "../components/RestaurantSection";
import BarLoungeSection from "../components/BarLoungeSection";



export default function Home() {
  return (
    <>
      <HeroSection />
        <AboutUs />
        <FeaturedRooms />
        <RestaurantSection />
        <BarLoungeSection/>
    </>

  );
}