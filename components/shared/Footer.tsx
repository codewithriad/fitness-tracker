"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, Clock, Facebook, Linkedin, MapPin, Phone, Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Vimeo SVG icon since Lucide doesn't have it
const VimeoIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M22.396 7.158c-.312 4.155-3.054 9.873-8.228 9.873-5.115 0-6.284-4.819-9.222-7.947-1.742-1.854-3.535-.745-3.535-.745 3.301 1.431 4.653 9.257 7.213 9.257 2.14 0 3.393-2.617 3.708-4.707.311-2.091.748-5.388 2.381-5.388 1.446 0 2.312 1.585 2.253 2.505-.188 2.946-2.625 2.723-2.625 2.723 1.151 3.746 4.414 3.141 5.96.47 1.313-2.266 2.454-6.04 2.102-6.042-.35-.001-.849-.001-2.007.412s1.432-1.996 1.432-1.996 0-3.136-2.155-2.031c-3.177 1.625-2.73 6.946-2.73 6.946l.033.224s-1.841-.301-3.235-3.23c-1.394-2.929-1.301-4.946-1.301-4.946s-.11.1-.31.29c-.2.19-.29.41-.35.53-.06.12-.13.31-.18.42-.05.11-.13.25-.19.34-.35.56-.63 1.1-.85 1.63-.09.21-.16.42-.23.63l-.04.14s.01.07.03.1c.02.03.05.05.09.05h.01c.04 0 .09-.01.12-.03.03-.02.06-.06.08-.1 0 0 .15-.22.35-.44.2-.22.46-.43.76-.56.3-.13.62-.16.94-.03s.6.43.83.82c.23.39.4.88.54 1.45.14.57.26 1.25.39 1.94s.37 1.3.69 1.83c.32.53.72.93 1.2 1.16.48.23 1.05.29 1.68.22s1.3-.23 1.96-.54c.66-.31 1.29-.71 1.84-1.22l.14-.14s-.04.04-.12.11c-.08.07-.12.11-.15.13-.03.02-.07.03-.1.03s-.07-.01-.1-.03c-.03-.02-.03-.04-.04-.08l-.05-.2.01-.01" />
  </svg>
)

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-gray-400 py-16 px-4 md:px-8 font-sans">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1: Brand & Contact Info */}
          <div className="space-y-8">
            <Link href="/" className="inline-block transition-opacity hover:opacity-80">
              <Image
                src="/logo.png"
                alt="Logo"
                width={160}
                height={50}
                className="object-contain"
                priority
              />
            </Link>
            <p className="text-sm leading-[1.8] text-gray-400 max-w-xs">
              Cum sociis Theme natoque penatibus et magnis dis parturie montes, nascetur ridiculus mus. Curabitur ullamcorper.
            </p>
            <div className="space-y-5">
              <div className="flex items-center gap-4 group">
                <div className="w-5 flex justify-center">
                  <Phone className="w-4 h-4 text-gray-500 group-hover:text-[#ff4d29] transition-colors" />
                </div>
                <span className="text-[13px] tracking-wide">1-677225-124-44227-84</span>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-5 flex justify-center">
                  <MapPin className="w-4 h-4 text-gray-500 group-hover:text-[#ff4d29] transition-colors" />
                </div>
                <span className="text-[13px] tracking-wide">84 Main Collins Street</span>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-5 flex justify-center">
                  <Clock className="w-4 h-4 text-gray-500 group-hover:text-[#ff4d29] transition-colors" />
                </div>
                <span className="text-[13px] tracking-wide uppercase">Mon - Sat 8.00 - 18.00</span>
              </div>
            </div>
          </div>

          {/* Column 2: Latest News */}
          <div className="space-y-8">
            <h3 className="text-white text-sm font-black tracking-[0.2em] uppercase">Latest News</h3>
            <div className="space-y-0 text-[13px]">
              {[
                { title: "Fitness Class for you", date: "October 22, 2017" },
                { title: "Gym exercises to boost your football", date: "October 22, 2017" },
                { title: "Boost performance.", date: "November 22, 2017" }
              ].map((news, index) => (
                <div key={index} className={`${index !== 0 ? 'border-t border-gray-800/50 mt-6 pt-6' : ''}`}>
                  <Link href="#" className="font-bold text-white hover:text-[#ff4d29] transition-colors block uppercase mb-2 leading-relaxed tracking-tight">
                    {news.title}
                  </Link>
                  <p className="text-[10px] uppercase tracking-[0.15em] text-gray-500 font-bold">{news.date}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Recent Projects */}
          <div className="space-y-8">
            <h3 className="text-white text-sm font-black tracking-[0.2em] uppercase">Recent Projects</h3>
            <ul className="space-y-4">
              {["March 2018", "February 2018", "January 2018", "December 2017", "November 2017", "October 2017"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-[11px] font-bold uppercase tracking-[0.2em] hover:text-white transition-colors text-gray-500">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Form */}
          <div className="space-y-8">
            <h3 className="text-white text-sm font-black tracking-[0.2em] uppercase">Contact</h3>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <Input 
                placeholder="Name" 
                className="bg-[#222] border-none text-white focus-visible:ring-1 focus-visible:ring-[#ff4d29]/50 placeholder:text-gray-600 rounded-none h-11 text-xs"
              />
              <Input 
                type="email" 
                placeholder="E-mail" 
                className="bg-[#222] border-none text-white focus-visible:ring-1 focus-visible:ring-[#ff4d29]/50 placeholder:text-gray-600 rounded-none h-11 text-xs"
              />
              <Textarea 
                placeholder="Comment" 
                className="bg-[#222] border-none text-white focus-visible:ring-1 focus-visible:ring-[#ff4d29]/50 placeholder:text-gray-600 rounded-none min-h-[100px] text-xs py-3 resize-none"
              />
              <Button className="bg-[#ff4d29] hover:bg-[#e64525] text-white rounded-none px-0 py-6 group flex items-center gap-0 w-full relative overflow-hidden">
                <span className="flex-1 text-[10px] font-black uppercase tracking-[0.2em] relative z-10 transition-transform group-hover:translate-x-[-10px]">Send Message</span>
                <span className="w-12 h-full border-l border-white/10 flex items-center justify-center relative z-10 bg-[#ff4d29] group-hover:bg-[#e64525] transition-colors">
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-gray-800/50 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-[0.15em] font-bold text-gray-500">
            © {new Date().getFullYear()} <span className="text-gray-400">Qode Interactive</span>, All Rights Reserved
          </p>
          <div className="flex items-center gap-6">
            <span className="text-[10px] uppercase tracking-[0.2em] font-black text-white/40">Follow us</span>
            <div className="flex items-center gap-5">
              {[
                { icon: Twitter, href: "#" },
                { icon: Facebook, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: VimeoIcon, href: "#" }
              ].map((social, i) => (
                <Link key={i} href={social.href} className="text-gray-400 hover:text-white transition-all transform hover:-translate-y-0.5">
                  <social.icon className="w-3.5 h-3.5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
