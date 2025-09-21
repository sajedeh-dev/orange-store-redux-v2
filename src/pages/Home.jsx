// pages/Home.jsx
import Hero from "../components/organisms/Landing/Hero";
import Categories from "../components/organisms/Landing/Categories";
import Slider from "../components/organisms/Landing/Slider";
import Banner from "../components/organisms/Landing/Banner";
import Testimonial from "../components/organisms/Landing/Testimonial";
import Servises from "../components/organisms/Landing/Servises";

const Home = () => {
  return (
    <div className="flex flex-col gap-28 md:mt-16">
      <Hero />
      <Categories />
      <Slider />
      <Banner/>
      <Servises/>
      <Testimonial />
      
    </div>
  );
};

export default Home;
