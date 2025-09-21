import { FiBox } from "react-icons/fi";
import { FiCreditCard } from "react-icons/fi";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { FaHeadphones } from "react-icons/fa6";

function Servises() {
  return (
    <section className=" flex flex-col  ">
      <h1 className="text-xl md:text-4xl text-orange-500 font-bold text-center mb-12">
        ✨Servises✨
      </h1>
      <div className="grid grid-cols-1 px-4 md:px-6 gap-4 md:gap-6  sm:grid-cols-2 md:grid-cols-4">
        <div className="bg-[#FCECDD] rounded-xl p-4 flex flex-col gap-1">
          <FiBox className="size-7 text-gray-900" />
          <h4 className="text-gray-800 font-medium text-lg">Free shipping</h4>
          <p className=" text-sm font-medium text-gray-600">
            Free shipping for order above $150
          </p>
        </div>
        <div className="bg-[#FCECDD] rounded-xl p-4 flex flex-col gap-1">
          <RiMoneyDollarCircleLine className="size-7 text-gray-900 " />
          <h4 className="text-gray-800 font-medium text-lg">Money Guarantee</h4>
          <p className=" text-sm font-medium text-gray-600">
            Within 30 days for an exchange
          </p>
        </div>
        <div className="bg-[#FCECDD] rounded-xl p-4 flex flex-col gap-1">
          <FaHeadphones className="size-7 text-gray-900" />
          <h4 className="text-gray-800 font-medium text-lg">Online Support</h4>
          <p className=" text-sm font-medium text-gray-600">
            24 hours a day,7 days a week
          </p>
        </div>
        <div className="bg-[#FCECDD] rounded-xl p-4 flex flex-col gap-1">
          <FiCreditCard className="size-7 text-gray-900" />
          <h4 className="text-gray-800 font-medium text-lg">Flexible Payment</h4>
          <p className=" text-sm font-medium text-gray-600">
            Pay with multiple credit cards
          </p>
        </div>
      </div>
    </section>
  );
}

export default Servises;
