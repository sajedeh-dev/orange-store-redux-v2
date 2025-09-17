// pages/Home.jsx
import Hero from "../components/organisms/Landing/Hero";
import Categories from "../components/organisms/Landing/Categories";
import Slider from "../components/Slider";
import Banner from "../components/organisms/Landing/Banner";
import Testimonial from "../components/organisms/Landing/Testimonial";

const Home = () => {
  return (
    <div className="flex flex-col gap-16 md:mt-16">
      <Hero />
      <Categories />
      <Slider />
      <Banner/>
      <Testimonial />
      {/* بخش‌های بعدی اینجا اضافه میشن */}
    </div>
  );
};

export default Home;
