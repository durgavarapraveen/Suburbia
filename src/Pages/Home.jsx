import React from "react";
import Hero from "../Compnents/Hero";
import Herder from "../Compnents/Herder";
import { SVGFilters } from "../Compnents/SvgFilter";
import LatestDrop from "../Compnents/LatestDrop";
import StackedPages from "./StackedPages";
import VideoCard from "./VideoCard";
import Team from "./Team";
import Footer from "./Footer";

function Home() {
  return (
    <div className="text-zinc-800 mono">
      <Herder />
      <Hero />
      <LatestDrop />
      <StackedPages />
      <VideoCard />
      <Team />
      <Footer />
      <SVGFilters />
    </div>
  );
}

export default Home;
