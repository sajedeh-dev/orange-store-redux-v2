
import image from "../../../assets/hero.svg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-[#FCECDD] border-t-3 border-l-3 border-orange-500 border-dashed grid grid-cols-1 md:grid-cols-2 md:items-center rounded-xl px-6 py-8 mt-20" >
      <div className=" flex flex-col md:ml-8 " >
        <h1 className=" text-orange-500 font-bold text-4xl mb-6">
          Spread Your Charming <br />
          With Your Fation✨
        </h1>
        <p className="text-orange-500 font-bold text-xl mb-6">Lets Create your own style</p>
        <Link className="inline-block w-26  bg-orange-200 text-orange-600 px-4 py-3 rounded-xl font-medium" to="/products" >
          Start buy
        </Link>
      </div>
      <div className="mt-6 p-6" >
        <img src={image} alt="" />
      </div>
    </section>
  );
};

export default Hero;
