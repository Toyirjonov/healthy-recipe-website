import React from "react";
import { Link } from "react-router-dom";
import HeroDesc from "../components/HeroDesc";
import Cta from "../components/Cta";

function Home() {
  return (
    <>
      <HeroDesc />
      <Cta />
    </>
  );
}

export default Home;
