import styled from "styled-components";
//Components
import About from "../components/Home/About";
import Blogs from "../components/Home/Blogs";
import Hero from "../components/Home/Hero";
import Mid1 from "../components/Home/Mid1";
import Mid2 from "../components/Home/Mid2";
import News from "../components/Home/News";
import Newsletter from "../components/Home/Newsletter";
import Partners from "../components/Home/Partners";
import Screenshots from "../components/Home/Screenshots";
import Videos from "../components/Home/Videos";

export default function Home() {
  return (
    <StyledHome>
      <Hero />
      <About />
      <Mid1 />
      <Mid2 />
      <News />
      <Newsletter />
      <Blogs />
      <Screenshots />
      <Partners />
      <Videos />
    </StyledHome>
  );
}

const StyledHome = styled.main``;
