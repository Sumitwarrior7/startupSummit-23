import Hero from "@/components/Hero";
import Content from "@/components/Content";
import About from "@/components/About";
import Carousel from "@/components/Carousel";
import Hightlight from "@/components/Hightlight";
import Topics from "@/components/Topics";
import { Trailblazzers } from "@/components/normal/Trailblazzers";
import Organizer from "@/components/Organizer";
export default function Home() {
  return (
    <>
      <Hero />
      <Organizer />
      <About />
      <Content />
      {/*<Carousel/>*/}
      <Hightlight />
      {/*<Topics />*/}
      <Trailblazzers />
    </>
  );
}
