"use client"

import "@/styles/globals.css"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Providers } from "@/context/providers"
import { Bars4Icon, XMarkIcon } from "@heroicons/react/24/solid"
import { ConnectKitButton } from "connectkit"

import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"

// Refactor to allow for dynamic metadata @okhaimie-dev: Currently clashes with server component.
// export const metadata: Metadata = {
//   title: {
//     default: siteConfig.name,
//     template: `%s - ${siteConfig.name}`,
//   },
//   description: siteConfig.description,
//   themeColor: [
//     { media: "(prefers-color-scheme: light)", color: "white" },
//     { media: "(prefers-color-scheme: dark)", color: "black" },
//   ],
//   icons: {
//     icon: "/favicon.ico",
//     shortcut: "/favicon-16x16.png",
//     apple: "/apple-touch-icon.png",
//   },
// }

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Providers>
              <div className="relative flex min-h-screen flex-col">
                <div className="h-full w-full">
                  <div className="min-h-screen w-full bg-[url('/gradient.png')] bg-cover bg-center bg-no-repeat object-cover">
                    <div className="min-h-screen w-full bg-[url('/circles.png')] bg-cover bg-center bg-no-repeat object-cover">
                      <div className="flex w-full justify-center">
                        {/* Navbar */}
                        <nav className="z-10 flex w-full items-center justify-between px-4 pt-5 sm:max-w-xl sm:px-0 md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
                          <div className="flex items-center space-x-1">
                            <div>
                              <Image
                                src={"/logo.png"}
                                width={50}
                                height={50}
                                alt="Space-Dock logo"
                              />
                            </div>
                            <h2 className="text-xl font-medium text-dark">
                              Space Dock
                            </h2>
                          </div>
                          <div className="hidden items-center space-x-10 md:flex">
                            <div className="text-xl font-medium text-dark hover:cursor-pointer">
                              <Link href={"/"}>Mission</Link>
                            </div>
                            <div className="text-xl font-medium text-dark">
                              <Link href={"/"}>Community</Link>
                            </div>
                            <div>
                              <ConnectKitButton showAvatar={true} />
                            </div>
                          </div>
                          <button
                            className="md:hidden"
                            onClick={() => setOpen(!open)}
                          >
                            {open ? (
                              <XMarkIcon className="h-6 w-6" />
                            ) : (
                              <Bars4Icon className="h-6 w-6" />
                            )}
                          </button>
                        </nav>
                        <div
                          className={`absolute mt-16 flex h-56 w-full flex-col items-center justify-center px-4 py-2.5
                        backdrop-blur-md md:hidden ${
                          open == false && "hidden"
                        }`}
                        >
                          <div className="flex flex-col items-center space-y-3">
                            <div className="text-xl font-medium text-dark hover:cursor-pointer">
                              <Link href={"/"}>Mission</Link>
                            </div>
                            <div className="text-xl font-medium text-dark">
                              <Link href={"/"}>Community</Link>
                            </div>
                            <div>
                              <ConnectKitButton showAvatar={true} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-16 flex h-full w-full flex-1 justify-center sm:mt-24 md:mt-36">
                        {children}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Providers>
            <TailwindIndicator />
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
