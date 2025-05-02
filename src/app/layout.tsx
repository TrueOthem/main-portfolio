import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mohamed Adil Al Sabri - Process Development Engineer",
  description:
    "Process Development Engineer specializing in green hydrogen production and manufacturing processes",
};

// Root layout
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
