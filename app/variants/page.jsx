// app/heroes/[id]/page.jsx

import { heroes } from "@/data/heroes";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, MapPin, Calendar, Shield, Heart } from "lucide-react";
import Image from "next/image";

// Ця функція допомагає Next.js згенерувати сторінки заздалегідь
export async function generateStaticParams() {
  return heroes.map((hero) => ({
    id: hero.id.toString(),
  }));
}

export default async function HeroPage({ params }) {
  const resolvedParams = await params;
  const heroId = parseInt(resolvedParams.id, 10);
  const hero = heroes.find((h) => h.id === heroId);

  if (!hero) {
    notFound();
  }

  return (
    <div className="bg-background min-h-screen">
      {/* Навігаційний хедер */}
      <header className="bg-card/90 backdrop-blur-md sticky top-0 z-10 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-3 text-muted-foreground hover:text-foreground transition-all duration-300 group"
          >
            <div className="p-2 rounded-full bg-muted/50 group-hover:bg-muted transition-colors">
              <ArrowLeft size={18} />
            </div>
            <span className="font-medium">Повернутись до Алеї Героїв</span>
          </Link>
        </div>
      </header>

      {/* Основний контент */}
      <main className="container mx-auto px-4 py-8 md:py-12">
        {/* Герой-секція з великим фото */}
        <div className="relative mb-12">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Фото героя */}
            <div className="lg:col-span-2">
              <div className="sticky top-24">
                <div className="relative aspect-[3/4] w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-border/50">
                  <Image
                    src={hero.photoUrl}
                    alt={`Фото ${hero.name}`}
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                    priority
                  />
                  {/* Градієнт знизу для кращого контрасту */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>

                {/* Меморіальна стрічка */}
                <div className="mt-6 text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-full border border-border/50">
                    <Heart size={16} className="text-red-500" />
                    <span className="text-sm font-medium text-muted-foreground">
                      Пам'ять живе у наших серцях
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Інформація про героя */}
            <div className="lg:col-span-3">
              {/* Основна інформація */}
              <div className="mb-8">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-4 leading-tight">
                  {hero.name}
                </h1>
                <div className="text-2xl md:text-3xl text-muted-foreground font-light mb-6">
                  {hero.lifeDates}
                </div>

                {/* Декоративна лінія */}
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-transparent mb-8"></div>
              </div>

              {/* Картки з деталями */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-card/50 backdrop-blur border border-border/50 rounded-xl p-6 hover:bg-card/70 transition-colors">
                  <div className="flex items-start gap-3">
                    <Calendar className="text-primary mt-1" size={20} />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        Народження
                      </h3>
                      <p className="text-muted-foreground">
                        {hero.dateOfBirth}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card/50 backdrop-blur border border-border/50 rounded-xl p-6 hover:bg-card/70 transition-colors">
                  <div className="flex items-start gap-3">
                    <Calendar className="text-primary mt-1" size={20} />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        Загибель
                      </h3>
                      <p className="text-muted-foreground">
                        {hero.dateOfDeath}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card/50 backdrop-blur border border-border/50 rounded-xl p-6 hover:bg-card/70 transition-colors">
                  <div className="flex items-start gap-3">
                    <MapPin className="text-primary mt-1" size={20} />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        Рідне місто
                      </h3>
                      <p className="text-muted-foreground">
                        {hero.placeOfBirth}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card/50 backdrop-blur border border-border/50 rounded-xl p-6 hover:bg-card/70 transition-colors">
                  <div className="flex items-start gap-3">
                    <Shield className="text-primary mt-1" size={20} />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        Підрозділ
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {hero.place}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Біографія */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card/30 backdrop-blur border border-border/50 rounded-2xl p-8 md:p-12">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
                Життєвий шлях
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-primary to-transparent"></div>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="text-foreground/85 leading-relaxed text-lg whitespace-pre-wrap font-light">
                {hero.biography}
              </div>
            </div>
          </div>
        </div>

        {/* Меморіальна секція */}
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

      {/* Футер */}
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
