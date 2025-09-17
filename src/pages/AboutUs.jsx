import HistorySection from "../components/organisms/AboutUs/HistorySection";
import InterduceSection from "../components/organisms/AboutUs/InterduceSection";
import ValuesSection from "../components/organisms/AboutUs/ValuesSection";


function AboutUs() {
  return (
    <div className=" flex flex-col gap-8 md:gap-36 md:mt-20">
      <InterduceSection/>
      <HistorySection/>
      <ValuesSection/>
    </div>
    
  );
}

export default AboutUs;
