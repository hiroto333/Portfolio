"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import Image from "next/image"
import { Mail, Github, Check } from "lucide-react"

export function Header() {
  const pathname = usePathname()
  const [clickedTab, setClickedTab] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [copiedEmail, setCopiedEmail] = useState(false)

  const navItems = [
    { href: "/about", label: "About" },
    { href: "/products", label: "Products" },
    { href: "/contact", label: "Contact" },
  ]

  const handleTabClick = (href: string) => {
    setClickedTab(href)
    setIsMobileMenuOpen(false)
    setTimeout(() => setClickedTab(null), 200)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleCopyEmail = async (e: React.MouseEvent) => {
    e.preventDefault()
    try {
      await navigator.clipboard.writeText("s266021@wakayama-u.ac.jp")
      setCopiedEmail(true)
      setTimeout(() => setCopiedEmail(false), 2000)
    } catch (err) {
      // フォールバック: テキスト選択
      const textArea = document.createElement("textarea")
      textArea.value = "s266021@wakayama-u.ac.jp"
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand("copy")
      document.body.removeChild(textArea)
      setCopiedEmail(true)
      setTimeout(() => setCopiedEmail(false), 2000)
    }
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (isMobileMenuOpen && !target.closest(".mobile-menu-container")) {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isMobileMenuOpen])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <nav className="flex justify-between items-center">
            {/* Logo - Always links to home */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-gray-200 group-hover:border-black transition-colors duration-300">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Profile"
                  width={40}
                  height={40}
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-xl font-bold text-black group-hover:text-gray-600 transition-colors duration-300">
                Ishida Hiroto
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => handleTabClick(item.href)}
                  className={`relative text-gray-600 hover:text-black transition-all duration-300 py-2 group ${
                    pathname === item.href ? "text-black font-medium" : ""
                  } ${clickedTab === item.href ? "animate-pulse" : ""}`}
                >
                  {item.label}

                  <span
                    className={`absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full ${
                      pathname === item.href ? "w-full" : ""
                    }`}
                  />

                  {clickedTab === item.href && <span className="absolute inset-0 bg-black/5 rounded-md animate-ping" />}
                </Link>
              ))}
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 hover:bg-gray-100 rounded-md transition-colors duration-300 mobile-menu-container"
              aria-label="Toggle mobile menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
                <span
                  className={`w-full h-0.5 bg-black transition-all duration-300 origin-center ${
                    isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-black transition-all duration-300 ${
                    isMobileMenuOpen ? "opacity-0 scale-0" : ""
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-black transition-all duration-300 origin-center ${
                    isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 md:hidden transform transition-all duration-300 ease-out mobile-menu-container ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-gray-200">
                <Image
                  src="/placeholder.svg?height=32&width=32"
                  alt="Profile"
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
              <span className="text-lg font-bold text-black">Menu</span>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              aria-label="Close menu"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <span className="w-4 h-0.5 bg-black rotate-45 absolute" />
                <span className="w-4 h-0.5 bg-black -rotate-45 absolute" />
              </div>
            </button>
          </div>

          <nav className="space-y-2">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => handleTabClick(item.href)}
                className={`block px-4 py-4 rounded-xl text-lg font-medium transition-all duration-300 hover:bg-gray-50 hover:scale-105 hover:shadow-md group ${
                  pathname === item.href ? "bg-black text-white shadow-lg" : "text-gray-700 hover:text-black"
                } ${isMobileMenuOpen ? `animate-slide-in-right` : ""}`}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: "both",
                }}
              >
                <div className="flex items-center justify-between">
                  <span>{item.label}</span>
                  <div
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      pathname === item.href ? "bg-white" : "bg-gray-300 group-hover:bg-black"
                    }`}
                  />
                </div>
              </Link>
            ))}
          </nav>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="text-center">
              <p className="text-sm text-gray-500 mb-4">Let's connect!</p>
              <div className="flex justify-center space-x-4">
                <button
                  onClick={handleCopyEmail}
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 hover:scale-110 relative"
                  title={copiedEmail ? "コピーしました！" : "メールアドレスをコピー"}
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-green-500" /> : <Mail className="w-4 h-4" />}
                </button>
                <a
                  href="https://github.com/hiroto333"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 hover:scale-110"
                  title="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
              {copiedEmail && <p className="text-xs text-green-600 mt-2">メールアドレスをコピーしました！</p>}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 0.4s ease-out;
        }
      `}</style>
    </>
  )
}
