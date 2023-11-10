import { useState } from "react";
import { HeroChild } from "./HeroChIld";
function Hero() {
  let [love, setlove] = useState("1");
  let [slider, setslider] = useState("slide");
  return (
    <>
      <section className="hero_container">
        <HeroChild
          heading="Elegant Flooring for the Spaces that Matter"
          paragraph="Elegant Flooring for your Business Spaces g for our Business Spaces g for your Business Spaces"
          image="./src/assets/pexels-pixabay.png"
          alt="pixabay.png"
          number="1"
          love={love}
          setlove={setlove}
          order={love == "1" ? "0" : love == "2" ? "2" : "1"}
          slider={slider}
          setslider={setslider}
        />
        <HeroChild
          heading="Get Pet-Friendly Flooring Installed"
          paragraph="Keep your pets and everyone else safe in your space with our flooring installations"
          image="./src/assets/pexels-pixabay-259962 1 (2).png"
          alt="pixabay-259962"
          number="2"
          love={love}
          setlove={setlove}
          order={love == "2" ? "0" : love == "1" ? "1" : "2"}
          slider={slider}
          setslider={setslider}
        />
        <HeroChild
          heading="Enjoy $99 OFF your first Order"
          paragraph="Get unbeatable deals and amazing customer support on every flooring you install with us. First-time customers enjoy $99 off"
          image="./src/assets/pexels-pixabay-259962 1 (3).png"
          alt="ixabay-259962 1 (3).png"
          number="3"
          love={love}
          setlove={setlove}
          order={love == "3" ? "0" : love == "1" ? "2" : "1"}
          slider={slider}
          setslider={setslider}
        />
      </section>
    </>
  );
}
export default Hero;
