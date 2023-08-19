"use client"

import { XMarkIcon, Bars4Icon } from "@heroicons/react/24/solid";
import { ConnectKitButton } from "connectkit";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <div className="flex justify-center w-full">
      <nav className="z-10 flex items-center justify-between w-full px-4 pt-5 sm:max-w-xl sm:px-0 md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
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
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars4Icon className="w-6 h-6" />
          )}
        </button>
      </nav>
      <div
        className={`absolute mt-16 flex h-56 w-full flex-col items-center justify-center px-4 py-2.5
  backdrop-blur-md md:hidden ${open == false && "hidden"
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
  )
}
