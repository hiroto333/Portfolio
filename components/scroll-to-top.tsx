"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    // ページ遷移時に最上部にスクロール
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
