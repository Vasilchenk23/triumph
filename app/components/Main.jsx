"use client";
import { useState } from "react";
import { Search } from "lucide-react";

const Main = () => {
  const [search, setSearch] = useState("");

  return (
    <main className="bg-gray-800 text-white min-h-screen flex flex-col items-center p-6">
      {/* Пошук */}
      <div className="relative flex items-center w-full max-w-md">
        <input
          type="text"
          placeholder="Пошук..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 pl-10 rounded-full bg-black text-white placeholder-gray-400 focus:ring-2 focus:ring-red-400 outline-none"
        />
        <Search className="absolute left-3 text-gray-400" size={24} />
      </div>
      <div className="w-full max-w-3xl mt-8">
        <img
          src="https://source.unsplash.com/800x400/?nature,abstract"
          alt="Картинка"
          className="w-full rounded-lg shadow-lg object-cover"
        />
      </div>
      <p className="mt-6 text-lg text-gray-300 text-center max-w-2xl">
        Ласкаво просимо на <span className="text-red-400 font-semibold">TRIUMF</span>. Тут ви знайдете найцікавіші новини, ідеї та можливості для змін!
      </p>
    </main>
  );
};

export default Main;
