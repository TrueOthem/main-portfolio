import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { AdvancedPageTransition } from "@/components/ui/page-transition";
import { ScrollProgressBar } from "@/components/ui/interactive-motion";
import { DeviceContextProvider } from "@/components/device-provider";

export const metadata: Metadata = {
  title: "Mohamed Adil Al Sabri - Process Development Engineer",
  description: "Process Development Engineer specializing in green hydrogen production and manufacturing processes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col" suppressHydrationWarning>
        <ThemeProvider defaultTheme="system">
          <DeviceContextProvider>
            <ScrollProgressBar height={3} color="var(--primary)" />
            <Navbar />
            <main className="flex-grow grid-container mx-auto px-0 md:px-0 lg:px-0">
              <AdvancedPageTransition>
                {children}
              </AdvancedPageTransition>
            </main>
            <Footer />
          </DeviceContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
