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
                  <div className="w-full h-screen bg-[url('/gradient.png')]">
                    <div className="w-full h-full bg-[url('/circles.png')] bg-no-repeat bg-center object-cover bg-cover">
                      <div className="flex justify-center w-full">
                        <nav className="flex items-center justify-between w-full max-w-6xl pt-5">
                          <div className="w-[225px] h-[40px] relative">
                            <Image src={"/space-dock.png"} layout="fill" alt="Space-Dock logo" />
                          </div>
                          <div className="flex items-center space-x-10">
                            <div className="text-xl font-medium text-dark">
                              <Link href={"/"}>Mission</Link>
                            </div>
                            <div className="text-xl font-medium text-dark">
                              <Link href={"/"}>Community</Link>
                            </div>
                            <div>
                              <ConnectKitButton />
                            </div>
                          </div>
                        </nav>
                      </div>
                      <div className="flex justify-center w-full h-full">{children}</div>
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
