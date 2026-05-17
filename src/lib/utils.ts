import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...inputs: unknown[]) { return twMerge(clsx(inputs)); }
export function slugify(value: string) { return value.toLowerCase().normalize("NFD").replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-"); }
