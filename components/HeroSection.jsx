// components/HeroSection.jsx

"use client";

import { Flame, ArrowDown } from "lucide-react";
import ParticlesBackground from "@/components/ParticlesBackground";

const HeroSection = () => {
  return (
    <section
      className="relative h-screen flex flex-col items-center justify-center text-center text-white overflow-hidden" // Додано overflow-hidden для надійності
      style={{
        // ОНОВЛЕНО: Тепер це багатошаровий фон.
        // Перший шар - напівпрозорий чорний градієнт (наше затемнення).
        // Другий шар - наше фонове зображення.
        backgroundImage: `
          linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
          url('/images/1.jpg')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* ВИДАЛЕНО: Окремий div для затемнення більше не потрібен. */}
      {/* <div className="absolute inset-0 bg-black/60 z-10"></div> */}

      {/* Частинки залишаються на своєму місці. Вони будуть над фоном. */}
      <ParticlesBackground />

      {/* Весь UI тепер має бути на рівні z-10, щоб бути над частинками та фоном. */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full w-full">
        {/* Назва сайту в куті */}
        <div className="absolute top-0 left-0 p-4 md:p-8 flex items-center space-x-2">
          <Flame className="text-white/70 h-6 w-6" />
          <h1 className="text-xl font-semibold text-white/90">
            Алея Героїв Борислава
          </h1>
        </div>

        {/* Основний контент */}
        <div className="p-4">
          <h2
            className="text-5xl md:text-7xl font-serif mb-4"
            style={{ textShadow: "0 2px 10px rgba(0,0,0,0.7)" }}
          >
            Вічна Пам'ять Героям
          </h2>
          <p
            className="text-lg md:text-xl text-white/80"
            style={{ textShadow: "0 1px 5px rgba(0,0,0,0.7)" }}
          >
            Меморіал присвячений тим, хто віддав життя за нашу свободу.
          </p>
        </div>

        {/* Стрілка для скролу вниз */}
        <div className="absolute bottom-10">
          <a
            href="#content"
            className="flex flex-col items-center text-white/70 hover:text-white transition-colors"
          >
            <span className="mb-1 text-sm">Переглянути меморіал</span>
            <ArrowDown className="h-6 w-6 animate-pulse" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
