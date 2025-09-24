import contact from "../assets/contact.png"


function ContactUs() {
  return (
    <section className="bg-[#FCECDD] p-8 mt-20 rounded-2xl grid grid-cols-1 md:flex md:items-center md:justify-between md:px-20">
      
      <div className=" flex flex-col gap-6">
        <h1 className="font-bold text-xl text-orange-400">Contact Us</h1>
        <input
          className="bg-gray-50 border border-orange-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-orange-300 focus:ring-1 focus:ring-orange-300 block w-64 p-2.5 "
          type="text"
          placeholder="Full Name"
        />
        <input
          className="bg-gray-50 border border-orange-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-orange-300 focus:ring-1 focus:ring-orange-300 block w-64 p-2.5 "
          type="text"
          placeholder="Email"
        />
        <textarea
          id="description"
          className="w-full border bg-gray-50 border-orange-300 rounded-lg p-2 mt-1 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-orange-300"
          placeholder="Your message..."
        />
        <button className="bg-orange-300 rounded-xl py-3 text-white  font-medium cursor-pointer">Submit</button>
      </div>
      <div>
        <img src={contact} alt="contactus" />
      </div>
    </section>
  );
}

export default ContactUs;
