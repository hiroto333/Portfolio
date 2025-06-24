"use client"

import { Github, ArrowRight, Clock, AlertCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import Link from "next/link"

export default function ProductsPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState<number | null>(null)
  const [isPageLoading, setIsPageLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const products = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "モダンなECサイトのフロントエンド開発",
      longDescription:
        "Next.js、TypeScript、Stripe APIを使用して構築したレスポンシブなEコマースプラットフォーム。ユーザーフレンドリーなインターフェースと高速なパフォーマンスを実現。",
      technologies: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
      image: "/placeholder.svg?height=200&width=300",
      demoUrl: "#",
      githubUrl: "#",
      developmentTime: "3ヶ月",
      status: "完成",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "チーム向けタスク管理アプリケーション",
      longDescription:
        "React、Node.js、MongoDBを使用したリアルタイムコラボレーション機能付きタスク管理ツール。直感的なドラッグ&ドロップインターフェースを実装。",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      image: "/placeholder.svg?height=200&width=300",
      demoUrl: "#",
      githubUrl: "#",
      developmentTime: "2ヶ月",
      status: "完成",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "デザイナー向けポートフォリオサイト",
      longDescription:
        "Gatsby、GraphQL、Contentfulを使用した高速でSEOに最適化されたポートフォリオサイト。アニメーションとインタラクションを重視したデザイン。",
      technologies: ["Gatsby", "GraphQL", "Contentful", "Framer Motion"],
      image: "/placeholder.svg?height=200&width=300",
      demoUrl: "#",
      githubUrl: "#",
      developmentTime: "1ヶ月",
      status: "完成",
    },
    {
      id: 4,
      title: "Mobile App UI",
      description: "フィットネスアプリのUI/UXデザイン",
      longDescription:
        "React Native、Expo、Figmaを使用したユーザーフレンドリーなモバイルアプリのデザインと開発。健康管理とワークアウト追跡機能を実装。",
      technologies: ["React Native", "Expo", "Figma", "Redux"],
      image: "/placeholder.svg?height=200&width=300",
      demoUrl: "#",
      githubUrl: "#",
      developmentTime: "4ヶ月",
      status: "開発中",
    },
    {
      id: 5,
      title: "Dashboard Analytics",
      description: "データ可視化ダッシュボード",
      longDescription:
        "D3.js、Chart.js、Reactを使用したインタラクティブなデータ可視化ダッシュボード。リアルタイムデータ更新とカスタマイズ可能なウィジェット。",
      technologies: ["React", "D3.js", "Chart.js", "WebSocket"],
      image: "/placeholder.svg?height=200&width=300",
      demoUrl: "#",
      githubUrl: "#",
      developmentTime: "2.5ヶ月",
      status: "完成",
    },
    {
      id: 6,
      title: "AI Chat Interface",
      description: "AI搭載チャットインターフェース",
      longDescription:
        "OpenAI API、Next.js、TypeScriptを使用したAI搭載チャットアプリケーション。自然言語処理とリアルタイム会話機能を実装。",
      technologies: ["Next.js", "OpenAI API", "TypeScript", "Prisma"],
      image: "/placeholder.svg?height=200&width=300",
      demoUrl: "#",
      githubUrl: "#",
      developmentTime: "3.5ヶ月",
      status: "完成",
    },
  ]

  useEffect(() => {
    // ページロード時のシミュレーション
    const timer = setTimeout(() => {
      setIsPageLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const handleViewDetails = async (id: number) => {
    try {
      setIsLoading(id)
      setError(null)

      // 実際のアプリケーションでは、ここでAPIコールなどを行う
      await new Promise((resolve) => setTimeout(resolve, 600))

      // ナビゲーションは自動的に行われる（Linkコンポーネントによる）
    } catch (err) {
      setError("詳細ページの読み込みに失敗しました。もう一度お試しください。")
    } finally {
      setIsLoading(null)
    }
  }

  if (isPageLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black mx-auto mb-4" />
          <p className="text-gray-600">作品を読み込み中...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
            Products
            <span className="text-4xl ml-2" role="img" aria-label="ロケット">
              🚀
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            これまでに手がけたプロジェクトの一部をご紹介します。
            それぞれに異なる技術とアプローチで課題解決に取り組みました。
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
            <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
            <p className="text-red-700">{error}</p>
          </div>
        )}

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              className={`bg-white border-gray-200 hover:shadow-2xl transition-all duration-500 cursor-pointer group overflow-hidden ${
                hoveredCard === product.id ? "scale-105 shadow-2xl" : ""
              }`}
              onMouseEnter={() => setHoveredCard(product.id)}
              onMouseLeave={() => setHoveredCard(null)}
              role="article"
              aria-labelledby={`product-title-${product.id}`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={`${product.title}のプロジェクト画像`}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />

                {/* Status Badge */}
                <Badge
                  className={`absolute top-4 right-4 ${
                    product.status === "完成" ? "bg-green-500 text-white" : "bg-yellow-500 text-black"
                  }`}
                >
                  {product.status}
                </Badge>
              </div>

              <CardHeader>
                <CardTitle
                  id={`product-title-${product.id}`}
                  className="text-black group-hover:text-gray-600 transition-colors"
                >
                  {product.title}
                </CardTitle>
                <CardDescription className="text-gray-600">{product.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{product.longDescription}</p>

                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <Clock className="w-4 h-4 mr-1" aria-hidden="true" />
                  <span>開発期間: {product.developmentTime}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {product.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <Link href={`/products/${product.id}`} className="block">
                  <Button
                    className="w-full bg-black text-white hover:bg-gray-800 hover:scale-105 transition-all duration-200 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                    onClick={() => handleViewDetails(product.id)}
                    disabled={isLoading === product.id}
                    aria-label={`${product.title}の詳細を見る`}
                  >
                    {isLoading === product.id ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                        読み込み中...
                      </>
                    ) : (
                      <>
                        詳細を見る
                        <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                      </>
                    )}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* GitHub Link */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">もっと多くのプロジェクトをGitHubでご覧いただけます</p>
          <Button
            size="lg"
            variant="outline"
            className="border-black text-black hover:bg-gray-50 hover:scale-105 transition-all duration-300 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            asChild
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHubでより多くのプロジェクトを見る（新しいタブで開く）"
            >
              <Github className="w-5 h-5 mr-2" aria-hidden="true" />
              View All Projects
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
