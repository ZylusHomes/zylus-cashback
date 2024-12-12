import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Real Estate Cashback Cooperative",
  description:
    "Empowering your financial Capabilities Through Smart Investments",
  // keywords: [],
  authors: [
    {
      name: "Ayeni Emmanuel",
      // url: ""
    },
  ],
  // icons: {
  //   icon: "../public/smallLogo.png",
  // },
  icons: {
    icon: "../public/smallLogo.png", // Relative to the `public` directory
    shortcut: "../public/smallLogo.png",
    apple: "../public/smallLogo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" type="image/png" href="../public/smallLogo.png" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
