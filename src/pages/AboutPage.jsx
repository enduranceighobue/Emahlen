import { AboutHero } from "../components/AboutHero";
import  AboutSection   from "../components/AboutSection";
import  AboutIntro  from "../components/AboutIntro";




export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutIntro />
      <AboutSection />

      {/* Add other About sections here */}
    </>
  );
}