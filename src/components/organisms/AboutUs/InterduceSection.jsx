import treeImage from "../../../assets/tree.jpg";
import towImage from "../../../assets/two.jpg";
import fourImage from "../../../assets/four.jpg";
import oneImage from "../../../assets/one.jpg";



function InterduceSection() {
  return (
    <section className="bg-[#FCECDD] rounded-3xl px-4 mt-16" >
      <div className=" py-4 " >
        <h1 className=" text-orange-400  font-bold text-3xl text-center">About Us✨</h1>
        <p className=" text-gray-600 font-medium text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor<br/>
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className=" grid grid-cols-2 gap-6 md:grid-cols-4 px-8 py-4  " >
        
        <img className="w-60 h-60 rounded-3xl hover:border-3 hover:border-dashed hover:border-orange-400 transition-all" src={treeImage} alt="" />
        <img className="w-60 h-60 rounded-3xl hover:border-3 hover:border-dashed hover:border-orange-400 transition-all" src={oneImage} alt="" />
        <img className="w-60 h-60 rounded-3xl hover:border-3 hover:border-dashed hover:border-orange-400 transition-all" src={fourImage} alt="" />
        <img className="w-60 h-60 rounded-3xl hover:border-3 hover:border-dashed hover:border-orange-400 transition-all" src={towImage} alt="" />
      </div>
    </section>
  );
}

export default InterduceSection;
