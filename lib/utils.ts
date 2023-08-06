import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const users = [
  {
    key: 1,
    icon: "/avatar-one.png",
  },
  {
    key: 2,
    icon: "/avatar-two.png",
  },
  {
    key: 3,
    icon: "/avatar-three.png",
  },
  {
    key: 4,
    icon: "/avatar-one.png",
  },
  {
    key: 5,
    icon: "/avatar-two.png",
  },
  {
    key: 6,
    icon: "/avatar-three.png",
  },
]
