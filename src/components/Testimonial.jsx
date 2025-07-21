import styles from "./Testimonial.module.css";
import user1 from "../assets/s3.jpg"
import user2 from "../assets/s4.jpg"
import user3 from "../assets/s5.jpg"

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
    <section className={styles.testimonials}>
      <h2>✨What Our Customers Say✨</h2>
      <div className={styles.list}>
        {testimonials.map((item, index) => (
          <div className={styles.card} key={index}>
            <img src={item.image} alt={item.name} />
            <p>"{item.comment}"</p>
            <span>- {item.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
