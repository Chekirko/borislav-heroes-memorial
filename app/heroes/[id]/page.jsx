// app/heroes/[id]/page.jsx

// ВАЖЛИВО: На початку цього файлу НЕ МАЄ бути директиви "use client".
// Цей компонент має залишатися Серверним, щоб мати доступ до `params`.

import { heroes } from "@/data/heroes";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Heart, Flame } from "lucide-react";
import Image from "next/image"; // Імпортуємо Image для фотографії

// Ця функція допомагає Next.js згенерувати сторінки заздалегідь
export async function generateStaticParams() {
  return heroes.map((hero) => ({
    id: hero.id.toString(),
  }));
}

// Компонент залишається `async`, як і вимагають сучасні практики Next.js
export default async function HeroPage({ params }) {
  const resolvedParams = await params;
  const heroId = parseInt(resolvedParams.id, 10);

  const hero = heroes.find((h) => h.id === heroId);

  if (!hero) {
    notFound();
  }

  return (
    <div className="bg-background min-h-screen">
      <header className="bg-card/80 backdrop-blur-md sticky top-0 z-10 border-b border-border">
        <div className="container mx-auto px-4 py-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={16} />
            Повернутись до Алеї Героїв
          </Link>
        </div>
      </header>

      <main className="container mx-auto p-4 md:p-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Ліва колонка для фото */}
          <div className="lg:col-span-1">
            <div className="relative aspect-[4/5] w-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src={hero.photoUrl}
                alt={`Фото ${hero.name}`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority // Додаємо пріоритет для швидшого завантаження основного фото
              />
            </div>

            {/* Форма "Запали свічку" - на десктопі */}
            <div className="mt-8 hidden lg:block">
              <div className="bg-card/60 backdrop-blur border border-border/50 rounded-2xl p-6 shadow-lg">
                <div className="mb-6 text-center">
                  <div className="inline-flex items-center gap-2 mb-3">
                    <Flame className="w-6 h-6 text-yellow-500 animate-pulse" />
                    <h3 className="text-xl font-serif text-foreground">
                      Запали свічку
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Залиш слова пам'яті про героя
                  </p>
                </div>

                <form className="space-y-4">
                  <div>
                    <textarea
                      placeholder='Символічно "запали свічку пам&apos;яті" на цій Алеї: поділись своїми спогадами, історіями та емоціями про Героя. Вислови шану, подяку та скорботу...'
                      rows={4}
                      className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-xl text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Ваше ім'я
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-xl text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                      placeholder="Введіть ваше ім'я"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary/20 to-primary/10 hover:from-primary/30 hover:to-primary/20 border border-primary/30 text-foreground font-medium py-3 px-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 focus:outline-none focus:ring-2 focus:ring-primary/50 group"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <Flame className="w-4 h-4 text-yellow-500 group-hover:scale-110 transition-transform animate-pulse" />
                      <span>Запалити свічку</span>
                    </div>
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Права колонка для інформації */}
          <div className="lg:col-span-2">
            <h1 className="text-4xl lg:text-5xl font-serif text-foreground mb-2">
              {hero.name}
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              {hero.lifeDates}
            </p>

            <div className="space-y-4 text-foreground/90 border-t border-b border-border py-6">
              <div className="flex justify-between">
                <span className="font-semibold text-muted-foreground">
                  Дата народження:
                </span>
                <span>{hero.dateOfBirth}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-muted-foreground">
                  Дата загибелі:
                </span>
                <span>{hero.dateOfDeath}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-muted-foreground">
                  Місце народження:
                </span>
                <span>{hero.placeOfBirth}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-muted-foreground">
                  Підрозділ:
                </span>
                <span className="text-right">{hero.place}</span>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-3xl font-serif text-foreground mb-4">
                Життєвий шлях
              </h2>
              <div className="prose prose-invert max-w-none text-foreground/80 leading-relaxed whitespace-pre-wrap">
                {hero.biography}
              </div>
            </div>

            {/* Список свічок - на десктопі після біографії */}
            <div className="mt-12 hidden lg:block">
              <h3 className="text-2xl font-serif text-foreground mb-6 flex items-center gap-2">
                <Flame className="w-6 h-6 text-yellow-500" />
                Свічки пам'яті
              </h3>
              <div className="space-y-4">
                {hero.candles.map((candle) => (
                  <div
                    key={candle.id}
                    className="bg-card/40 backdrop-blur border border-border/30 rounded-xl p-4"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Flame className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                        <span className="font-medium text-foreground text-sm">
                          {candle.authorName}
                        </span>
                      </div>
                      <time className="text-xs text-muted-foreground">
                        {new Date(candle.date).toLocaleDateString("uk-UA")}
                      </time>
                    </div>
                    <p className="text-foreground/80 text-sm leading-relaxed ml-6">
                      {candle.message}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Мобільна версія - свічки та форма */}
        <div className="lg:hidden mt-8 space-y-8">
          {/* Список свічок на мобільних */}
          <div>
            <h3 className="text-2xl font-serif text-foreground mb-6 flex items-center gap-2">
              <Flame className="w-6 h-6 text-yellow-500" />
              Свічки пам'яті
            </h3>
            <div className="space-y-4">
              {hero.candles.map((candle) => (
                <div
                  key={candle.id}
                  className="bg-card/40 backdrop-blur border border-border/30 rounded-xl p-4"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Flame className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                      <span className="font-medium text-foreground text-sm">
                        {candle.authorName}
                      </span>
                    </div>
                    <time className="text-xs text-muted-foreground">
                      {new Date(candle.date).toLocaleDateString("uk-UA")}
                    </time>
                  </div>
                  <p className="text-foreground/80 text-sm leading-relaxed ml-6">
                    {candle.message}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Форма на мобільних */}
          <div>
            <div className="bg-card/60 backdrop-blur border border-border/50 rounded-2xl p-6 shadow-lg">
              <div className="mb-6 text-center">
                <div className="inline-flex items-center gap-2 mb-3">
                  <Flame className="w-6 h-6 text-yellow-500 animate-pulse" />
                  <h3 className="text-xl font-serif text-foreground">
                    Запали свічку
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Залиш слова пам'яті про героя
                </p>
              </div>

              <form className="space-y-4">
                <div>
                  <textarea
                    placeholder='Символічно "запали свічку пам&apos;яті" на цій Алеї: поділись своїми спогадами, історіями та емоціями про Героя. Вислови шану, подяку та скорботу...'
                    rows={4}
                    className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-xl text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Ваше ім'я
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-xl text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                    placeholder="Введіть ваше ім'я"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary/20 to-primary/10 hover:from-primary/30 hover:to-primary/20 border border-primary/30 text-foreground font-medium py-3 px-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 focus:outline-none focus:ring-2 focus:ring-primary/50 group"
                >
                  <div className="flex items-center justify-center gap-2">
                    <Flame className="w-4 h-4 text-yellow-500 group-hover:scale-110 transition-transform animate-pulse" />
                    <span>Запалити свічку</span>
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-12">
          <div className="text-center py-12 border-t border-border/50">
            <div className="mb-6">
              <div className="inline-flex items-center gap-3 text-2xl font-serif text-foreground">
                <Heart className="text-red-500" size={24} />
                <span>Слава Україні!</span>
                <Heart className="text-red-500" size={24} />
              </div>
            </div>
            <p className="text-lg text-muted-foreground font-light">
              Героям Слава! Пам'ять про наших захисників житиме вічно.
            </p>
          </div>
        </div>
      </main>

      <footer className="border-t border-border bg-card/50 backdrop-blur">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Бориславська міська рада.
              <br className="md:hidden" />
              <span className="hidden md:inline"> </span>
              Пам'ять про героїв живе у наших серцях.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
