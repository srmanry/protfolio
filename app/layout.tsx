import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Md. Srsuman | Premium Digital Portfolio",
  description: "A premium personal portfolio built with modern design, thoughtful execution, and refined digital presentation."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
