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
  metadataBase: new URL("https://globalcrossfirechurch.org"),

  title: {
    default: "Global Crossfire Church UK | Pentecostal Church in Margate, Kent",
    template: "%s | Global Crossfire Church UK",
  },

  description:
    "Global Crossfire Church UK is a welcoming Pentecostal church in Margate, Kent. Join us every Sunday for passionate worship, biblical teaching, prayer, discipleship, youth ministry, family fellowship, and life-transforming encounters with Jesus Christ.",

    keywords: [
      "Global Crossfire Church",
      "Global Crossfire Church UK",
      "Church in Margate",
      "Churches in Margate",
      "Churches in Kent",
      "Pentecostal Church UK",
      "Pentecostal Church Margate",
      "Christian Church Kent",
      "Bible Believing Church",
      "Spirit Filled Church",
      "Sunday Worship",
      "Prayer Meetings",
      "Family Church",
      "Christian Fellowship",
      "Youth Ministry",
      "Bible Study",
      "Church CT9 1RP",
      "United Kingdom Church",
  ],

  authors: [
    {
      name: "Global Crossfire Church UK | Pentecostal Church in Margate, Kent",
    },
  ],

  creator: "Global Crossfire Church UK | Pentecostal Church in Margate, Kent",

  category: "Religion",

  applicationName: "Global Crossfire Church UK | Pentecostal Church in Margate, Kent",

  publisher: "Global Crossfire Church UK",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Global Crossfire Church UK | Pentecostal Church in Margate, Kent",
    description:
      "Global Crossfire Church UK is a welcoming Pentecostal church in Margate, Kent. Join us every Sunday for passionate worship, biblical teaching, prayer, discipleship, youth ministry, family fellowship, and life-transforming encounters with Jesus Christ.",
    url: "https://globalcrossfirechurch.org",
    siteName: "Global Crossfire Church UK | Pentecostal Church in Margate, Kent",
    locale: "en_GB",
    type: "website",

    images: [
      {
        url: "/logo512.png",
        width: 512,
        height: 512,
        alt: "Global Crossfire Church UK | Pentecostal Church in Margate, Kent",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Global Crossfire Church UK | Pentecostal Church in Margate, Kent",
    description:
      "Global Crossfire Church UK is a welcoming Pentecostal church in Margate, Kent. Join us every Sunday for passionate worship, biblical teaching, prayer, discipleship, youth ministry, family fellowship, and life-transforming encounters with Jesus Christ.",
    images: ["/logo512.png"],
  },

  manifest: "/site.webmanifest",

  icons: {
    icon: [
      {
        url: "/favicon16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon.png",
        sizes: "48x48",
        type: "image/png",
      },
    ],

    shortcut: ["/favicon.png"],

    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    
    other: [
      {
        rel: "icon",
        url: "/logo192.png",
      },
      {
        rel: "icon",
        url: "/logo512.png",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  
    googleBot: {
      index: true,
      follow: true,
  
      "max-image-preview": "large",
  
      "max-video-preview": -1,
  
      "max-snippet": -1,
    },
  },
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