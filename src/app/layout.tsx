import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ziua Îndrăgostiților",
  description:
    "Inimioară puzzle cu pozele noastre",
  keywords: [
    "poze inimioara",
    "joc dragut romantic",
    "poze puzzle",
    "surpriza",
    "joc de cuplu",
    "ziua intragostitilor",
    "joc",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
