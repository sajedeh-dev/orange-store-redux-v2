import image from "../../../assets/banner.png";




const Banner = () => {
  return (
    
   
    <section className="relative text-center px-4 py-12 bg-[#f9f9f9]">
      {/* title */}
      <h2 className="text-xl md:text-4xl text-orange-500 font-bold text-center mb-12">✨On Sale✨</h2>

      {/* sale badge */}
      <div className="absolute md:left-[-90px] md:top-10 left-[-5px] top-[60px] w-30 h-30 md:w-48 md:h-48 rounded-full bg-[#FCECDD] flex items-center justify-center z-20">
        <h1 className="text-[#FF7601] font-bold text-lg md:text-xl">
          on sale 50%
        </h1>
      </div>

      {/* banner */}
      <div className="flex flex-col md:flex-row justify-between items-center border-l-2 border-t-2 border-dashed border-[#FF7601] rounded-xl overflow-hidden max-w-6xl h-auto md:h-[500px] mx-auto">
        {/* left side */}
        <div className="p-8 flex-1 text-left mt-8">
          <h2 className="text-xl md:text-2xl text-[#FF7601] font-bold mb-2">
            🛍️ Special Discount Just for You!
          </h2>
          <p className="text-gray-700 font-semibold text-sm md:text-base leading-relaxed">
            Enjoy exclusive deals and save up to 50% on your favorite products.
            Offer valid while supplies last.
          </p>
          <button className="mt-4 px-5 py-2 bg-[#F3A26D] text-white rounded-lg hover:bg-[#e6894f] transition-colors">
            SHOP NOW
          </button>
        </div>

        {/* right side */}
        <div className="flex-1 p-8 h-full flex items-center justify-center">
          <img
            src={image}
            alt="Sale Banner"
            className="max-h-[400px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
