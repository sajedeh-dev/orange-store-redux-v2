import treeImage from "../../../assets/tree.jpg";
import towImage from "../../../assets/two.jpg";
import fourImage from "../../../assets/four.jpg";
import oneImage from "../../../assets/one.jpg";



function InterduceSection() {
  return (
    <section className="bg-[#FCECDD] rounded-3xl border-l-2 border-t-2 border-orange-500 border-dashed px-6 py-6 md:p-10 mt-16 md:flex md:justify-between md:items-center" >
      <div className="  flex flex-col gap-4 " >
        <h1 className=" text-orange-400  font-bold text-3xl text-center md:text-left">About Us✨</h1>
        <p className=" text-gray-600 text-lg  font-medium text-center md:text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Sed do eiusmod tempor
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          
        </p>
      </div>
      <div className=" grid grid-cols-2 gap-6 md:grid-cols-2 py-8   " >
        
        <img className="w-60 h-50 md:h-60 rounded-3xl hover:border-3 hover:border-dashed hover:border-orange-400 transition-all" src={treeImage} alt="" />
        <img className="w-60 h-50 md:h-60 rounded-3xl hover:border-3 hover:border-dashed hover:border-orange-400 transition-all" src={oneImage} alt="" />
        <img className="w-60 h-50 md:h-60 rounded-3xl hover:border-3 hover:border-dashed hover:border-orange-400 transition-all" src={fourImage} alt="" />
        <img className="w-60 h-50 md:h-60 rounded-3xl hover:border-3 hover:border-dashed hover:border-orange-400 transition-all" src={towImage} alt="" />
      </div>
    </section>
  );
}

export default InterduceSection;
