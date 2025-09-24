import userabout from "../../../assets/user-about.png";

function ValuesSection() {
  return (
    <section>
      <div className=" grid grid-cols-1 md:grid-cols-2 rounded-2xl items-center gap-8 bg-[#FCECDD] border-l-2 border-t-2 border-orange-500 border-dashed ">
        {/* left */}
        <div className=" flex flex-col p-8 gap-8 ">
          <div className=" flex flex-col gap-10">
            <h1 className="text-orange-400  font-bold text-3xl text-left">
              Why choose us
            </h1>
            <p className=" text-gray-600 text-xl font-medium text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis
            </p>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex">
              <span className="w-7 h-7">💹</span>
              <div>
                <span className=" text-sm text-gray-500">dolor magna</span>
                <p className=" text-sm text-gray-500">96%</p>
              </div>
            </div>
            <div className="flex">
              <span className="w-7 h-7">📊</span>
              <div>
                <span className=" text-sm text-gray-500">dolor magna</span>
                <p className=" text-sm text-gray-500">96%</p>
              </div>
            </div>
            
          </div>
          
        </div>
        {/* right */}
        <div className="mx-auto p-8">
          <div className=" w-[260px] h-[350px] rounded-2xl  border-dashed border-r-2 border-orange-500 border-t-2 flex justify-center items-center">
            <img className="w-[200px] h-[300px]" src={userabout} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ValuesSection;
