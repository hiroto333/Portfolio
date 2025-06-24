"use client"

import { Github, ArrowRight, Clock, AlertCircle, Trophy, Users, Target } from "lucide-react"
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
      title: "PUMP",
      description: "検索リンクメモ管理システム",
      longDescription:
        "検索リンクごとにメモを記録し、リンクにカーソルを合わせるだけで内容をポップアップ表示。メモは「必要／不必要」で分類でき、必要なリンクには緑色、不必要なリンクには赤色の下線が表示され、視覚的に情報を整理できます。",
      technologies: ["JavaScript", "HTML/CSS", "Chrome Extension", "DOM操作"],
      image: "/placeholder.svg?height=200&width=300",
      demoUrl: "#",
      githubUrl: "#",
      developmentTime: "ハッカソン期間中",
      status: "完成",
      award: "技育CAMP Vol.23 最優秀賞",
      role: "ポップアップメモ表示機能、下線追加機能の実装",
      teamSize: "チーム開発",
    },
    {
      id: 2,
      title: "Trive",
      description: "AI搭載旅行プラン作成アプリ",
      longDescription:
        "ユーザーが行きたい市区町村を選択すると地図上に観光スポットがピンで表示され、訪れたい場所を保存できます。各スポットに滞在時間を入力すると、効率的なルートと所要時間が自動で表示され、旅行のしおりの基礎となるプランを作成できます。",
      technologies: ["React", "Node.js", "Google Maps API", "MongoDB"],
      image: "/placeholder.svg?height=200&width=300",
      demoUrl: "#",
      githubUrl: "#",
      developmentTime: "3ヶ月",
      status: "完成",
      role: "リーダー（PM）、バックエンド開発",
      teamSize: "チーム開発",
    },
    {
      id: 3,
      title: "Gravity Four",
      description: "重力付き四目並べゲーム",
      longDescription:
        "コマが下から積み上がる重力のルールを再現し、縦・横・斜めのいずれかに4つ揃えたプレイヤーが勝利となる対戦型の重力付き四目並べゲームを開発しました。初めての個人開発プロジェクトとして、ゲームロジックから勝敗判定まで全て実装。",
      technologies: ["JavaScript", "HTML5 Canvas", "CSS", "ゲームロジック"],
      image: "/placeholder.svg?height=200&width=300",
      demoUrl: "#",
      githubUrl: "#",
      developmentTime: "1ヶ月",
      status: "完成",
      role: "個人開発（全機能実装）",
      teamSize: "個人開発",
    },
    {
      id: 4,
      title: "子どもの「やってみたい」アプリ",
      description: "子ども向け体験マッチングプラットフォーム",
      longDescription:
        "子どもがショート動画で体験内容を見て「いいね」すると、親に通知が届き、関連する体験イベントが提示されます。気になった体験は保存でき、サブスクリプションに加入すると割引価格で参加可能です。体験提供企業からの広告費を割引原資とするビジネスモデル。",
      technologies: ["ビジネスモデル設計", "UI/UX設計", "収益計画", "プレゼンテーション"],
      image: "/placeholder.svg?height=200&width=300",
      demoUrl: "#",
      githubUrl: "#",
      developmentTime: "2ヶ月",
      status: "企画完成",
      award: "和歌山大学学生挑戦コンテスト2024 企業賞",
      role: "発表資料作成、収益計画立案",
      teamSize: "チーム開発",
    },
    {
      id: 5,
      title: "非常持ち出し袋支援システム",
      description: "災害対策支援研究プロジェクト",
      longDescription:
        "ユーザーが作成した非常持ち出し袋では対応できない状況をシステムが提示することで、未考慮の状況に気づきを与える支援システムを提案しました。限られた重量内で個人に合った適切な物を選ぶ支援を行います。",
      technologies: ["研究手法", "システム設計", "ユーザビリティ", "論文執筆"],
      image: "/placeholder.svg?height=200&width=300",
      demoUrl: "#",
      githubUrl: "#",
      developmentTime: "6ヶ月",
      status: "研究完了",
      role: "研究全般（企画・設計・実装・論文執筆）",
      teamSize: "個人研究",
    },
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const handleViewDetails = async (id: number) => {
    try {
      setIsLoading(id)
      setError(null)
      await new Promise((resolve) => setTimeout(resolve, 600))
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
            これまでに手がけたプロジェクトをご紹介します。
            ハッカソンでの受賞作品から研究プロジェクトまで、様々な技術とアプローチで課題解決に取り組みました。
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
                    product.status === "完成" || product.status === "研究完了" || product.status === "企画完成"
                      ? "bg-green-500 text-white"
                      : "bg-yellow-500 text-black"
                  }`}
                >
                  {product.status}
                </Badge>

                {/* Award Badge */}
                {product.award && (
                  <Badge className="absolute top-4 left-4 bg-yellow-600 text-white flex items-center">
                    <Trophy className="w-3 h-3 mr-1" />
                    受賞
                  </Badge>
                )}
              </div>

              <CardHeader>
                <CardTitle
                  id={`product-title-${product.id}`}
                  className="text-black group-hover:text-gray-600 transition-colors"
                >
                  {product.title}
                </CardTitle>
                <CardDescription className="text-gray-600">{product.description}</CardDescription>
                {product.award && <p className="text-sm text-yellow-600 font-medium mt-1">{product.award}</p>}
              </CardHeader>

              <CardContent>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{product.longDescription}</p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="w-4 h-4 mr-1" aria-hidden="true" />
                    <span>開発期間: {product.developmentTime}</span>
                  </div>

                  <div className="flex items-center text-gray-500 text-sm">
                    <Users className="w-4 h-4 mr-1" aria-hidden="true" />
                    <span>{product.teamSize}</span>
                  </div>

                  <div className="flex items-start text-gray-500 text-sm">
                    <Target className="w-4 h-4 mr-1 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span className="leading-relaxed">{product.role}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {product.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors text-xs"
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
