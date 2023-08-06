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

export const projects = [
  {
    key: 1,
    avatar: "/card_image.png",
    name: "Trender",
    description: "Building the next generation of public funded projects.",
    numberOfAttestations: 23
  },
  {
    key: 2,
    avatar: "/card_image.png",
    name: "Trender",
    description: "Building the next generation of public funded projects.",
    numberOfAttestations: 23
  },
  {
    key: 3,
    avatar: "/card_image.png",
    name: "Trender",
    description: "Building the next generation of public funded projects.",
    numberOfAttestations: 23
  },
  {
    key: 4,
    avatar: "/card_image.png",
    name: "Trender",
    description: "Building the next generation of public funded projects.",
    numberOfAttestations: 23
  },
  {
    key: 5,
    avatar: "/card_image.png",
    name: "Trender",
    description: "Building the next generation of public funded projects.",
    numberOfAttestations: 23
  },
  {
    key: 6,
    avatar: "/card_image.png",
    name: "Trender",
    description: "Building the next generation of public funded projects.",
    numberOfAttestations: 23
  },
  {
    key: 7,
    avatar: "/card_image.png",
    name: "Trender",
    description: "Building the next generation of public funded projects.",
    numberOfAttestations: 23
  },
  {
    key: 8,
    avatar: "/card_image.png",
    name: "Trender",
    description: "Building the next generation of public funded projects.",
    numberOfAttestations: 23
  },
]

export function truncateString(
  inputString: string,
  maxLength: number
): string {
  if (inputString.length <= maxLength) {
    return inputString
  }

  const truncatedString = inputString.slice(0, maxLength)
  return `${truncatedString}...`
}
