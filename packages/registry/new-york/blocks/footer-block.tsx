"use client"

import React from "react"
import { cn } from "@/lib/utils"
import { Input } from "@/registry/new-york/ui/input"
import { Button } from "@/registry/new-york/ui/button"

export interface FooterBlockProps extends React.HTMLAttributes<HTMLElement> {}

export function FooterBlock({ className, ...props }: FooterBlockProps) {
  const footerLinks = [
    {
      title: "Product",
      links: [
        { label: "Features", href: "#" },
        { label: "Pricing", href: "#" },
        { label: "Registry", href: "#" },
        { label: "Changelog", href: "#" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", href: "#" },
        { label: "Guides", href: "#" },
        { label: "API Reference", href: "#" },
        { label: "Status", href: "#" }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Contact", href: "#" }
      ]
    }
  ]

  return (
    <footer className={cn("w-full bg-zinc-950 border-t border-zinc-900/60 py-16 text-zinc-400 text-sm", className)} {...props}>
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-zinc-900/60">
          
          {/* Logo & Description Column */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-6 w-6 rounded-md bg-gradient-to-tr from-purple-500 to-indigo-600 shadow-sm" />
              <span className="font-bold text-zinc-100 text-base">Signal UI</span>
            </div>
            <p className="text-zinc-500 text-xs md:text-sm leading-relaxed max-w-xs">
              A premium, motion-native component library for building modern, high-performance SaaS and AI interfaces.
            </p>
            {/* Social Icons */}
            <div className="flex items-center space-x-4 pt-2">
              <a href="#" className="text-zinc-500 hover:text-zinc-300 transition-colors" aria-label="Twitter">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="text-zinc-500 hover:text-zinc-300 transition-colors" aria-label="GitHub">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                </svg>
              </a>
              <a href="#" className="text-zinc-500 hover:text-zinc-300 transition-colors" aria-label="Discord">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.873-.894.077.077 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 0 1 .078.009c.12.099.246.195.373.289a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Dynamic Links Columns */}
          <div className="md:col-span-5 grid grid-cols-3 gap-4">
            {footerLinks.map((section, idx) => (
              <div key={idx} className="space-y-4">
                <h4 className="font-semibold text-zinc-200 text-xs md:text-sm">{section.title}</h4>
                <ul className="space-y-2.5">
                  {section.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <a href={link.href} className="hover:text-zinc-200 transition-colors text-xs">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-semibold text-zinc-200 text-xs md:text-sm">Stay Updated</h4>
            <p className="text-zinc-500 text-xs leading-relaxed">
              Subscribe to our newsletter for the latest component updates and releases.
            </p>
            <div className="flex flex-col gap-2">
              <Input 
                type="email" 
                placeholder="you@example.com" 
                className="bg-zinc-900 border-zinc-800 focus-visible:ring-purple-500 placeholder-zinc-600 h-9" 
              />
              <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white font-medium h-9">
                Subscribe
              </Button>
            </div>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-xs text-zinc-600 gap-4">
          <div>
            &copy; {new Date().getFullYear()} Signal UI. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-zinc-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
