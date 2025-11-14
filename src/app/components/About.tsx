"use client";

export default function About() {
  return (
    <div
      id="about"
      className="scroll-mt-32 bg-[#0F1624] text-white py-8 md:py-12 lg:py-16 px-6 flex flex-col items-center justify-center"
    >
      <h2 className="mb-10 text-4xl font-bold mb-4 text-center text-blue-400 relative after:content-[''] after:block after:w-16 after:h-1 after:bg-blue-500 after:mx-auto after:mt-2 after:rounded-full">
        About Me
      </h2>

      <p className="text-center text-lg max-w-2xl leading-relaxed text-gray-300 mb-8">
        My name is <span className="text-white font-semibold">Bashiru Ayomide Basit</span>.
        I'm a passionate frontend web developer dedicated to building clean, responsive,
        and visually appealing user interfaces. I enjoy turning ideas into real digital
        experiences using modern technologies like React, Next.js, and Tailwind CSS.
        My goal is to create websites that not only look good but also feel smooth and
        perform seamlessly across all devices.
      </p>

      <a
        href="#contact"
        className="bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600"
      >
        Hire Me
      </a>
    </div>
  );
}
