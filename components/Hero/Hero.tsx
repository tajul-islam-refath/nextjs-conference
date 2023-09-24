import Image from "next/image";
import hero1 from "../../public/hero_1.png";
import hero2 from "../../public/hero_2.png";
import hero3 from "../../public/hero_3.png";
import hero4 from "../../public/hero_4.png";
import hero5 from "../../public/hero_5.png";
import hero6 from "../../public/hero_6.jpg";

function Hero() {
  return (
    <div className="hero">
      <Image src={hero1} className="hero__img--one" alt="" />
      <Image src={hero2} className="hero__img--two" alt="" />
      <Image src={hero5} className="hero__img--five" alt="" />
      <Image src={hero6} className="hero__img--six" alt="" />
      <div className="container mx-auto">
        <div className="hero__content">
          <div className="hero__text">
            <h1>React</h1>
            <h1>Conference</h1>
          </div>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="w-full text-black md:w-1/3 order-3 md:order-1">
              <Image src={hero4} alt="" className="hero4" />
            </div>
            <div className="w-full text-black md:w-1/3  order-1 md:order-2">
              <div className="">
                <p>
                  Lorem uis diam turpis quam id fermentum.In quis diam turpis
                  quam id fermentum..id fermentum.In quis diam turpis quam id
                  fermentum.
                </p>
                <button className="hero__buyticket">Buy Tickets</button>
              </div>
            </div>
            <div className="w-full text-black md:w-1/3 order-2 md:order-3">
              <Image src={hero3} alt="" className=" hero3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
