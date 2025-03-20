"use client";
import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Article = () => {
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchNews = async () => {
      const response = await fetch("/api/news");
      const data = await response.json();
      console.log("Новини з API:", data); 
      setNews(Array.isArray(data) ? data : []);
    };

    fetchNews();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("uk-UA"); 
  };

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
        <div className="flex flex-col gap-6">
          {news
            .filter((n) => n.title.toLowerCase().includes(search.toLowerCase()))
            .map((n) => (
              <div key={n.id} className="p-4 shadow-lg flex flex-col md:flex-row gap-4 border-b">
               <Image
                src={`https://admins-one.vercel.app/${n.img}`} 
                alt={n.title}
                width={300}
                height={200}
                className="object-cover rounded-md w-full md:w-[300px] md:h-[200px]"
              />
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-semibold">{n.title}</h3>
                  <p className="text-gray-400 text-sm">{n.author} - {formatDate(n.date)}</p>
                 
                  <Link href={`/new/${n.id}`}>
  <button className="mt-2 text-red-400 hover:underline">Читати далі</button>
</Link>

                </div>
              </div>
            ))}
        </div>
      </div>
    </main>
  );
};

export default Article;
