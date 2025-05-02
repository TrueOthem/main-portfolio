import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import { AdvancedPageTransition } from "@/components/ui/page-transition";
import { ScrollProgressBar } from "@/components/ui/interactive-motion";
import { DeviceContextProvider } from "@/components/device-provider";

export const metadata: Metadata = {
  title: "Mohamed Adil Al Sabri - Process Development Engineer",
  description:
    "Process Development Engineer specializing in green hydrogen production and manufacturing processes",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning data-oid="bznxvnl">
      <body
        className="min-h-screen flex flex-col"
        suppressHydrationWarning
        data-oid="2zx_3vi"
      >
        <DeviceContextProvider data-oid="eu_l7kh">
          <ScrollProgressBar
            height={3}
            color="var(--primary)"
            data-oid="9j7d745"
          />

          <Navbar data-oid="nph6tjt" />
          <main
            className="flex-grow grid-container mx-auto px-0 md:px-0 lg:px-0"
            data-oid="rm1kv5t"
          >
            <AdvancedPageTransition data-oid="wqaf-3f">
              {children}
            </AdvancedPageTransition>
          </main>
        </DeviceContextProvider>
      </body>
    </html>
  );
}
