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
  Trophy,
  Car,
  Globe,
  Code,
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
    { name: "Python", level: 4, category: "Language" },
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
      title: "技術とビジネスの両面から価値創出",
      description: "単なる技術者ではなく、ビジネス視点も持ちながら社会に価値を届けられる環境を求めています。",
      details: "ユーザーの課題やニーズを深く理解し、技術を活用して解決策を提案できるエンジニアを目指しています。",
    },
    {
      icon: Lightbulb,
      title: "自分の将来にワクワクできる環境",
      description:
        "やりがいのある仕事、尊敬できる同僚、共感できるミッション・ビジョン・バリューがある企業を重視しています。",
      details: "自分の将来が想像でき、成長し続けられる環境で働きたいと考えています。",
    },
    {
      icon: Users,
      title: "若手でも裁量を持ち、挑戦できる環境",
      description: "年次に関係なく、アイデアを形にし、責任を持って取り組める環境を求めています。",
      details: "失敗を恐れずに挑戦でき、その経験から学び成長できる文化を大切にしています。",
    },
  ]

  const qualifications = [
    { date: "2021年10月", name: "普通自動車第一種免許", icon: Car },
    { date: "2023年12月", name: "基本情報技術者試験", icon: Code },
    { date: "2024年7月", name: "TOEIC® L&R Test 695点", icon: Globe },
  ]

  const education = [
    {
      period: "2021年4月 - 2025年3月",
      institution: "和歌山大学システム工学部システム工学科",
      status: "卒業",
      description: "情報工学を専攻し、理論と実践の両面から技術を学習",
    },
    {
      period: "2025年4月 - 2027年3月",
      institution: "和歌山大学大学院システム工学研究科システム工学専攻修士課程",
      status: "修了見込み",
      description: "非常持ち出し袋作成支援システムの研究に従事",
    },
  ]

  const experiences = [
    {
      period: "2024年 - 現在",
      title: "学生IT団体 副代表",
      company: "研究室内IT団体",
      description:
        "立ち上げメンバーとして副代表を務め、週1回のLT会の企画・運営を担当。メンバーが挑戦しやすい環境づくりに注力。",
      achievements: ["週1回の勉強会を継続運営", "ハッカソン・ビジネスコンテストでの受賞をサポート"],
      skills: ["リーダーシップ", "企画・運営", "チームビルディング"],
    },
    {
      period: "2024年",
      title: "ハッカソン・ビジネスコンテスト参加",
      company: "複数のイベント",
      description: "技育CAMP Vol.23で最優秀賞、和歌山大学学生挑戦コンテスト2024で企業賞を受賞。",
      achievements: ["技育CAMP Vol.23 最優秀賞", "和歌山大学学生挑戦コンテスト2024 企業賞"],
      skills: ["プレゼンテーション", "チーム開発", "ユーザー視点"],
    },
  ]

  const strengths = [
    {
      title: "チームで協働しながら価値ある成果を生み出す力",
      description: "相手が何を考え、何を求めているのかを常に意識し、全員が力を発揮できる雰囲気づくりを心がけています。",
      examples: ["孤立しがちなメンバーへの自然な声かけ", "メンバー間の調整役", "ハッカソンでの最優秀賞受賞"],
    },
    {
      title: "社会課題を発見し、技術で解決策を提案する力",
      description: "研究では「社会課題を自ら発見し、情報技術で解決策を提案する」スタイルで取り組んでいます。",
      examples: ["非常持ち出し袋作成支援システムの提案", "ユーザー視点を重視した開発", "価値創出への意識"],
    },
  ]

  const weaknesses = [
    {
      title: "利他的になりすぎて自分の意見を後回しにしてしまう",
      description:
        "チームの調和を重視するあまり、自分の意見や希望を伝えるのが遅れ、意思決定を遅らせてしまうことがありました。",
      improvement:
        "「意見を伝えることもチームへの貢献」と捉え、自分の考えを整理して適切なタイミングで伝えるよう意識しています。",
    },
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
            技術を軸に、人や社会に価値を届けられるエンジニアを目指しています。
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
                  和歌山大学大学院システム工学研究科の石田大翔です。高校生の時に「社会に大きなインパクトを与えたい」と考え、
                  ITを活用すれば小さなコストで大きな価値を創出できると気づき、理系が苦手でしたが情報学の道を選びました。
                </p>
                <p className="text-gray-600 leading-relaxed">
                  大学院では非常持ち出し袋の作成支援システムの研究に取り組み、社会課題を技術で解決することの意義を学んでいます。
                  また、研究室内の学生IT団体の副代表として、週1回のLT会を企画・運営し、仲間が挑戦しやすい環境づくりに注力しています。
                </p>
                <p className="text-gray-600 leading-relaxed">
                  ハッカソンやビジネスコンテストにも積極的に参加し、技育CAMP Vol.23で最優秀賞、
                  和歌山大学学生挑戦コンテスト2024で企業賞を受賞しました。
                  これらの経験を通じて、「誰かの困りごとを技術で解決すること」にやりがいを感じています。
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
                  和歌山県在住
                </div>
                <div className="flex items-center text-gray-600">
                  <Calendar className="w-4 h-4 mr-2" aria-hidden="true" />
                  2003年生まれ（21歳）
                </div>
                <div className="flex items-center text-gray-600">
                  <GraduationCap className="w-4 h-4 mr-2" aria-hidden="true" />
                  和歌山大学大学院 修士1年
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-black">就活ステータス</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">2027年卒</div>
                  <Badge className="bg-green-500 text-white">積極的に活動中</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Qualifications */}
        <div
          className={`mb-16 transition-all duration-1000 delay-300 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl font-bold text-black mb-8 text-center">資格・スコア</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {qualifications.map((qual, index) => (
              <Card
                key={index}
                className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-6 text-center">
                  <qual.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                  <h3 className="font-semibold text-black mb-2">{qual.name}</h3>
                  <p className="text-gray-600 text-sm">{qual.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education */}
        <div
          className={`mb-16 transition-all duration-1000 delay-400 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl font-bold text-black mb-8 text-center">学歴</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card
                key={index}
                className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                    <div>
                      <CardTitle className="text-lg text-black">{edu.institution}</CardTitle>
                      <CardDescription className="text-blue-600 font-medium">{edu.description}</CardDescription>
                    </div>
                    <div className="flex flex-col items-end mt-2 md:mt-0">
                      <Badge variant="outline" className="mb-1">
                        {edu.period}
                      </Badge>
                      <Badge className="bg-green-500 text-white">{edu.status}</Badge>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Job Hunting Values */}
        <div
          className={`mb-16 transition-all duration-1000 delay-500 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
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
          className={`mb-16 transition-all duration-1000 delay-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl font-bold text-black mb-8 text-center">活動・実績</h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                    <div>
                      <CardTitle className="text-xl text-black flex items-center">
                        {exp.title}
                        {exp.achievements.some((achievement) => achievement.includes("賞")) && (
                          <Trophy className="w-5 h-5 ml-2 text-yellow-500" />
                        )}
                      </CardTitle>
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
                          <li key={i} className={achievement.includes("賞") ? "font-medium text-yellow-700" : ""}>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium text-black mb-2">身につけたスキル</h4>
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

        {/* Strengths & Weaknesses */}
        <div
          className={`mb-16 transition-all duration-1000 delay-800 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Strengths */}
            <div>
              <h2 className="text-3xl font-bold text-black mb-8 text-center">強み</h2>
              <div className="space-y-6">
                {strengths.map((strength, index) => (
                  <Card
                    key={index}
                    className="bg-green-50 border-green-200 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <CardHeader>
                      <CardTitle className="text-lg text-black">{strength.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{strength.description}</p>
                      <div>
                        <h4 className="font-medium text-black mb-2">具体例</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                          {strength.examples.map((example, i) => (
                            <li key={i}>{example}</li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Weaknesses */}
            <div>
              <h2 className="text-3xl font-bold text-black mb-8 text-center">弱み・改善点</h2>
              <div className="space-y-6">
                {weaknesses.map((weakness, index) => (
                  <Card
                    key={index}
                    className="bg-orange-50 border-orange-200 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <CardHeader>
                      <CardTitle className="text-lg text-black">{weakness.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{weakness.description}</p>
                      <div className="border-t pt-4">
                        <h4 className="font-medium text-black mb-2">改善への取り組み</h4>
                        <p className="text-gray-600 text-sm">{weakness.improvement}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Future Vision */}
        <Card
          className={`bg-gradient-to-r from-gray-900 to-black text-white shadow-2xl transition-all duration-1000 delay-900 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <CardContent className="p-8 text-center">
            <Heart className="w-12 h-12 mx-auto mb-4 text-red-400" aria-hidden="true" />
            <h2 className="text-2xl font-bold mb-4">目指すエンジニア像</h2>
            <p className="text-lg leading-relaxed max-w-4xl mx-auto mb-6">
              私が目指すのは、「技術を軸に、人や社会に価値を届けられるエンジニア」です。
              単にプログラムを書くことにとどまらず、ユーザーの課題やニーズを深く理解し、
              それに応える形で技術を活用できるエンジニアを理想としています。
            </p>
            <p className="text-base leading-relaxed max-w-4xl mx-auto text-gray-300">
              5年後にはサービス全体を俯瞰できる立場で、10年後には新規事業の立ち上げやマネジメントにも挑戦したいと考えています。
              「ユーザーにとって価値のあるサービスとは何か」を常に問い続け、その実現に責任を持てるエンジニアを目指します。
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
