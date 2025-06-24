"use client"

import { ArrowLeft, ExternalLink, Github, Clock, Users, Target, Lightbulb, Trophy, AlertTriangle } from "lucide-react"
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

  const productDetails = {
    "1": {
      title: "PUMP",
      description: "検索リンクメモ管理システム",
      longDescription:
        "検索リンクごとにメモを記録し、リンクにカーソルを合わせるだけで内容をポップアップ表示。メモは「必要／不必要」で分類でき、必要なリンクには緑色、不必要なリンクには赤色の下線が表示され、視覚的に情報を整理できるChrome拡張機能です。サポーターズ主催のハッカソン（技育CAMP Vol.23 2024年度）で最優秀賞を受賞しました。",
      technologies: ["JavaScript", "HTML/CSS", "Chrome Extension API", "DOM操作", "Web Scraping"],
      image: "/placeholder.svg?height=400&width=600",
      demoUrl: "#",
      githubUrl: "#",
      developmentTime: "ハッカソン期間中（48時間）",
      teamSize: "チーム開発（4人）",
      role: "ポップアップメモ表示機能、下線追加機能の実装、発表資料作成",
      award: "技育CAMP Vol.23 2024年度 最優秀賞",
      challenges: [
        "短期間での役割分担と効率的な開発",
        "各サイトの構造が異なる中でのスクレイピング実装",
        "SPAでのキャッシュ問題への対応",
        "直感的で使いやすいUI設計",
      ],
      solutions: [
        "開発者ツールを活用した各サイトの構造解析とスクレイピング",
        "直感的に分かりやすいUI（ポップアップの大きさ、線の色・太さ）の設計",
        "SPAのキャッシュ問題を解決するため毎回読み込む仕組みを実装",
        "聞く人の視点を考慮したプレゼン資料の作成",
      ],
      learnings: [
        "ユーザー視点の大切さ",
        "初対面のメンバーとのチーム開発の難しさ",
        "短期間での集中開発のコツ",
        "効果的なプレゼンテーション技術",
      ],
      results: [
        "技育CAMP Vol.23 2024年度 最優秀賞受賞",
        "直感的なUI設計により高いユーザビリティを実現",
        "効率的な情報整理機能の提供",
        "チーム開発スキルの向上",
      ],
    },
    "2": {
      title: "Trive",
      description: "旅行プラン作成アプリ",
      longDescription:
        "ユーザーが行きたい市区町村を選択すると地図上に観光スポットがピンで表示され、訪れたい場所を保存できます。各スポットに滞在時間を入力すると、効率的なルートと所要時間が自動で表示され、旅行のしおりの基礎となるプラン（訪問順、滞在時間、移動時間）を作成できるWebアプリケーションです。",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Google Maps API", "JavaScript"],
      image: "/placeholder.svg?height=400&width=600",
      demoUrl: "#",
      githubUrl: "#",
      developmentTime: "3ヶ月",
      teamSize: "チーム開発（4人）",
      role: "リーダー（PM）、バックエンド開発",
      challenges: [
        "初めてのチーム開発でのスケジュール管理",
        "各機能の実装工数の見積もりが困難",
        "APIの実装と連携",
        "チームメンバーのスキルレベルの違い",
      ],
      solutions: [
        "役割分担を明確にし、定期的な進捗確認を実施",
        "チーム全員が気持ちよく開発できる環境づくり",
        "Google Maps APIを活用した地図機能の実装",
        "効率的なルート計算アルゴリズムの設計",
      ],
      learnings: [
        "チーム開発の難しさと重要性",
        "プロジェクト管理スキル",
        "API設計と実装のベストプラクティス",
        "コミュニケーションの大切さ",
      ],
      results: [
        "直感的な地図インターフェースの実現",
        "効率的な旅行ルート提案機能の完成",
        "チーム開発経験の獲得",
        "プロジェクトマネジメントスキルの向上",
      ],
    },
    "3": {
      title: "Gravity Four",
      description: "重力付き四目並べゲーム",
      longDescription:
        "コマが下から積み上がる重力のルールを再現し、縦・横・斜めのいずれかに4つ揃えたプレイヤーが勝利となる対戦型の重力付き四目並べゲームです。初めての個人開発プロジェクトとして、ゲームロジックから勝敗判定、UI設計まで全て一人で実装しました。",
      technologies: ["JavaScript", "HTML5 Canvas", "CSS", "ゲームロジック", "アルゴリズム"],
      image: "/placeholder.svg?height=400&width=600",
      demoUrl: "#",
      githubUrl: "#",
      developmentTime: "1ヶ月",
      teamSize: "個人開発",
      role: "全機能の設計・実装（企画、UI/UX、ゲームロジック、勝敗判定）",
      challenges: [
        "初めての開発でコードを書くこと自体が困難",
        "重力ルールの物理演算実装",
        "複雑な勝ち負け判定ロジックの実装",
        "ユーザーフレンドリーなUI設計",
      ],
      solutions: [
        "段階的な学習アプローチで基礎から習得",
        "重力付き四目並べの独自ルール設計",
        "効率的な勝敗判定アルゴリズムの実装",
        "HTML5 Canvasを活用した滑らかなアニメーション",
      ],
      learnings: [
        "プログラミングの楽しさと達成感",
        "ゲーム開発の基礎知識",
        "アルゴリズム設計の重要性",
        "個人開発での問題解決能力",
      ],
      results: [
        "完全動作する対戦ゲームの完成",
        "プログラミングスキルの基礎確立",
        "個人開発の自信獲得",
        "ゲーム開発への興味の発見",
      ],
    },
    "4": {
      title: "子どもの「やってみたい」アプリ",
      description: "子ども向け体験マッチングプラットフォーム",
      longDescription:
        "子どもがショート動画で体験内容を見て「いいね」すると、親に通知が届き、関連する体験イベントが提示されます。気になった体験は保存でき、サブスクリプションに加入すると割引価格で参加可能です。体験提供企業からの広告費を割引原資とし、運営はサブスク収益を得るビジネスモデルです。和歌山大学学生挑戦コンテスト2024 ビジネス部門で企業賞を受賞しました。",
      technologies: ["ビジネスモデル設計", "UI/UX設計", "収益計画", "プレゼンテーション", "市場分析"],
      image: "/placeholder.svg?height=400&width=600",
      demoUrl: "#",
      githubUrl: "#",
      developmentTime: "2ヶ月",
      teamSize: "チーム開発",
      role: "発表資料の作成と収益計画の立案",
      award: "和歌山大学学生挑戦コンテスト2024 ビジネス部門 企業賞",
      challenges: [
        "初めてのビジネスプラン策定",
        "複数のステークホルダーの利益調整",
        "持続可能な収益モデルの設計",
        "市場ニーズの正確な把握",
      ],
      solutions: [
        "Will Can Mustのフレームワークを活用した戦略設計",
        "利用者・提供者・運営それぞれにとって利益が生まれる仕組みを設計",
        "ステークホルダー全員がWIN-WINの関係になるビジネスモデル",
        "詳細な収益計画と市場分析の実施",
      ],
      learnings: [
        "ビジネスモデル設計の重要性",
        "ユーザー視点の大切さ",
        "ステークホルダー分析の手法",
        "効果的なプレゼンテーション技術",
      ],
      results: [
        "和歌山大学学生挑戦コンテスト2024 企業賞受賞",
        "持続可能なビジネスモデルの提案",
        "ビジネス企画スキルの獲得",
        "プレゼンテーション能力の向上",
      ],
    },
    "5": {
      title: "非常持ち出し袋支援システム",
      description: "災害対策支援研究プロジェクト",
      longDescription:
        "ユーザーが作成した非常持ち出し袋では対応できない状況をシステムが提示することで、未考慮の状況に気づきを与える支援システムを提案しました。非常持ち出し袋の選定では、限られた重量内で個人に合った適切な物を選ぶ必要がありますが、物品の種類が膨大で本当に必要なものを判断するのは難しい現状があります。本研究では、この課題に対する新しいアプローチを提案しました。",
      technologies: ["研究手法", "システム設計", "ユーザビリティ評価", "論文執筆", "データ分析"],
      image: "/placeholder.svg?height=400&width=600",
      demoUrl: "#",
      githubUrl: "#",
      developmentTime: "6ヶ月",
      teamSize: "個人研究",
      role: "研究全般（企画・設計・実装・評価・論文執筆）",
      challenges: [
        "非常持ち出し袋作成に正解がない中での支援方法の模索",
        "ユーザーに自然に考えてもらう仕組みの設計",
        "災害シナリオの網羅的な分析",
        "システムの有効性評価方法の確立",
      ],
      solutions: [
        "未考慮状況の提示による気づき支援アプローチ",
        "個人の状況に応じたカスタマイズ機能",
        "段階的な学習支援システムの設計",
        "ユーザビリティテストによる検証",
      ],
      learnings: [
        "論理的思考力の向上",
        "研究手法とプロセスの理解",
        "問題設定と解決アプローチの重要性",
        "学術的な文章作成スキル",
      ],
      results: ["新しい災害対策支援手法の提案", "研究論文の完成", "論理的思考力の大幅な向上", "社会課題解決への貢献"],
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
              {product.award && (
                <div className="flex items-center mt-3">
                  <Trophy className="w-5 h-5 mr-2 text-yellow-400" />
                  <span className="text-yellow-400 font-medium">{product.award}</span>
                </div>
              )}
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
                <h3 className="font-semibold text-black mb-1">開発体制</h3>
                <p className="text-gray-600">{product.teamSize}</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 shadow-lg">
              <CardContent className="p-6 text-center">
                <Target className="w-8 h-8 mx-auto mb-3 text-purple-600" />
                <h3 className="font-semibold text-black mb-1">担当役割</h3>
                <p className="text-gray-600 text-sm">{product.role}</p>
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
                <h4 className="font-semibold text-black mb-3">使用技術・スキル</h4>
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
                  <AlertTriangle className="w-6 h-6 mr-2 text-red-500" />
                  苦労したこと・課題
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
                  工夫したこと・解決策
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
