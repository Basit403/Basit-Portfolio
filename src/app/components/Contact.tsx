"use client";

import { useState, FormEvent } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget as HTMLFormElement; 
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        setDone(true);
        form.reset();
      } else {
        console.error("Failed to send message");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-[#0F1624] text-white py-20 px-6 md:px-12 lg:px-24"
    >
      <h2 className="text-4xl font-bold text-center text-blue-400 relative mb-16
        after:content-[''] after:block after:w-20 after:h-1 after:bg-blue-500 after:mx-auto after:mt-2 after:rounded-full">
        Contact
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

      
        <div className="space-y-6">
          <h3 className="text-3xl font-semibold text-orange-400">Let's Talk</h3>

          <p className="text-gray-300 leading-relaxed">
            Interested in working together or have a project you&apos;d like to discuss?
            Feel free to reach out using the form, or Have any opportunities? contact me directly.
          </p>

        
          <div className="space-y-4 text-lg lg:mt-10">
            <div className="flex items-center gap-3">
              <img src="/mail.png" alt="Email Icon" className="w-6 h-6" />
              <span className="text-gray-300">basitbashiru8@gmail.com</span>
            </div>

            <div className="flex items-center gap-3">
              <img src="/phone-call.png" alt="Phone Icon" className="w-6 h-6" />
              <span className="text-gray-300">+234 704 780 3676</span>
            </div>
          </div>

        
          <div className="flex gap-6 mt-6 lg:mt-30">
            <a href="https://www.instagram.com/just.aremu/" target="_blank" rel="noopener noreferrer" className="bg-gray-200 hover:bg-orange-500 p-3 rounded-full transition flex items-center justify-center">
              <img 
                src="/video.png" 
                alt="Instagram"
                className="w-9 h-9 " />
            </a>
            <a href="https://github.com/Basit403" target="_blank" rel="noopener noreferrer" className="bg-gray-200 hover:bg-orange-500 p-3 rounded-full transition flex items-center justify-center">
              <img 
                src="/soc.png" 
                alt="GitHub"
                className="w-9 h-9" />
            </a>
            <a href="https://x.com/Aremubaasit" target="_blank" rel="noopener noreferrer" className="bg-gray-200 hover:bg-orange-500 p-3 rounded-full transition flex items-center justify-center">
              <img 
                src="/x.png" 
                alt="Twitter"  
                className="w-9 h-9" />
            </a>
          </div>
        </div>

        
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-[#121b2f] p-8 rounded-2xl shadow-lg"
        >
          <div>
            <label className="block text-sm mb-2">Your Name</label>
            <input
              name="name"
              required
              className="w-full px-4 py-3 rounded bg-[#0B1320] text-white outline-none border border-gray-600 focus:border-orange-500"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Your Email</label>
            <input
              name="email"
              type="email"
              required
              className="w-full px-4 py-3 rounded bg-[#0B1320] text-white outline-none border border-gray-600 focus:border-orange-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Your Message</label>
            <textarea
              name="message"
              rows={5}
              required
              className="w-full px-4 py-3 rounded bg-[#0B1320] text-white outline-none border border-gray-600 focus:border-orange-500"
              placeholder="Write your message..."
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-500 hover:bg-orange-600 transition py-3 rounded font-semibold"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {done && (
            <p className="text-center text-green-400 text-sm mt-2">
              Message sent successfully! I will reply shortly.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
