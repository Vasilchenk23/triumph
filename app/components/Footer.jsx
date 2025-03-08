"use client";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-red-700 text-white text-center py-6 relative mt-10">
      <h2 className="text-2xl font-bold mb-2">TRIUMF</h2>

      <div className="text-sm text-gray-200">
        <p>© {new Date().getFullYear()} TRIUMF. Всі права захищені.</p>
        <p>
          <a href="#" className="underline hover:text-black">
            Політика конфіденційності
          </a>{" "}
          |{" "}
          <a href="#" className="underline hover:text-black">
            Умови використання
          </a>
        </p>
      </div>

      <div className="flex justify-center gap-6 mt-4">
        <a href="#" className="hover:scale-110 transition-transform">
          <Facebook size={24} />
        </a>
        <a href="#" className="hover:scale-110 transition-transform">
          <Instagram size={24} />
        </a>
        <a href="#" className="hover:scale-110 transition-transform">
          <Twitter size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
