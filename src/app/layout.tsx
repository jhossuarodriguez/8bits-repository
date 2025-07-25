import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const PRESS_START_2P = localFont({
  src: './fonts/press-start-2p-latin-400-normal.woff2',
  display: 'swap',
  variable: '--font-press-start-2p',
  weight: '400',
  style: 'normal',
  preload: true,
  fallback: ['Arial', 'Helvetica', 'sans-serif'],
})

export const metadata: Metadata = {
  title: "Portfolio - Jhossua",
  description: "Portfolio estilo Pokemon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={PRESS_START_2P.variable}>
      <body
        className={`${PRESS_START_2P.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
