import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { GlobalClickEffects } from "@/components/global-click-effects"
import { ScrollToTop } from "@/components/scroll-to-top"
import { ErrorBoundary } from "@/components/error-boundary"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "石田大翔 | Portfolio",
  description:
    "石田大翔のポートフォリオサイト。React/Next.jsを中心としたモダンなWeb開発の作品をご紹介します。",
  keywords: ["フロントエンド", "React", "Next.js", "TypeScript", "ポートフォリオ"],
  authors: [{ name: "石田大翔" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <ErrorBoundary>
          <Header />
          <main className="min-h-screen">{children}</main>
          <footer className="border-t border-gray-200 py-8 px-6 bg-gray-50">
            <div className="max-w-6xl mx-auto text-center">
              <p className="text-gray-500">© 2025 石田大翔. All rights reserved.</p>
            </div>
          </footer>
          <GlobalClickEffects />
          <ScrollToTop />
        </ErrorBoundary>
      </body>
    </html>
  )
}
