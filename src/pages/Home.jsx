// pages/Home.jsx
import Hero from '../components/Hero';
import Categories from "../components/Categories";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <Banner />
      {/* بخش‌های بعدی اینجا اضافه میشن */}
    </div>
  );
};

export default Home;
