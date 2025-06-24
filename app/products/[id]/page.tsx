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
      description: "Chrome拡張機能　PUMP -PopUpMemoPad-",
      longDescription:
        "ハッカソンにて、検索時の情報整理を支援するChrome拡張機能「PUMP - Pop Up Memo Pad -」を開発し、最優秀賞を受賞しました。大学の課題や研究で調べ物をする際に、一度開いた検索結果のリンクが紫色になっても中身までは思い出せず、再度開き直す手間があるという課題を感じたことが開発のきっかけです。この拡張機能では、検索結果のリンクごとにメモを記録でき、リンクにカーソルを合わせるとポップアップでそのメモが表示されます。さらに、メモ作成時に「必要」か「不必要」かを選択することで、必要と判断したリンクには緑色、不必要なリンクには赤色の下線が引かれ、視覚的に情報を整理できます。また、サイドバーには記録したURLとメモが一覧表示されており、「必要・不必要」のフィルターをかけることで、必要な情報にすぐアクセスできるようになっています。私は主に、検索結果への下線追加機能や、リンクにマウスを重ねたときのメモのポップアップ表示機能を実装しました。また、プレゼン資料作成を担当し、実用性とユーザー体験を重視した設計を心がけました。",
      technologies: ["JavaScript", "HTML/CSS", "Chrome Extension", "DOM操作"],
      image: "/Pump.png",
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
      description: "ドライブ旅行支援サイト　Trive -Trip&Drive-",
      longDescription:
        "授業にて、HTML、CSS、JavaScriptを用いたドライブ旅行支援サイトTriveをチームで開発しました。リーダーとしてガントチャートを用いてスケジュール管理を行い、企画から実装までの開発工程を主導しました。初めてのチーム開発であるうえに限られた期間での取り組みだったため、進行が遅れる場面もありましたが、メンバーと協力しながら開発を完遂しました。本サービスでは、ユーザーが行きたい市区町村を選択すると地図上に観光スポットがピンで表示され、訪れたい場所を保存できます。各スポットに滞在時間を入力すると、効率的なルートと所要時間が自動で表示され、旅行のしおりの基礎となるプラン（訪問順、滞在時間、移動時間）を作成できます。作成したプランは保存・再確認が可能です。現時点ではUIの使いやすさに課題が残っており、今後の改善点として認識しています。",
      technologies: ["JavaScript", "HTML/CSS", "Google Maps API", "Firebase"],
      image: "/Trive.png",
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
        "授業にて、Javaを用いて、初めてのプロダクトとして対戦型の重力付き四目並べゲームを開発しました。コマが下から積み上がる重力のルールを再現し、縦・横・斜めのいずれかに4つ揃えたプレイヤーが勝利となるロジックを自力で実装しました。ゲームロジックの設計や盤面状態の管理、勝敗判定などを一から考えて形にする過程で、プログラミングの基礎や問題解決力を実践的に学ぶことができました。初めての開発ながらも、自分のアイデアを動く形にする喜びと達成感を得られた経験です。",
      technologies: ["初開発", "Java", "ゲームロジック"],
      image: "/GravityFour.png",
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
      title: "子どもの「やってみたい」が溢れて，それを叶えられるアプリ",
      description: "子ども向け体験マッチングプラットフォーム",
      longDescription:
        "学内のビジネスコンテスト（和歌山大学学生挑戦コンテスト2024 ビジネス部門）にて、「子どもたちのやってみたいが溢れて、それを叶えられるアプリ」を提案し、企業賞を受賞しました。子どもの純粋な「やってみたい」という気持ちを大切にし、その思いを周囲の大人が理解・支援することで、非認知能力（主体性、好奇心、協調性、創造性など）を育むことを目指したアプリです。日本の子どもの精神的幸福度が他国と比べて低いという社会課題を背景に、チームで企画を行い、私は主に発表資料の作成と収益計画の立案を担当しました。ビジネスプランを考えるのは初めてで苦労も多くありましたが、利用者・提供者・運営それぞれにとって利益が生まれる仕組みを意識して設計しました。アプリでは、子どもがショート動画で体験内容を見て「いいね」すると、親に通知が届き、関連する体験イベントが提示されます。気になった体験は保存でき、サブスクリプションに加入すると割引価格で参加可能です。体験提供企業からの広告費を割引原資とし、運営はサブスク収益を得るビジネスモデルです。",
      technologies: ["ビジネスモデル設計", "UI/UX設計", "収益計画", "プレゼンテーション"],
      image: "/child.png",
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
      description: "対応不可な状況の提示による非常持ち出し袋作成支援システムの開発",
      longDescription:
        "非常持ち出し袋の中身は、物を詰め込み過ぎると重量が増し、緊急時に持ち運ぶことが困難になるため、限られた重さの中で個人に合った適切な物を選ぶ必要があります。しかし、Webサイトやチェックリストで紹介されている物品の種類は膨大で、自分に本当に必要な物を判断するのは難しいのが現状です。さらに、被災状況を具体的にイメージすることが重要とされる一方で、見落としも起こりやすいという課題があります。そこで本研究では、ユーザが作成した非常持ち出し袋では対応できない状況をシステムが提示することで、未考慮の状況に気づきを与える支援システムを提案しました。この提案手法と、Web検索のみで情報収集を行う従来手法を比較する実験を実施したところ、提案手法は全ての被験者に対して新たな状況への気づきを促し、より個人に適した非常持ち出し袋の検討に貢献することが明らかになりました。また、災害への想像力や対応力の一部項目にも改善が見られました。",
      technologies: ["JavaScript", "HTML/CSS", "Firebase", "研究"],
      image: "/kenkyu1.png",
      demoUrl: "#",
      githubUrl: "#",
      developmentTime: "6ヶ月",
      teamSize: "個人研究",
      role: "研究全般（企画・設計・実装・評価・論文執筆）",
      challenges: [
        "非常持ち出し袋作成に正解がない中での支援方法の模索",
        "ユーザーに自然に考えてもらう仕組みの設計",
        "システムの有効性評価方法の確立",
      ],
      solutions: ["未考慮状況の提示による気づき支援アプローチ", "ユーザビリティテストによる検証"],
      learnings: [
        "論理的思考力の向上",
        "研究手法とプロセスの理解",
        "問題設定と解決アプローチの重要性",
        "学術的な文章作成スキル",
      ],
      results: ["新しい災害対策支援手法の提案", "研究論文の完成", "論理的思考力の大幅な向上", "社会課題解決への貢献"],
    },
    "6": {
      title: "りふぁまる",
      description: "研究室指定参考文献形式変換ツール",
      longDescription:
        "研究報告、論文、書籍、URLを簡単に研究室指定の参考文献形式に変換することができるツールです。団内ハッカソンでの個人開発プロジェクトとして開始し、現在Supabaseを用いて参考文献管理機能を開発中です。アジャイル開発手法を採用し、基本的な変換機能が完成次第、研究室で実際に使ってもらう予定です。",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Supabase"],
      image: "/refamaru.png",
      demoUrl: "https://references-xi.vercel.app/",
      githubUrl: "#",
      developmentTime: "1ヶ月（開発継続中）",
      teamSize: "個人開発",
      role: "全機能の設計・実装（企画、UI/UX、フロントエンド、バックエンド）",
      challenges: [
        "一から技術を学びながらの開発",
        "バージョンの違いによるエラーの解決",
        "SPAの必要性の判断と実装",
        "モダンな技術スタックの習得",
      ],
      solutions: [
        "Next.js、TypeScript、Tailwind CSS、shadcn/uiの技術選定",
        "公式ドキュメントを活用した効率的な学習",
        "直感的に分かりやすいUIの設計（shadcnで統一）",
        "コンポーネント指向を意識した開発",
        "アジャイル開発による早期フィードバックの獲得",
      ],
      learnings: [
        "モダンなフロントエンド技術の習得",
        "コンポーネント指向設計の重要性",
        "ユーザーフィードバックを活用した開発手法",
        "技術選定の判断基準",
      ],
      results: [
        "直感的で使いやすいUI/UXの実現",
        "基本的な参考文献変換機能の完成",
        "Vercelでのデプロイとライブデモの公開",
        "研究室での実用化に向けた準備完了",
      ],
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
          <p className="text-gray-600">プロダクト詳細を読み込み中...</p>
        </div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-black mb-4">404</h1>
          <p className="text-gray-600 mb-8">プロダクトが見つかりませんでした</p>
          <Link href="/products">
            <Button className="bg-black text-white hover:bg-gray-800">
              <ArrowLeft className="w-4 h-4 mr-2" />
              プロダクト一覧に戻る
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
            プロダクト一覧に戻る
          </Button>
        </Link>

        {/* Hero Section */}
        <div className="mb-12">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl mb-8">
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.title}
              className="w-full h-64 md:h-96 object-contain bg-gray-50"
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
              onClick={() => window.open(product.demoUrl, "_blank")}
              disabled={product.demoUrl === "#"}
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              ライブデモを見る
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-black text-black hover:bg-gray-50 hover:scale-105 transition-all duration-300 flex-1"
              onClick={() => window.open(product.githubUrl, "_blank")}
              disabled={product.githubUrl === "#"}
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
              <CardTitle className="text-2xl text-black">プロダクト概要</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed mb-6">{product.longDescription}</p>

              <div>
                <h4 className="font-semibold text-black mb-3">使用技術・スキル</h4>
                <div className="flex flex-wrap gap-2">
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
          <h3 className="text-2xl font-bold text-black mb-6">他のプロダクトも見る</h3>
          <Link href="/products">
            <Button
              size="lg"
              variant="outline"
              className="border-black text-black hover:bg-gray-50 hover:scale-105 transition-all duration-300"
            >
              すべてのプロダクトを見る
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
