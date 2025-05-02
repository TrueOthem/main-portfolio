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
    <html lang="en" suppressHydrationWarning data-oid="o42p:kw">
      <body
        className="min-h-screen flex flex-col"
        suppressHydrationWarning
        data-oid="vr.rtz8"
      >
        <DeviceContextProvider data-oid="re6vxrk">
          <ScrollProgressBar
            height={3}
            color="var(--primary)"
            data-oid="5fm7t91"
          />

          <Navbar data-oid="9idp:k1" />
          <main
            className="flex-grow grid-container mx-auto px-0 md:px-0 lg:px-0"
            data-oid="2-3-itz"
          >
            <AdvancedPageTransition data-oid="r.ufb0z">
              {children}
            </AdvancedPageTransition>
          </main>
        </DeviceContextProvider>
      </body>
    </html>
  );
}
