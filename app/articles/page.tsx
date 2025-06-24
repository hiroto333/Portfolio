"use client"

import { Calendar, Clock, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function ArticlesPage() {
  const [hoveredArticle, setHoveredArticle] = useState<number | null>(null)

  const articles = [
    {
      id: 1,
      title: "React 18の新機能とConcurrent Featuresの活用法",
      excerpt: "React 18で導入された新機能について詳しく解説し、実際のプロジェクトでの活用方法を紹介します。",
      date: "2024-01-15",
      readTime: "8分",
      category: "React",
      tags: ["React", "JavaScript", "Frontend"],
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 2,
      title: "Next.js 14のApp Routerで作るモダンなWebアプリケーション",
      excerpt:
        "Next.js 14のApp Routerを使用して、パフォーマンスとSEOに優れたWebアプリケーションを構築する方法を解説します。",
      date: "2024-01-10",
      readTime: "12分",
      category: "Next.js",
      tags: ["Next.js", "React", "SSR"],
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 3,
      title: "TypeScriptで型安全なReactコンポーネントを作る",
      excerpt:
        "TypeScriptを活用してより安全で保守性の高いReactコンポーネントを作成するためのベストプラクティスを紹介します。",
      date: "2024-01-05",
      readTime: "10分",
      category: "TypeScript",
      tags: ["TypeScript", "React", "Type Safety"],
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 4,
      title: "Tailwind CSSでデザインシステムを構築する",
      excerpt:
        "Tailwind CSSを使用して一貫性のあるデザインシステムを構築し、チーム開発での効率を向上させる方法を解説します。",
      date: "2023-12-28",
      readTime: "15分",
      category: "CSS",
      tags: ["Tailwind CSS", "Design System", "CSS"],
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 5,
      title: "Webパフォーマンス最適化の実践的アプローチ",
      excerpt: "実際のプロジェクトでのWebパフォーマンス最適化の経験をもとに、効果的な最適化手法を紹介します。",
      date: "2023-12-20",
      readTime: "18分",
      category: "Performance",
      tags: ["Performance", "Web Vitals", "Optimization"],
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 6,
      title: "モダンなフロントエンド開発環境の構築",
      excerpt:
        "Vite、ESLint、Prettier、Huskyを組み合わせた効率的なフロントエンド開発環境の構築方法を詳しく解説します。",
      date: "2023-12-15",
      readTime: "14分",
      category: "Development",
      tags: ["Vite", "ESLint", "Development Environment"],
      image: "/placeholder.svg?height=200&width=400",
    },
  ]

  const categories = ["All", "React", "Next.js", "TypeScript", "CSS", "Performance", "Development"]
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredArticles =
    selectedCategory === "All" ? articles : articles.filter((article) => article.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
            Articles
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            技術的な学びや経験を記事として共有しています。
            フロントエンド開発に関する実践的な内容を中心に執筆しています。
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                selectedCategory === category
                  ? "bg-black text-white shadow-lg"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-black hover:text-black"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Article */}
        {filteredArticles.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-black mb-6">Featured Article</h2>
            <Card className="bg-white border-gray-200 hover:shadow-2xl transition-all duration-500 overflow-hidden group">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={filteredArticles[0].image || "/placeholder.svg"}
                    alt={filteredArticles[0].title}
                    className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <Badge className="bg-black text-white">{filteredArticles[0].category}</Badge>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {filteredArticles[0].date}
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {filteredArticles[0].readTime}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-gray-600 transition-colors">
                    {filteredArticles[0].title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{filteredArticles[0].excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {filteredArticles[0].tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-gray-100 text-gray-800">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button className="bg-black text-white hover:bg-gray-800 hover:scale-105 transition-all duration-300">
                    記事を読む
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.slice(1).map((article) => (
            <Card
              key={article.id}
              className={`bg-white border-gray-200 hover:shadow-2xl transition-all duration-500 cursor-pointer group overflow-hidden ${
                hoveredArticle === article.id ? "scale-105 shadow-2xl" : ""
              }`}
              onMouseEnter={() => setHoveredArticle(article.id)}
              onMouseLeave={() => setHoveredArticle(null)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-black/80 text-white">{article.category}</Badge>
                </div>
              </div>

              <CardHeader>
                <div className="flex items-center space-x-4 mb-2 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {article.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {article.readTime}
                  </div>
                </div>
                <CardTitle className="text-black group-hover:text-gray-600 transition-colors line-clamp-2">
                  {article.title}
                </CardTitle>
                <CardDescription className="text-gray-600 line-clamp-3">{article.excerpt}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-gray-100 text-gray-800 text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button
                  variant="ghost"
                  className="w-full justify-between hover:bg-gray-50 group-hover:bg-gray-100 transition-all duration-200"
                >
                  記事を読む
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">選択されたカテゴリーの記事はありません。</p>
          </div>
        )}
      </div>
    </div>
  )
}
