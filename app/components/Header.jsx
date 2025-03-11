"use client";
import { useState, useEffect } from "react";
import { Menu, X, Search } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentDateTime, setCurrentDateTime] = useState("");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    document.body.classList.add("bg-gray-900", "text-white");
    return () => {
      document.body.classList.remove("bg-gray-900", "text-white");
    };
  }, []);

  useEffect(() => {
    const updateDateTime = () => {
      const date = new Date();
      const formattedDate = date.toLocaleDateString("ru-RU", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
      const formattedTime = date.toLocaleTimeString("ru-RU", {
        hour: "2-digit",
        minute: "2-digit",
      });
      setCurrentDateTime(`${formattedDate}, ${formattedTime}`);
    };

    updateDateTime();
    const intervalId = setInterval(updateDateTime, 60000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=7929d10f27b24230b62173235251103&q=Kharkiv&lang=ru`
        );
        if (!response.ok) {
          throw new Error("Ошибка при получении данных о погоде");
        }
        const data = await response.json();
        setWeather({
          icon: data.current.condition.icon,
          description: data.current.condition.text,
          temperature: Math.round(data.current.temp_c),
        });
      } catch (error) {
        console.error("Ошибка загрузки погоды:", error);
      }
    };

    fetchWeather();
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex justify-between items-center p-4 bg-[#B2000B] text-white shadow-lg relative z-50">
      <div className="flex items-center justify-between w-[30%] md:w-[20%]">
        <div className="md:hidden">
          <Image src="/img/logo.svg" alt="Logo" width={500} height={70} />
        </div>
        <div className="hidden md:flex flex-row items-center gap-4">
          <div className="text-lg font-bold">{currentDateTime}</div>
          {weather && (
            <div className="flex items-center gap-2 text-sm">
              <img
                src={`https:${weather.icon}`}
                alt={weather.description}
                width={40}
                height={40}
              />
              <span>{weather.temperature}°C</span>
            </div>
          )}
        </div>
      </div>
      <div className="flex w-[40%] justify-between items-center">
        <div className="relative w-full md:block hidden">
          <input
            type="text"
            placeholder="Поиск..."
            className="px-4 py-2 rounded-[25px] w-full h-[48px] text-white bg-[#77040B] outline-none"
          />
          <Search
            color="white"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black"
            size={20}
          />
        </div>
        <button
  className="p-2 z-50 ml-4 md:ml-0 absolute right-0 md:relative"
  onClick={toggleMenu}
  aria-label="Toggle menu"
>
  {isOpen ? (
    <X color="white" size={28} />
  ) : (
    <Menu color="white" size={28} />
  )}
</button>

      </div>
      <div
        className={`fixed top-0 right-0 h-full ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 bg-[#B2000B] text-white shadow-lg md:w-64 w-full`}
      >
        <button
          className="absolute top-4 right-4 p-2 text-white"
          onClick={toggleMenu}
          aria-label="Close menu"
        >
          <X size={28} />
        </button>
        <nav className="flex flex-col items-start mt-16 space-y-4 px-6">
          <Link href="/contacts" className="px-4 py-2 hover:text-[#EEE3C1]">
            {">"} Контакты
          </Link>
          <Link
            href="/financial-aid"
            className="px-4 py-2 hover:text-[#EEE3C1]"
          >
            {">"} Финансовая помощь
          </Link>
          <Link
            href="/humanitarian-aid"
            className="px-4 py-2 hover:text-[#EEE3C1]"
          >
            {">"} Гуманитарная помощь
          </Link>
          <Link href="/news" className="px-4 py-2 hover:text-[#EEE3C1]">
            {">"} Новости
          </Link>
          <Link href="/health" className="px-4 py-2 hover:text-[#EEE3C1]">
            {">"} Здоровье
          </Link>
          <Link href="/children" className="px-4 py-2 hover:text-[#EEE3C1]">
            {">"} Детям
          </Link>
          <Link href="/gifts" className="px-4 py-2 hover:text-[#EEE3C1]">
            {">"} Подарки
          </Link>
          <Link href="/pensioners" className="px-4 py-2 hover:text-[#EEE3C1]">
            {">"} Пенсионерам
          </Link>
          <Link href="/evacuation" className="px-4 py-2 hover:text-[#EEE3C1]">
            {">"} Эвакуация
          </Link>
          <Link href="/about" className="px-4 py-2 hover:text-[#EEE3C1]">
            {">"} О нас
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
