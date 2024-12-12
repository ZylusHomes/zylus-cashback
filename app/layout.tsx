import type { Metadata } from "next";
import localFont from "next/font/local";
import Head from "next/head";
import "./globals.css";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="./smallLogo.png" />{" "}
        <title>Real Estate Cashback Cooperative</title>
        <link rel="icon" href="./smallLogo.png" />
        <link rel="icon" type="image/png" href="./smallLogo.png" />
        <link rel="icon" type="image/svg+xml" href="./smallLogo.png" />
        {/* Update the path to your favicon */}
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
