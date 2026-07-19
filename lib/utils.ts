import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function imgPath(path: string) {
  if (path.startsWith('http')) return path;
  if (!path.startsWith('/')) path = '/' + path;
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ''}${path}`
}
