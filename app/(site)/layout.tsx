import type { Metadata } from "next";
import "../globals.css";
import { Header } from "@/src/components/Header";

export const metadata: Metadata = {
  title: "Artigo 227",
  description: "Transformando Vidas, Construindo Futuros",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="antialiased">
        <Header />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
