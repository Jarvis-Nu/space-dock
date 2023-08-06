"use client"

import "@/styles/globals.css"
import { Providers } from "@/context/providers"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"
import Image from "next/image"
import Link from "next/link"
import { ConnectKitButton } from "connectkit"

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
              <div className="relative flex flex-col min-h-screen">
                <div className="w-full h-full">
                  <div className="w-full h-screen bg-[url('/gradient.png')] bg-no-repeat bg-center object-cover bg-cover">
                    <div className="w-full h-full bg-[url('/circles.png')] bg-no-repeat bg-center object-cover bg-cover">
                      <div className="flex justify-center w-full">
                        {/* Navbar */}
                        <nav className="z-10 flex items-center justify-between w-full pt-5 sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
                          <div className="flex items-center space-x-1">
                            <div>
                              <Image src={"/logo.png"} width={50} height={50} alt="Space-Dock logo" />
                            </div>
                            <h2 className="text-xl font-medium text-dark">Space Dock</h2>
                          </div>
                          <div className="items-center hidden space-x-10 md:flex">
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
                        </nav>
                      </div>
                      <div className="flex justify-center flex-1 w-full h-full">{children}</div>
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
