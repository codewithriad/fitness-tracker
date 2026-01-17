"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Clock, Facebook, Linkedin, MapPin, Phone, Twitter, Video } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Textarea } from "../ui/textarea"

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-gray-400 py-16 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Brand & Contact */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="Logo"
                width={150}
                height={50}
                className="object-contain"
              />
            </Link>
            <p className="text-sm leading-relaxed">
              Cum sociis Theme natoque penatibus et magnis dis parturie montes, nascetur ridiculus mus. Curabitur ullamcorper.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gray-500" />
                <span className="text-sm">1-677225-124-44227-84</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-gray-500" />
                <span className="text-sm">84 Main Collins Street</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-gray-500" />
                <span className="text-sm">Mon - Sat 8.00 - 18.00</span>
              </div>
            </div>
          </div>

          {/* Column 2: Latest News */}
          <div className="space-y-6">
            <h3 className="text-white font-bold tracking-wider uppercase">Latest News</h3>
            <div className="space-y-6">
              <div className="space-y-1">
                <Link href="#" className="text-sm font-semibold hover:text-white transition-colors block uppercase">
                  Fitness Class for you
                </Link>
                <p className="text-xs uppercase tracking-widest text-gray-500">October 22, 2017</p>
              </div>
              <div className="border-t border-gray-800 pt-6 space-y-1">
                <Link href="#" className="text-sm font-semibold hover:text-white transition-colors block uppercase">
                  Gym exercises to boost your football
                </Link>
                <p className="text-xs uppercase tracking-widest text-gray-500">October 22, 2017</p>
              </div>
              <div className="border-t border-gray-800 pt-6 space-y-1">
                <Link href="#" className="text-sm font-semibold hover:text-white transition-colors block uppercase">
                  Boost performance.
                </Link>
                <p className="text-xs uppercase tracking-widest text-gray-500">November 22, 2017</p>
              </div>
            </div>
          </div>

          {/* Column 3: Recent Projects */}
          <div className="space-y-6">
            <h3 className="text-white font-bold tracking-wider uppercase">Recent Projects</h3>
            <ul className="space-y-4">
              {["March 2018", "February 2018", "January 2018", "December 2017", "November 2017", "October 2017"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-xs uppercase tracking-widest hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Form */}
          <div className="space-y-6">
            <h3 className="text-white font-bold tracking-wider uppercase">Contact</h3>
            <form className="space-y-4">
              <Input 
                placeholder="Name" 
                className="bg-[#222] border-none text-white focus-visible:ring-1 focus-visible:ring-gray-600 placeholder:text-gray-500"
              />
              <Input 
                type="email" 
                placeholder="E-mail" 
                className="bg-[#222] border-none text-white focus-visible:ring-1 focus-visible:ring-gray-600 placeholder:text-gray-500"
              />
              <Textarea 
                placeholder="Comment"
                className="bg-[#222] border-none text-white focus-visible:ring-1 focus-visible:ring-gray-600 min-h-[100px] placeholder:text-gray-500 resize-none"
              />
              <Button className="bg-[#ff4d29] hover:bg-[#e64525] text-white rounded-none px-6 py-6 group flex items-center gap-0 w-full md:w-auto">
                <span className="text-xs font-bold uppercase tracking-widest">Send Message</span>
                <span className="ml-4 border-l border-white/20 pl-4 group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs uppercase tracking-widest">
            © 2017 Qode Interactive, All Rights Reserved
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs uppercase tracking-widest">Follow us</span>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-4 h-4" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-4 h-4" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-4 h-4" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Video className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
