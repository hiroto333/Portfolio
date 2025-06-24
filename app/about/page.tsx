"use client"

import {
  Star,
  MapPin,
  Calendar,
  GraduationCap,
  Heart,
  Target,
  Users,
  Lightbulb,
  Award,
  ChevronDown,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState, useEffect } from "react"

export default function AboutPage() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const technicalSkills = [
    { name: "React", level: 4, category: "Frontend" },
    { name: "Next.js", level: 4, category: "Frontend" },
    { name: "TypeScript", level: 3, category: "Language" },
    { name: "JavaScript", level: 4, category: "Language" },
    { name: "HTML/CSS", level: 5, category: "Frontend" },
    { name: "Tailwind CSS", level: 4, category: "Frontend" },
    { name: "Node.js", level: 3, category: "Backend" },
    { name: "Python", level: 3, category: "Language" },
    { name: "Git", level: 4, category: "Tools" },
    { name: "Figma", level: 3, category: "Design" },
    { name: "Docker", level: 2, category: "Tools" },
    { name: "AWS", level: 2, category: "Cloud" },
  ]

  const renderStars = (level: number, skillName: string) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 transition-all duration-300 ${
          i < level
            ? hoveredSkill === skillName
              ? "text-yellow-400 fill-yellow-400 scale-125"
              : "text-yellow-500 fill-yellow-500"
            : "text-gray-300"
        }`}
        aria-hidden="true"
      />
    ))
  }

  const jobHuntingValues = [
    {
      icon: Target,
      title: "ユーザーファースト",
      description: "技術のための技術ではなく、ユーザーの課題解決を第一に考える開発を心がけています。",
      details: "ユーザビリティテストやアクセシビリティを重視し、誰もが使いやすいプロダクトの開発を目指しています。",
    },
    {
      icon: Lightbulb,
      title: "継続的な学習",
      description: "技術の進歩が早いIT業界で、常に新しい技術をキャッチアップし続ける姿勢を大切にしています。",
      details: "月5冊の技術書読書、オンライン学習、技術コミュニティへの参加を通じて学習を継続しています。",
    },
    {
      icon: Users,
      title: "チームワーク",
      description: "個人の技術力だけでなく、チーム全体のパフォーマンス向上に貢献できる開発者を目指しています。",
      details: "コードレビュー、ペアプログラミング、知識共有を通じてチーム全体のスキル向上に貢献します。",
    },
  ]

  const experiences = [
    {
      period: "2024年4月 - 現在",
      title: "フロントエンドエンジニア（インターン）",
      company: "株式会社テックスタートアップ",
      description:
        "React/Next.jsを使用したWebアプリケーションの開発に従事。ユーザビリティの向上とパフォーマンス最適化を担当。",
      achievements: ["ページ読み込み速度を40%改善", "新機能のUI/UX設計から実装まで担当"],
      skills: ["React", "Next.js", "TypeScript", "Figma"],
    },
    {
      period: "2023年9月 - 2024年3月",
      title: "Webサイト制作（フリーランス）",
      company: "個人事業",
      description: "地域の中小企業向けのWebサイト制作を3件担当。要件定義からデプロイまで一貫して対応。",
      achievements: ["クライアント満足度100%", "SEO対策により検索順位を平均30位向上"],
      skills: ["WordPress", "HTML/CSS", "JavaScript", "SEO"],
    },
  ]

  const hobbies = [
    { name: "プログラミング", icon: "💻", description: "新しい技術の学習と個人プロジェクトの開発" },
    { name: "読書", icon: "📚", description: "技術書からビジネス書まで月5冊ペース" },
    { name: "カフェ巡り", icon: "☕", description: "作業環境を変えてクリエイティビティを刺激" },
    { name: "写真撮影", icon: "📸", description: "UI/UXデザインの感性を磨くため" },
  ]

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
            About Me
            <span className="text-4xl ml-2" role="img" aria-label="ロケット">
              🚀
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            技術への情熱と人への思いやりを持って、より良い未来を創造したいと考えています。
          </p>
        </div>

        {/* Profile Overview */}
        <div
          className={`grid lg:grid-cols-3 gap-8 mb-16 transition-all duration-1000 delay-200 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="lg:col-span-2">
            <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-black flex items-center">
                  <GraduationCap className="w-6 h-6 mr-2" aria-hidden="true" />
                  自己紹介
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  情報系大学3年生の田中太郎です。高校時代にプログラミングに出会い、
                  「コードで人々の生活をより豊かにしたい」という想いから本格的に学習を開始しました。
                </p>
                <p className="text-gray-600 leading-relaxed">
                  大学では情報工学を専攻し、理論と実践の両面から技術を学んでいます。
                  特にフロントエンド開発に興味を持ち、React/Next.jsを中心とした
                  モダンなWeb技術の習得に力を入れています。
                </p>
                <p className="text-gray-600 leading-relaxed">
                  現在はスタートアップ企業でインターンとして実務経験を積みながら、
                  個人プロジェクトにも積極的に取り組んでいます。
                  技術力の向上だけでなく、ビジネス視点も身につけることを意識しています。
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-black">基本情報</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-4 h-4 mr-2" aria-hidden="true" />
                  東京都在住
                </div>
                <div className="flex items-center text-gray-600">
                  <Calendar className="w-4 h-4 mr-2" aria-hidden="true" />
                  2002年生まれ（22歳）
                </div>
                <div className="flex items-center text-gray-600">
                  <GraduationCap className="w-4 h-4 mr-2" aria-hidden="true" />
                  ○○大学 情報工学科 3年
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-black">就活ステータス</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">2025年卒</div>
                  <Badge className="bg-green-500 text-white">積極的に活動中</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Job Hunting Values */}
        <div
          className={`mb-16 transition-all duration-1000 delay-400 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl font-bold text-black mb-8 text-center">就活の軸</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {jobHuntingValues.map((value, index) => (
              <Card
                key={index}
                className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
                onClick={() => toggleSection(`value-${index}`)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault()
                    toggleSection(`value-${index}`)
                  }
                }}
                aria-expanded={expandedSection === `value-${index}`}
              >
                <CardHeader>
                  <CardTitle className="text-lg text-black flex items-center justify-between">
                    <div className="flex items-center">
                      <value.icon className="w-6 h-6 mr-2 text-blue-600" aria-hidden="true" />
                      {value.title}
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        expandedSection === `value-${index}` ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm leading-relaxed mb-2">{value.description}</p>
                  {expandedSection === `value-${index}` && (
                    <p className="text-gray-500 text-sm leading-relaxed border-t pt-3 mt-3">{value.details}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Technical Skills */}
        <div
          className={`mb-16 transition-all duration-1000 delay-600 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl font-bold text-black mb-8 text-center">技術スキル</h2>
          <Card className="bg-white border-gray-200 shadow-lg">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {technicalSkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group cursor-pointer p-4 rounded-lg hover:bg-gray-50 transition-all duration-300 focus-within:ring-2 focus-within:ring-blue-500"
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    tabIndex={0}
                    role="button"
                    aria-label={`${skill.name}: ${skill.level}段階中${skill.level}レベル`}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-black group-hover:text-blue-600 transition-colors">
                        {skill.name}
                      </span>
                      <Badge variant="outline" className="text-xs">
                        {skill.category}
                      </Badge>
                    </div>
                    <div className="flex space-x-1" role="img" aria-label={`${skill.level}つ星評価`}>
                      {renderStars(skill.level, skill.name)}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Experience */}
        <div
          className={`mb-16 transition-all duration-1000 delay-800 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl font-bold text-black mb-8 text-center">経験・実績</h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                    <div>
                      <CardTitle className="text-xl text-black">{exp.title}</CardTitle>
                      <CardDescription className="text-blue-600 font-medium">{exp.company}</CardDescription>
                    </div>
                    <Badge variant="outline" className="mt-2 md:mt-0">
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{exp.description}</p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-black flex items-center mb-2">
                        <Award className="w-4 h-4 mr-2" aria-hidden="true" />
                        主な成果
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium text-black mb-2">使用技術</h4>
                      <div className="flex flex-wrap gap-1">
                        {exp.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Hobbies */}
        <div
          className={`mb-16 transition-all duration-1000 delay-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl font-bold text-black mb-8 text-center">趣味・興味</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hobbies.map((hobby, index) => (
              <Card
                key={index}
                className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer focus-within:ring-2 focus-within:ring-blue-500"
                tabIndex={0}
                role="button"
                aria-label={`趣味: ${hobby.name} - ${hobby.description}`}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3" role="img" aria-label={hobby.name}>
                    {hobby.icon}
                  </div>
                  <h3 className="font-semibold text-black mb-2">{hobby.name}</h3>
                  <p className="text-gray-600 text-sm">{hobby.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Personal Statement */}
        <Card
          className={`bg-gradient-to-r from-gray-900 to-black text-white shadow-2xl transition-all duration-1000 delay-1200 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <CardContent className="p-8 text-center">
            <Heart className="w-12 h-12 mx-auto mb-4 text-red-400" aria-hidden="true" />
            <h2 className="text-2xl font-bold mb-4">私の想い</h2>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto">
              技術は手段であり、目的ではありません。私は技術を通じて、
              人々の生活をより豊かで便利にし、社会の課題解決に貢献したいと考えています。
              そのために、常に学び続け、チームと協力し、ユーザーの声に耳を傾ける開発者でありたいと思います。
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
