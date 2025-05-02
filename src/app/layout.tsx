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
    <html lang="en" suppressHydrationWarning data-oid="916_ypl">
      <body
        className="min-h-screen flex flex-col"
        suppressHydrationWarning
        data-oid="73tguje"
      >
        <DeviceContextProvider data-oid="l1:-xo0">
          <ScrollProgressBar
            height={3}
            color="var(--primary)"
            data-oid="fj2j6v_"
            key="olk-v1QD"
          />
        </DeviceContextProvider>
        <main
          className="flex-grow grid-container mx-auto px-0 md:px-0 lg:px-0"
          data-oid="mwua_z0"
          key="olk-mr8f"
        >
          <AdvancedPageTransition data-oid="-2u.:xl">
            {children}
          </AdvancedPageTransition>
        </main>
      </body>
    </html>
  );
}
