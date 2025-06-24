"use client"

import { ArrowLeft, ExternalLink, Github, Clock, Users, Target, Lightbulb } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useParams } from "next/navigation"
import { useState, useEffect } from "react"

export default function ProductDetailPage() {
  const params = useParams()
  const id = params.id as string
  const [isLoading, setIsLoading] = useState(true)

  // 全プロダクトの詳細データ
  const productDetails = {
    "1": {
      title: "E-commerce Platform",
      description: "モダンなECサイトのフロントエンド開発",
      longDescription:
        "Next.js、TypeScript、Stripe APIを使用して構築したレスポンシブなEコマースプラットフォーム。ユーザーフレンドリーなインターフェースと高��なパフォーマンスを実現しました。商品検索、カート機能、決済処理まで一貫したユーザー体験を提供します。",
      technologies: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS", "Prisma", "PostgreSQL"],
      image: "/placeholder.svg?height=400&width=600",
      demoUrl: "#",
      githubUrl: "#",
      developmentTime: "3ヶ月",
      teamSize: "3人",
      role: "フロントエンドリード",
      challenges: [
        "複雑な商品フィルタリング機能の実装",
        "決済システムとの安全な連携",
        "大量の商品データの効率的な表示",
        "モバイルファーストなレスポンシブデザイン",
      ],
      solutions: [
        "React QueryとVirtual Scrollingによる高速データ表示",
        "Stripe Elements APIを使用した安全な決済フロー",
        "Intersection Observer APIを活用した無限スクロール",
        "Tailwind CSSによる一貫したデザインシステム",
      ],
      learnings: [
        "大規模なECサイトのアーキテクチャ設計",
        "決済システムのセキュリティ要件",
        "パフォーマンス最適化の重要性",
        "ユーザビリティテストの価値",
      ],
      results: [
        "ページ読み込み速度40%向上",
        "コンバージョン率15%改善",
        "モバイルユーザビリティスコア95点",
        "クライアント満足度100%",
      ],
    },
    "2": {
      title: "Task Management App",
      description: "チーム向けタスク管理アプリケーション",
      longDescription:
        "React、Node.js、MongoDBを使用したリアルタイムコラボレーション機能付きタスク管理ツール。直感的なドラッグ&ドロップインターフェースを実装し、チームの生産性向上を支援します。",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Express", "JWT"],
      image: "/placeholder.svg?height=400&width=600",
      demoUrl: "#",
      githubUrl: "#",
      developmentTime: "2ヶ月",
      teamSize: "2人",
      role: "フルスタック開発者",
      challenges: [
        "リアルタイム同期の実装",
        "ドラッグ&ドロップUIの最適化",
        "複数ユーザーの同時編集対応",
        "データの整合性保証",
      ],
      solutions: [
        "Socket.ioによるリアルタイム通信",
        "React Beautiful DNDライブラリの活用",
        "楽観的更新とコンフリクト解決機能",
        "MongoDBトランザクションによるデータ整合性",
      ],
      learnings: [
        "リアルタイムアプリケーションの設計",
        "WebSocketの効果的な活用方法",
        "状態管理の複雑性への対処",
        "ユーザー体験を重視したUI設計",
      ],
      results: [
        "チーム生産性30%向上",
        "ユーザー満足度4.8/5.0",
        "月間アクティブユーザー500人達成",
        "バグ報告件数90%削減",
      ],
    },
    "3": {
      title: "Portfolio Website",
      description: "デザイナー向けポートフォリオサイト",
      longDescription:
        "Gatsby、GraphQL、Contentfulを使用した高速でSEOに最適化されたポートフォリオサイト。アニメーションとインタラクションを重視したデザインで、クリエイターの作品を魅力的に展示します。",
      technologies: ["Gatsby", "GraphQL", "Contentful", "Framer Motion", "SCSS"],
      image: "/placeholder.svg?height=400&width=600",
      demoUrl: "#",
      githubUrl: "#",
      developmentTime: "1ヶ月",
      teamSize: "1人",
      role: "フロントエンド開発者",
      challenges: [
        "静的サイトでの動的コンテンツ管理",
        "高品質な画像の最適化",
        "SEO対策とパフォーマンス両立",
        "クリエイティブなアニメーション実装",
      ],
      solutions: [
        "ContentfulのHeadless CMSを活用",
        "Gatsby Image Pluginによる画像最適化",
        "静的サイト生成によるSEO最適化",
        "Framer Motionによる滑らかなアニメーション",
      ],
      learnings: [
        "JAMstackアーキテクチャの理解",
        "Headless CMSの効果的な活用",
        "パフォーマンス最適化のベストプラクティス",
        "アニメーションとUXのバランス",
      ],
      results: [
        "Lighthouse スコア100点達成",
        "ページ読み込み時間1秒以下",
        "検索エンジンランキング上位表示",
        "クライアントからの追加案件獲得",
      ],
    },
    "4": {
      title: "Mobile App UI",
      description: "フィットネスアプリのUI/UXデザイン",
      longDescription:
        "React Native、Expo、Figmaを使用したユーザーフレンドリーなモバイルアプリのデザインと開発。健康管理とワークアウト追跡機能を実装し、ユーザーのフィットネス目標達成を支援します。",
      technologies: ["React Native", "Expo", "Figma", "Redux", "AsyncStorage"],
      image: "/placeholder.svg?height=400&width=600",
      demoUrl: "#",
      githubUrl: "#",
      developmentTime: "4ヶ月",
      teamSize: "4人",
      role: "UI/UX デザイナー・フロントエンド開発者",
      challenges: ["モバイル特有のUX設計", "複雑なデータ可視化", "オフライン機能の実装", "iOS/Android両対応"],
      solutions: [
        "ユーザー調査に基づいたUI設計",
        "Chart.jsによるインタラクティブなグラフ",
        "AsyncStorageによるローカルデータ管理",
        "Expoによるクロスプラットフォーム開発",
      ],
      learnings: [
        "モバイルアプリのUX設計原則",
        "データ可視化のベストプラクティス",
        "React Nativeの特性と制約",
        "ユーザーテストの重要性",
      ],
      results: ["App Store評価4.7/5.0", "ダウンロード数10,000回突破", "ユーザー継続率85%", "デザインアワード受賞"],
    },
    "5": {
      title: "Dashboard Analytics",
      description: "データ可視化ダッシュボード",
      longDescription:
        "D3.js、Chart.js、Reactを使用したインタラクティブなデータ可視化ダッシュボード。リアルタイムデータ更新とカスタマイズ可能なウィジェットで、ビジネスインサイトの発見を支援します。",
      technologies: ["React", "D3.js", "Chart.js", "WebSocket", "Node.js", "Redis"],
      image: "/placeholder.svg?height=400&width=600",
      demoUrl: "#",
      githubUrl: "#",
      developmentTime: "2.5ヶ月",
      teamSize: "3人",
      role: "フロントエンド開発者",
      challenges: [
        "大量データの効率的な可視化",
        "リアルタイムデータ更新",
        "カスタマイズ可能なUI設計",
        "パフォーマンス最適化",
      ],
      solutions: [
        "D3.jsによる高性能データ可視化",
        "WebSocketによるリアルタイム通信",
        "ドラッグ&ドロップによるウィジェット配置",
        "仮想化とメモ化によるパフォーマンス向上",
      ],
      learnings: [
        "データ可視化ライブラリの使い分け",
        "大量データ処理の最適化手法",
        "リアルタイムアプリケーションの設計",
        "ユーザビリティを考慮したダッシュボード設計",
      ],
      results: ["データ処理速度70%向上", "ユーザーエンゲージメント50%増加", "意思決定時間40%短縮", "企業導入実績20社"],
    },
    "6": {
      title: "AI Chat Interface",
      description: "AI搭載チャットインターフェース",
      longDescription:
        "OpenAI API、Next.js、TypeScriptを使用したAI搭載チャットアプリケーション。自然言語処理とリアルタイム会話機能を実装し、ユーザーとAIの自然な対話を実現します。",
      technologies: ["Next.js", "OpenAI API", "TypeScript", "Prisma", "PostgreSQL", "Vercel"],
      image: "/placeholder.svg?height=400&width=600",
      demoUrl: "#",
      githubUrl: "#",
      developmentTime: "3.5ヶ月",
      teamSize: "2人",
      role: "フルスタック開発者",
      challenges: ["AI APIの効率的な活用", "会話履歴の管理", "レスポンス時間の最適化", "コスト効率的な運用"],
      solutions: [
        "OpenAI APIのストリーミング機能活用",
        "Prismaによる効率的なデータベース設計",
        "キャッシュ戦略によるレスポンス高速化",
        "使用量監視とコスト最適化機能",
      ],
      learnings: [
        "AI APIの実践的な活用方法",
        "会話型UIの設計原則",
        "APIコスト最適化の重要性",
        "ユーザープライバシーの配慮",
      ],
      results: ["平均レスポンス時間2秒以下", "ユーザー満足度4.6/5.0", "月間会話数100,000回", "API使用コスト30%削減"],
    },
  }

  const product = productDetails[id as keyof typeof productDetails]

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black mx-auto mb-4" />
          <p className="text-gray-600">プロジェクト詳細を読み込み中...</p>
        </div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-black mb-4">404</h1>
          <p className="text-gray-600 mb-8">プロジェクトが見つかりませんでした</p>
          <Link href="/products">
            <Button className="bg-black text-white hover:bg-gray-800">
              <ArrowLeft className="w-4 h-4 mr-2" />
              プロジェクト一覧に戻る
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link href="/products">
          <Button
            variant="outline"
            className="mb-8 border-gray-300 text-gray-600 hover:bg-gray-50 hover:scale-105 transition-all duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            プロジェクト一覧に戻る
          </Button>
        </Link>

        {/* Hero Section */}
        <div className="mb-12">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl mb-8">
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.title}
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">{product.title}</h1>
              <p className="text-xl opacity-90">{product.description}</p>
            </div>
          </div>

          {/* Project Info */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-white border-gray-200 shadow-lg">
              <CardContent className="p-6 text-center">
                <Clock className="w-8 h-8 mx-auto mb-3 text-blue-600" />
                <h3 className="font-semibold text-black mb-1">開発期間</h3>
                <p className="text-gray-600">{product.developmentTime}</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 shadow-lg">
              <CardContent className="p-6 text-center">
                <Users className="w-8 h-8 mx-auto mb-3 text-green-600" />
                <h3 className="font-semibold text-black mb-1">チーム規模</h3>
                <p className="text-gray-600">{product.teamSize}</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 shadow-lg">
              <CardContent className="p-6 text-center">
                <Target className="w-8 h-8 mx-auto mb-3 text-purple-600" />
                <h3 className="font-semibold text-black mb-1">担当役割</h3>
                <p className="text-gray-600">{product.role}</p>
              </CardContent>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              size="lg"
              className="bg-black text-white hover:bg-gray-800 hover:scale-105 transition-all duration-300 flex-1"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              ライブデモを見る
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-black text-black hover:bg-gray-50 hover:scale-105 transition-all duration-300 flex-1"
            >
              <Github className="w-5 h-5 mr-2" />
              ソースコードを見る
            </Button>
          </div>
        </div>

        {/* Project Details */}
        <div className="space-y-12">
          {/* Overview */}
          <Card className="bg-white border-gray-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-black">プロジェクト概要</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed mb-6">{product.longDescription}</p>

              <div>
                <h4 className="font-semibold text-black mb-3">使用技術</h4>
                <div className="flex flex-wrap gap-2">
                  {product.technologies.map((tech) => (
                    <Badge key={tech} className="bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Challenges & Solutions */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white border-gray-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-black flex items-center">
                  <Target className="w-6 h-6 mr-2 text-red-500" />
                  課題・チャレンジ
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {product.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-black flex items-center">
                  <Lightbulb className="w-6 h-6 mr-2 text-yellow-500" />
                  解決策・アプローチ
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {product.solutions.map((solution, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{solution}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Results & Learnings */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-green-50 to-blue-50 border-green-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-black">成果・結果</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {product.results.map((result, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 text-sm font-medium">{result}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-black">学んだこと</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {product.learnings.map((learning, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{learning}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Next Project */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-black mb-6">他のプロジェクトも見る</h3>
          <Link href="/products">
            <Button
              size="lg"
              variant="outline"
              className="border-black text-black hover:bg-gray-50 hover:scale-105 transition-all duration-300"
            >
              すべてのプロジェクトを見る
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
