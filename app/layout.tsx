import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import QueryProvider from "./queryProvider";

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
  title: {
    default: "LG Boxing | რუსთავი ბოქსი | რუსთავში კრივი",
    template: `%s | LG Boxing`,
  },
  description:
    "LG Boxing - საუკეთესო ბოქსი რუსთავში. პროფესიონალური ბოქსის გაკვეთილები ბავშვებისთვის და მოზარდებისთვის.",
  keywords: [
    "რუსთავი ბოქსი",
    "რუსთავში კრივი",
    "LG Boxing",
    "ბოქსის დარბაზი რუსთავი",
    "პროფესიონალური ბოქსი",
  ],
  metadataBase: new URL("https://lgboxing.art"),
  openGraph: {
    title: "LG Boxing | რუსთავი ბოქსი | რუსთავში კრივი",
    description:
      "LG Boxing - საუკეთესო ბოქსი რუსთავში. პროფესიონალური ბოქსის გაკვეთილები ბავშვებისთვის და მოზარდებისთვის.",
    url: "https://lgboxing.art",
    type: "website",
    images: [
      {
        url: "https://lgboxing.art/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LG Boxing Rustavi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LG Boxing | რუსთავი ბოქსი | რუსთავში კრივი",
    description:
      "LG Boxing - საუკეთესო ბოქსი რუსთავში. პროფესიონალური ბოქსის გაკვეთილები ბავშვებისთვის და მოზარდებისთვის.",
    images: ["https://lgboxing.art/assets/og-image.jpg"],
  },
  icons: [
    {
      url: "/assets/JG-FREE.png",
      href: "/assets/JG-FREE.png",
    },
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const messages = await getMessages();
  return (
    <NextIntlClientProvider messages={messages}>
      <html lang="ka"> 
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <QueryProvider>{children}</QueryProvider>
        </body>
      </html>
    </NextIntlClientProvider>
  );
}
