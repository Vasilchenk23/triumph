"use client";
import { useState } from "react";
import { Search } from "lucide-react";
import Image from "next/image";

const newsData = [
  {
    id: 1,
    title: "Багатоцільова грошова допомога від 'Право на захист'",
    date: "7 Березня, 2025",
    author: "Анна",
    description: "БФ 'Право на захист' проводить збір даних для участі в програмі багатоцільової грошової допомоги...",
    image: "/img/image1.png", 
  },
  {
    id: 2,
    title: "Зміни в податковому законодавстві",
    date: "5 Березня, 2025",
    author: "Іван",
    description: "Останні оновлення у сфері оподаткування для малого бізнесу...",
    image: "/img/image.png", 
  },
  {
    id: 3,
    title: "Багатоцільова грошова допомога від 'Право на захист'",
    date: "7 Березня, 2025",
    author: "Анна",
    description: "БФ 'Право на захист' проводить збір даних для участі в програмі багатоцільової грошової допомоги...",
    image: "/img/image.png", 
  },
];

const Main = () => {
  const [search, setSearch] = useState("");

  return (
    <main className="bg-[#0A0A0A] text-white min-h-screen flex flex-col items-center p-6">
      <div className="relative flex items-center w-full max-w-md mb-10">
        <input
          type="text"
          placeholder="Пошук..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 pl-10 rounded-full bg-black text-white placeholder-gray-400 focus:ring-2 focus:ring-red-400 outline-none"
        />
        <Search className="absolute left-3 text-gray-400" size={24} />
      </div>
      <div className="w-full max-w-3xl">
        <h2 className="text-2xl font-semibold text-center border-b text-white mb-4">Останні новини</h2>
        <div className="flex flex-col gap-6">
          {newsData.map((news) => (
            <div
              key={news.id}
              className="p-4 shadow-lg flex flex-col md:flex-row gap-4 border-b"
            >
              <Image
                src={news.image}
                alt={news.title}
                width={300}
                height={200} 
                className="object-cover rounded-md w-full md:w-[300px] md:h-[200px]" 
              />
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold">{news.title}</h3>
                <p className="text-gray-400 text-sm">
                  {news.author} - {news.date}
                </p>
                <p className="text-gray-300 mt-2 text-sm">{news.description}</p>
                <button className="mt-2 text-red-400 hover:underline">Читати далі</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Main;
