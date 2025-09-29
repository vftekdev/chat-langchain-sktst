import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { Hotjar_GoogleAnalytics_Snippet } from "./hotjar_googleanalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VERA Files SEEK | Beta version",
  description: "Search Experience Elevated to Knockout Disinformation: A VERA Files AI powered search assistant to help people interested in fact checking and understanding misinformation trends",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full overflow-hidden">
      <Hotjar_GoogleAnalytics_Snippet />
      <body className="font-helveticaneue h-full overflow-hidden">
        <div className="flex flex-col w-full text-black bg-[#F9F9F9] dark:bg-black h-full">
          <NuqsAdapter>{children}</NuqsAdapter>
        </div>
      </body>
    </html>
  );
}
