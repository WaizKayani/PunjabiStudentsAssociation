import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDateISOToHuman(iso: string, opts?: Intl.DateTimeFormatOptions) {
  try {
    return new Intl.DateTimeFormat(undefined, { dateStyle: "medium", timeZone: "UTC", ...opts }).format(
      new Date(iso)
    );
  } catch {
    return iso;
  }
}


