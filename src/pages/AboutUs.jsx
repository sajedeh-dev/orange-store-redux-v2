import AboutPartone from "../components/modules/AboutPartone";
import AboutParttree from "../components/modules/AboutParttree";
import AboutParttwo from "../components/modules/AboutParttwo";

function AboutUs() {
  return (
    <div className=" flex flex-col gap-8">
      <AboutPartone/>
      <AboutParttwo/>
      <AboutParttree/>
    </div>
    
  );
}

export default AboutUs;
