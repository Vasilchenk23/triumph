"use client";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#B2000B] text-white text-center py-6 relative mt-10">
     <Image src="./img/logo.svg" alt="logo" width={200} height={200} className="mx-auto block"/>
      <div className="text-sm text-gray-200">
        <p>© {new Date().getFullYear()} TRIUMF. Всі права захищені.</p>
        <p>
          <a href="/privacy" className="underline hover:text-black">
            Політика конфіденційності
          </a>{" "}
          |{" "}
          <a href="/cookies" className="underline hover:text-black">
            Cookies
          </a>
          {" "}
          {" "}
          |<a href="/contact" className="underline hover:text-black">
            Контакти 
          </a>
        </p>
      </div>

      <div className="flex justify-center gap-6 mt-4">
        <a href="https://invite.viber.com/?g2=AQAoYIiN6UzqplHvn35Vc9eV5lipaCeSUbW3OFNqaqLDINq0G5eDGVVCEL4zA7Gp" className="hover:scale-110 transition-transform">
          <img src="./img/viber.svg" alt="" />
        </a>
        <a href="https://t.me/+KklV1K2ywtY1ZjRi" className="hover:scale-110 transition-transform">
        <img src="./img/telegram.svg" alt="" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
