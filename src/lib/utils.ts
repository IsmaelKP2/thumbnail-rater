import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getImageUrl(storageId: string): string {
  return `${process.env.NEXT_PUBLIC_CONVEX_URL}/api/storage/${storageId}`
}