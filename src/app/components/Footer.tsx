export default function Footer() {
  return (
    <footer className="bg-[#0B1320] text-gray-300 py-6 px-6 text-center">
      <p className="text-sm">
        © {new Date().getFullYear()} <span className="text-white font-semibold">BASITCODE</span>.
        All Rights Reserved.
      </p>

      <p className="text-xs mt-2 tracking-wider text-gray-400">
        Built with Next.js & Tailwind CSS 
      </p>
    </footer>
  );
}
