// pages/Home.jsx
import Hero from '../components/Hero';
import Categories from "../components/Categories";
import Banner from "../components/Banner";
import Testimonial from "../components/Testimonial";
import Slider from "../components/Slider"

const Home = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <Slider/>
      <Banner />
      <Testimonial />
      {/* بخش‌های بعدی اینجا اضافه میشن */}
    </div>
  );
};

export default Home;
