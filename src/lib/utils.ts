import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function themeClass(theme: string, className: string) {
  return theme ? `${theme} ${className}` : className;
}
