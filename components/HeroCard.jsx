// components/HeroCard.jsx
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";

export function HeroCard({ hero }) {
  return (
    // 'group' дозволяє нам керувати дочірніми елементами при наведенні на батьківський
    <Link href={`/heroes/${hero.id}`} className="block group">
      {/*
        Змінюємо колір картки на прозорий, щоб вона зливалася з фоном.
        Рамка (border) буде нашим візуальним роздільником.
        Додаємо transition для плавної зміни тіні при наведенні.
      */}
      <Card className="h-full flex flex-col bg-transparent border-border transition-shadow duration-300 hover:shadow-lg hover:shadow-slate-800/20">
        <CardHeader className="p-0">
          {/*
            ЗМІНА #1: Контейнер для фото.
            - Прибрали aspect-[4/5], щоб уникнути фіксованих пропорцій.
            - Додали фон bg-black/20 на випадок, якщо фото не заповнить весь простір.
          */}
          <div className="relative w-full h-96 bg-black/20 rounded-t-lg overflow-hidden">
            <Image
              src={hero.photoUrl}
              alt={`Фото ${hero.name}`}
              fill
              className={`
                transition-all duration-500 ease-in-out
                /* ЗМІНА #2: Вирішуємо проблему обрізки. */
                object-contain

                /* ЗМІНА #3: Ефект "вигорання". */
                grayscale
                group-hover:grayscale-0
                group-hover:scale-105 /* Додамо легкий зум для динаміки */
              `}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </CardHeader>
        <CardContent className="p-4 flex flex-col flex-grow">
          {/*
            Використовуємо --font-serif, як і планували.
            Колір тексту буде успадковуватися від --card-foreground.
          */}
          <CardTitle className="text-lg font-serif mb-2 group-hover:text-primary transition-colors duration-300">
            {hero.name}
          </CardTitle>
          <div className="flex items-center text-sm text-muted-foreground mt-auto">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{hero.lifeDates}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
