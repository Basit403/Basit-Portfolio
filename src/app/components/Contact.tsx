"use client";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#0F1624] text-white py-16 px-6 flex flex-col items-center"
    >
      <h2 className="text-4xl font-bold mb-6 text-blue-400 text-center relative
      after:content-[''] after:block after:w-16 after:h-1 after:bg-blue-500 after:mx-auto after:mt-2 after:rounded-full">
        Contact Me
      </h2>

      <p className="text-gray-300 max-w-xl text-center leading-relaxed mb-10">
        Have a project in mind, want to collaborate, or need a frontend developer?
        Feel free to reach out. I’m always open to new opportunities.
      </p>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center mt-4">
        <a
          href=""
          className="px-6 py-3 bg-orange-500 rounded font-semibold hover:bg-orange-600 transition"
        >
          Send Email
        </a>

        <a
          href=""
          target="_blank"
          className="px-6 py-3 border border-orange-500 rounded font-semibold hover:bg-orange-500 hover:text-white transition"
        >
          Send Email
        </a>
      </div>
    </section>
  );
}
