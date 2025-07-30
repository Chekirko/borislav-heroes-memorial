// app/page.jsx

"use client";

import { useState, useMemo } from "react";
import { heroes } from "@/data/heroes";
import { HeroCard } from "@/components/HeroCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// ЗМІНА: Імпорт без фігурних дужок, оскільки тепер це default export
import HeroSection from "@/components/HeroSection";

export default function HomePage() {
  const [filterYear, setFilterYear] = useState("all");
  const [filterPlace, setFilterPlace] = useState("all");

  const uniqueYears = useMemo(
    () => [
      "all",
      ...Array.from(new Set(heroes.map((h) => h.yearOfDeath.toString()))).sort(
        (a, b) => b.localeCompare(a)
      ),
    ],
    []
  );
  const uniquePlaces = useMemo(
    () => ["all", ...Array.from(new Set(heroes.map((h) => h.placeOfBirth)))],
    []
  );

  const filteredHeroes = heroes.filter((hero) => {
    const yearMatch =
      filterYear === "all" || hero.yearOfDeath.toString() === filterYear;
    const placeMatch =
      filterPlace === "all" || hero.placeOfBirth === filterPlace;
    return yearMatch && placeMatch;
  });

  return (
    <div className="bg-background min-h-screen">
      <HeroSection />

      <main id="content" className="container mx-auto p-4 md:p-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8 p-4 bg-card rounded-lg border border-border">
          <div className="flex-1">
            <Select value={filterYear} onValueChange={setFilterYear}>
              <SelectTrigger>
                <SelectValue placeholder="Сортувати за роком загибелі" />
              </SelectTrigger>
              <SelectContent>
                {uniqueYears.map((year) => (
                  <SelectItem key={year} value={year}>
                    {year === "all" ? "Всі роки" : `Рік загибелі: ${year}`}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex-1">
            <Select value={filterPlace} onValueChange={setFilterPlace}>
              <SelectTrigger>
                <SelectValue placeholder="Сортувати за місцем народження" />
              </SelectTrigger>
              <SelectContent>
                {uniquePlaces.map((place) => (
                  <SelectItem key={place} value={place}>
                    {place === "all" ? "Всі місця" : place}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {filteredHeroes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredHeroes.map((hero) => (
              <HeroCard key={hero.id} hero={hero} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-muted-foreground">
            <p>Героїв за обраними фільтрами не знайдено.</p>
          </div>
        )}
      </main>

      <footer className="text-center py-6 border-t border-border bg-card">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Бориславська міська рада. Всі права
          захищено.
        </p>
      </footer>
    </div>
  );
}
