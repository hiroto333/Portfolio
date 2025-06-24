"use client"

import type React from "react"

import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export default function TopPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)
  const [clickEffects, setClickEffects] = useState<Array<{ x: number; y: number; id: number; color: string }>>([])

  useEffect(() => {
    setIsLoaded(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const handleClick = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const id = Date.now()

    const colors = [
      "from-blue-400 to-purple-500",
      "from-pink-400 to-red-500",
      "from-yellow-400 to-orange-500",
      "from-green-400 to-blue-500",
      "from-purple-400 to-pink-500",
      "from-indigo-400 to-purple-500",
    ]

    // 複数の粒子を放射状に生成
    const particles = Array.from({ length: 8 }, (_, i) => {
      const angle = i * 45 * (Math.PI / 180) // 45度ずつ
      const distance = 25 + Math.random() * 15
      return {
        x: x + Math.cos(angle) * distance,
        y: y + Math.sin(angle) * distance,
        id: id + i,
        color: colors[Math.floor(Math.random() * colors.length)],
      }
    })

    setClickEffects(particles)
    setTimeout(() => setClickEffects([]), 800)
  }

  const catchphrases = [
    "技術で社会に価値を届ける",
    "ユーザー視点で課題解決",
    "チームで成果を生み出す力",
    "技術とビジネスの架け橋",
  ]

  const [currentPhrase, setCurrentPhrase] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % catchphrases.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none will-change-transform">
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full opacity-20 blur-3xl transition-transform duration-1000 ease-out will-change-transform"
          style={{
            transform: `translate3d(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px, 0)`,
            left: "10%",
            top: "20%",
          }}
        />
        <div
          className="absolute w-80 h-80 bg-gradient-to-r from-pink-100 to-yellow-100 rounded-full opacity-20 blur-3xl transition-transform duration-1000 ease-out will-change-transform"
          style={{
            transform: `translate3d(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px, 0)`,
            right: "10%",
            bottom: "20%",
          }}
        />
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div
            className={`mb-8 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="relative w-32 h-32 mx-auto mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full animate-pulse" />
              <img
                src="/placeholder.svg?height=128&width=128"
                alt="石田大翔のプロフィール写真"
                className="relative w-full h-full rounded-full object-cover border-4 border-white shadow-2xl hover:scale-110 transition-transform duration-500 will-change-transform"
                loading="eager"
              />
            </div>
          </div>

          {/* Main Content */}
          <div
            className={`transition-all duration-1000 delay-300 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h1 className="text-6xl md:text-8xl font-bold text-black mb-6 relative">石田 大翔</h1>

            <div className="h-16 mb-8 flex items-center justify-center">
              <p
                className="text-2xl md:text-3xl font-medium text-gray-700 transition-all duration-500"
                aria-live="polite"
                aria-atomic="true"
              >
                {catchphrases[currentPhrase]}
              </p>
            </div>

            <p className="text-xl text-gray-600 mb-4">Graduate Student & Aspiring Engineer</p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed">
              和歌山大学大学院システム工学研究科修士1年。防災システムの研究とハッカソン・ビジネスコンテストでの受賞経験を通じて、
              <br />
              <span className="font-medium text-gray-600">「技術を軸に、人や社会に価値を届けられるエンジニア」</span>
              を目指しています。
            </p>
          </div>

          {/* Action Buttons */}
          <div
            className={`flex flex-col sm:flex-row justify-center gap-4 transition-all duration-1000 delay-500 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <Link href="/about" className="group">
              <Button
                size="lg"
                className="bg-black text-white hover:bg-gray-800 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group w-full sm:w-auto focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                onClick={handleClick}
                aria-label="自己紹介ページに移動"
              >
                <span className="relative z-10 flex items-center justify-center">
                  自己紹介を見る
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>

                {/* Click Effects */}
                {clickEffects.map((effect) => (
                  <div
                    key={effect.id}
                    className="absolute pointer-events-none"
                    style={{
                      left: effect.x - 4,
                      top: effect.y - 4,
                    }}
                  >
                    <div className={`w-2 h-2 bg-gradient-to-r ${effect.color} rounded-full particle-burst`} />
                    <div
                      className={`absolute inset-0 w-1 h-1 bg-white rounded-full sparkle`}
                      style={{ animationDelay: "0.2s" }}
                    />
                  </div>
                ))}
              </Button>
            </Link>

            <Link href="/products" className="group">
              <Button
                variant="outline"
                size="lg"
                className="bg-white text-black border-2 border-black hover:bg-gray-50 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group w-full sm:w-auto focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                onClick={handleClick}
                aria-label="作品一覧ページに移動"
              >
                <span className="relative z-10 flex items-center justify-center">
                  作品を見る
                  <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
                </span>

                {/* Click Effects */}
                {clickEffects.map((effect) => (
                  <div
                    key={effect.id}
                    className="absolute pointer-events-none"
                    style={{
                      left: effect.x - 4,
                      top: effect.y - 4,
                    }}
                  >
                    <div className={`w-2 h-2 bg-gradient-to-r ${effect.color} rounded-full particle-burst`} />
                    <div
                      className={`absolute inset-0 w-1 h-1 bg-white rounded-full sparkle`}
                      style={{ animationDelay: "0.2s" }}
                    />
                  </div>
                ))}
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes particle-burst {
          0% {
            transform: scale(0) rotate(0deg) translate(0, 0);
            opacity: 1;
          }
          50% {
            transform: scale(1.2) rotate(180deg) translate(10px, -10px);
            opacity: 0.8;
          }
          100% {
            transform: scale(0) rotate(360deg) translate(20px, -20px);
            opacity: 0;
          }
        }
        
        @keyframes sparkle {
          0% {
            transform: scale(0) rotate(0deg);
            opacity: 0;
          }
          50% {
            transform: scale(1.5) rotate(180deg);
            opacity: 1;
          }
          100% {
            transform: scale(0) rotate(360deg);
            opacity: 0;
          }
        }
        
        .particle-burst {
          animation: particle-burst 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        
        .sparkle {
          animation: sparkle 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
        }
      `}</style>
    </div>
  )
}
