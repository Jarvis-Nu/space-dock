"use client"

import { ConnectKitButton } from "connectkit";
import Image from "next/image";
import Link from "next/link";

export default function IndexPage() {
  return (
    <div className="w-full h-full">
      <div className="w-full h-screen bg-[url('/gradient.png')]">
        <div className="w-full h-full bg-[url('/circles.png')] bg-no-repeat bg-center object-cover bg-cover">
          <div className="flex justify-center w-full">
            <nav className="flex items-center justify-between w-full max-w-6xl pt-5">
              <div className="w-[225px] h-[40px] relative">
                <Image src={"/space-dock.png"} layout="fill" alt="Space-Dock logo" />
              </div>
              <div className="flex space-x-10">
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
        </div>
      </div>
    </div>
  )
}
