"use client";

import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "Aremu E-Commerce",
      description: "A modern fashion eCommerce website built with Next.js and TailwindCSS.",
      image: "/projects/e-commerce.png",
      liveLink: "https://aremu-ecommerce-cloth-brand.vercel.app",
      codeLink: "https://github.com/Basit403/Aremu-ecommerce-cloth-brand",
    },
    {
      title: "Resturant Landing Page",
      description: "A fully responsive and accessible online resturant landing page built with React.",
      image: "/projects/resturant.png",
      liveLink: "https://resturant-website-ovl2.vercel.app",
      codeLink: "https://github.com/Basit403/resturant-website",
    },
    {
      title: "Auth Form",
      description: "Auth Sign/Login form using Next.js and supabase with Yup validation.",
      image: "/projects/auth.png",
      liveLink: "https://supabase-auth-project.vercel.app",
      codeLink: "https://github.com/Basit403/Supabase-auth-Project",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-[#0F1624] text-white flex flex-col items-center px-6 py-20 scroll-mt-24"
    >
      <h2 className="mb-10 text-4xl font-bold mb-4 text-center text-blue-400 relative after:content-[''] after:block after:w-16 after:h-1 after:bg-blue-500 after:mx-auto after:mt-2 after:rounded-full">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#1A2238] rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <div className="relative w-full h-52">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-5 flex flex-col gap-3 relative z-10">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-400 text-sm">{project.description}</p>

              <div className="flex justify-between mt-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-lg text-sm font-medium transition"
                >
                  Live Preview
                </a>

                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 hover:bg-gray-800 text-white py-2 px-4 rounded-lg text-sm font-medium transition"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
