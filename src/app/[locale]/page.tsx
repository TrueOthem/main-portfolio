import { locales } from "../../../navigation";

// Generate static params for all locales
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// Create a client component for the home page content
import HomeClient from "./HomeClient";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }> | { locale: string };
}) {
  // Await params if it's a promise
  const resolvedParams = await params;
  return <HomeClient locale={resolvedParams.locale} data-oid="fd92agc" />;
}
