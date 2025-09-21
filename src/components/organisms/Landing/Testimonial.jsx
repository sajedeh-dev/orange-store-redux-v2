import user1 from "../../../assets/s3.jpg"
import user2 from "../../../assets/s4.jpg"
import user3 from "../../../assets/s5.jpg"

const testimonials = [
  {
    name: "Sara M.",
    image: user1,
    comment: "I loved the shopping experience. Super smooth and user-friendly interface!",
  },
  {
    name: "Ali K.",
    image: user2,
    comment: "The product filtering and checkout process were really intuitive. Great job!",
  },
  {
    name: "Leila T.",
    image: user3,
    comment: "A clean and modern UI, just like a real e-commerce platform. Well done!",
  },
  
];

const Testimonial = () => {
  return (
    <section className="text-center px-4 py-12 bg-[#f9f9f9] ">
      <h2 className="text-xl md:text-4xl text-orange-500 font-bold text-center mb-12">
        ✨What Our Customers Say✨
      </h2>

      <div className="flex justify-center flex-wrap gap-8">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 w-72 flex flex-col items-center hover:scale-105 transition-transform duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 object-cover rounded-full mb-4"
            />
            <p className="text-gray-600  mb-3">{item.comment}</p>
            <span className="text-gray-800 font-semibold"> {item.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};


export default Testimonial