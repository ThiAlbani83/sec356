import React from "react";
import HeroIntroduce from "../components/home/HeroIntroduce";
import Services from "../components/home/Services";
import Consultorias from "../components/home/Consultorias";
import CTA1 from "../components/home/CTA1";
import Certificados from "../components/home/Certificados";
import Desafios from "../components/home/Desafios";
import Sobre from "../components/home/Sobre";
import Porque from "../components/home/Porque";
import Process from "../components/home/Process";

const Home = () => {
  return (
    <div>
      <HeroIntroduce />
      <Services />
      <Consultorias />
      <CTA1 />
      <Certificados />
      <Desafios />
      <Sobre />
      <Porque />
      <Process />
    </div>
  );
};

export default Home;
