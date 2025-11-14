"use client";

export default function Hero() {
  return (
    <section
      className="flex flex-col items-center justify-center text-center min-h-screen bg-[#0F1624] text-white px-6"
      id="home"
    >
      <p className="text-gray-400 text-2xl mb-2">I'm a</p>

      <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight">
        Frontend Website <br /> Developer.
      </h1>

      <a
        href="#projects"
        className="mt-8 px-8 py-3 bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600"
      >
        See Projects
      </a>
    </section>
  );
}

