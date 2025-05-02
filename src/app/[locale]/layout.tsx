import { notFound } from "next/navigation";
import { locales } from "../../../navigation";

// Import the global CSS
import "../globals.css";

// Import components
import Navbar from "@/components/navbar";
import { AdvancedPageTransition } from "@/components/ui/page-transition";
import { ScrollProgressBar } from "@/components/ui/interactive-motion";
import { DeviceContextProvider } from "@/components/device-provider";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }> | { locale: string };
}) {
  // Get locale from params - await if it's a promise
  const resolvedParams = await params;
  const locale = resolvedParams.locale;

  // Validate that the incoming locale parameter is valid
  const isValidLocale = locales.includes(locale as any);
  if (!isValidLocale) notFound();

  // Get direction based on locale
  const direction = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={direction} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col" suppressHydrationWarning>
        <DeviceContextProvider>
          <ScrollProgressBar height={3} color="var(--primary)" />

          <Navbar />
          <main className="flex-grow grid-container mx-auto px-0 md:px-0 lg:px-0">
            <AdvancedPageTransition>{children}</AdvancedPageTransition>
          </main>
        </DeviceContextProvider>
      </body>
    </html>
  );
}
