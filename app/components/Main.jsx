"use client";
import { useState } from "react";
import { Search } from "lucide-react";

const newsData = [
  {
    id: 1,
    title: "Багатоцільова грошова допомога від 'Право на захист'",
    date: "7 Березня, 2025",
    author: "Анна",
    description: "БФ 'Право на захист' проводить збір даних для участі в програмі багатоцільової грошової допомоги...",
    image: "https://source.unsplash.com/400x250/?money",
  },
  {
    id: 2,
    title: "Зміни в податковому законодавстві",
    date: "5 Березня, 2025",
    author: "Іван",
    description: "Останні оновлення у сфері оподаткування для малого бізнесу...",
    image: "https://source.unsplash.com/400x250/?law",
  },
];

const Main = () => {
  const [search, setSearch] = useState("");

  return (
    <main className="bg-gray-800 text-white min-h-screen flex flex-col items-center p-6">
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
      <div className="mt-10 w-full max-w-3xl">
        <h2 className="text-2xl font-semibold text-white mb-4">Останні новини</h2>
        <div className="grid gap-6">
          {newsData.map((news) => (
            <div key={news.id} className="bg-gray-900 rounded-lg p-4 shadow-lg flex gap-4">
              <img src={news.image} alt={news.title} className="w-24 h-24 object-cover rounded-lg" />
              <div>
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
