"use client"

import type React from "react"

import { useState, useEffect, useCallback } from "react"

interface ClickEffect {
  x: number
  y: number
  id: number
  colors: string[]
}

export function GlobalClickEffects() {
  const [clickEffects, setClickEffects] = useState<ClickEffect[]>([])

  const fireworkColors = [
    ["#FF6B6B", "#4ECDC4", "#45B7D1"],
    ["#96CEB4", "#FFEAA7", "#DDA0DD"],
    ["#74B9FF", "#A29BFE", "#FD79A8"],
    ["#FDCB6E", "#6C5CE7", "#00B894"],
    ["#E17055", "#81ECEC", "#55A3FF"],
  ]

  const handleGlobalClick = useCallback((e: MouseEvent) => {
    // ボタンやリンクのクリックは除外
    const target = e.target as Element
    if (
      target.closest("button") ||
      target.closest("a") ||
      target.closest("input") ||
      target.closest("textarea") ||
      target.closest("select")
    ) {
      return
    }

    const id = Date.now()
    const colors = fireworkColors[Math.floor(Math.random() * fireworkColors.length)]

    const newEffect: ClickEffect = {
      x: e.clientX,
      y: e.clientY,
      id,
      colors,
    }

    setClickEffects((prev) => [...prev.slice(-2), newEffect]) // 最大3個まで

    // 高速化：1.5秒→0.8秒に短縮
    setTimeout(() => {
      setClickEffects((prev) => prev.filter((effect) => effect.id !== id))
    }, 800)
  }, [])

  useEffect(() => {
    document.addEventListener("click", handleGlobalClick, { passive: true })
    return () => document.removeEventListener("click", handleGlobalClick)
  }, [handleGlobalClick])

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {clickEffects.map((effect) => (
        <div
          key={effect.id}
          className="absolute"
          style={{
            left: effect.x,
            top: effect.y,
          }}
        >
          {/* 放射状に広がる粒子（螺旋ではなく直線的に） */}
          {Array.from({ length: 8 }, (_, i) => {
            const angle = i * 45 * (Math.PI / 180) // 45度ずつ
            const color = effect.colors[i % effect.colors.length]

            return (
              <div
                key={i}
                className="absolute w-2 h-2 rounded-full firework-particle"
                style={
                  {
                    backgroundColor: color,
                    transform: `translate(-50%, -50%)`,
                    "--angle": `${angle}rad`,
                    animationDelay: `${i * 20}ms`, // 遅延も短縮
                  } as React.CSSProperties
                }
              />
            )
          })}

          {/* 中央の爆発エフェクト */}
          <div className="absolute w-3 h-3 rounded-full firework-center transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-full h-full rounded-full bg-white animate-ping" />
          </div>
        </div>
      ))}

      <style jsx>{`
        .firework-particle {
          animation: firework-burst 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          will-change: transform, opacity;
        }
        
        .firework-center {
          animation: firework-center 0.4s ease-out forwards;
        }
        
        @keyframes firework-burst {
          0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
          }
          15% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(
              calc(-50% + cos(var(--angle)) * 40px), 
              calc(-50% + sin(var(--angle)) * 40px)
            ) scale(0);
            opacity: 0;
          }
        }
        
        @keyframes firework-center {
          0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
          }
          50% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.8;
          }
          100% {
            transform: translate(-50%, -50%) scale(1.5);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}
