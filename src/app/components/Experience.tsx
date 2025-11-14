"use client";

export default function Experience() {
  const experiences = [
    {
      title: "HTML5",
      icon: "/html-5.png",
      desc: "Building semantic and accessible web pages.",
    },
    {
      title: "CSS3",
      icon: "/css-3.png",
      desc: "Responsive layouts, Flexbox, Grid, animations.",
    },
    {
      title: "JavaScript",
      icon: "/js.png",
      desc: "Dynamic UI interactions and API integrations.",
    },
    {
      title: "React",
      icon: "/library.png",
      desc: "Component-based UI, hooks, state management.",
    },
    {
      title: "Next.Js",
      icon: "/nextjs-icon.png",
      desc: "A React framework for building fast, scalable, and SEO-friendly web applications.",
    },
     {
      title: "Tailwind CSS",
      icon: "/tailwind.png",
      desc: "Utility-first CSS framework for building fast, responsive, and modern interfaces.",
    },
  ];

  return (
    <section
      id="experience"
      className="bg-[#0F1624] text-white py-12 px-6 lg:px-16"
    >
      <h2 className="mb-10 text-4xl font-bold mb-4 text-center text-blue-400 relative after:content-[''] after:block after:w-16 after:h-1 after:bg-blue-500 after:mx-auto after:mt-2 after:rounded-full">
        Experience
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-[#1A2433] border border-gray-700 rounded-xl p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
          >
            <img
              src={exp.icon}
              alt={exp.title}
              className="w-16 h-16 object-contain mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
            <p className="text-gray-300 text-sm">{exp.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
