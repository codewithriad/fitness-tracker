"use client"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Product", href: "/product" },
  { name: "Features", href: "/features" },
  { name: "Coach", href: "/coach" },
  { name: "Guides", href: "/guides" },
  { name: "About", href: "/about" },
]

export function Navbar() {
  return (
    <nav className="border-b bg-background sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center px-4 container mx-auto justify-between">
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center">
          <Link href="/">
             <div className="relative h-auto w-auto aspect-[3/1] min-w-[100px] overflow-hidden">
                <Image
                  src="/logo.jpg"
                  alt="FIT TRACK"
                  width={150}
                  height={150}
                  className="object-contain object-left h-full w-auto"
                  priority
                />
             </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" asChild>
                <Link href="/signin">Sign In</Link>
            </Button>
            <Button asChild>
                <Link href="/get-started">Get Started</Link>
            </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-4 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-lg font-medium transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="flex flex-col space-y-2 mt-4">
                    <Button variant="outline" asChild className="w-full justify-start">
                        <Link href="/signin">Sign In</Link>
                    </Button>
                    <Button asChild className="w-full justify-start">
                        <Link href="/get-started">Get Started</Link>
                    </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
