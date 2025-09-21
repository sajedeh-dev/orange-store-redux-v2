import user1 from "../../../assets/s3.jpg";
import user2 from "../../../assets/s4.jpg";
import user3 from "../../../assets/s5.jpg";

const teamMembers = [
  {
    id: 1,
    image: user1,
    title: "Frontend Developer",
    description:
      "Building responsive user interfaces with React and Tailwind, focusing on smooth user experience.",
  },
  {
    id: 2,
    image: user2,
    title: "Backend Developer",
    description:
      "Designing and implementing secure, scalable APIs using Node.js and Express.",
  },
  {
    id: 3,
    image: user3,
    title: "UI/UX Designer",
    description:
      "Creating minimal and user-friendly designs following modern UX principles.",
  },
 
];

function TeamSection() {
  return (
    <section>
      <h2 className=" text-orange-400  font-bold text-3xl text-center md:text-left mb-10">Team Work</h2>
    <div className="mx-auto max-w-xl px-8  space-y-6 mb-20 ">
      {teamMembers.map((member) => (
        <div
          key={member.id}
          className="mx-auto max-w-md border-2 border-orange-500 border-dashed overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl"
        >
          <div className="md:flex">
            <div className="md:shrink-0">
              <img
                className="h-48 w-full object-cover md:h-full md:w-48"
                src={member.image}
                alt={member.title}
              />
            </div>
            <div className="p-8">
              <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">
                {member.title}
              </div>
              <p className="mt-2 text-gray-500">{member.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    </section>
  );
}

export default TeamSection;
