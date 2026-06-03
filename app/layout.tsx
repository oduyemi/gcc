import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const lato = localFont({
  src: [
    {
      path: "./fonts/Lato/Lato-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Lato/Lato-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Global Crossfire Church UK",
  description:
    "The Global Crossfire Church is an equipping ministry called to train believers to walk in purpose.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${lato.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen font-sans bg-white text-black">
        {children}
      </body>
    </html>
  );
}