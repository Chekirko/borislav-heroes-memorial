import { Inter, Lora } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
});
const lora = Lora({ subsets: ["latin", "cyrillic"], variable: "--font-serif" });

export const metadata = {
  title: "Алея Героїв Борислава",
  description:
    "Меморіальний сайт пам'яті героїв з Бориславської громади, які загинули, захищаючи Україну.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable,
          lora.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
