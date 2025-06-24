"use client"

import type React from "react"

import { Mail, Github, Linkedin, Twitter, MapPin, Phone } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    alert("メッセージを送信しました！ありがとうございます。")
    setFormData({ name: "", email: "", subject: "", message: "" })
    setIsSubmitting(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      href: "mailto:hello@example.com",
      label: "hello@example.com",
      color: "hover:text-red-500",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com",
      label: "@username",
      color: "hover:text-gray-800",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com",
      label: "LinkedIn Profile",
      color: "hover:text-blue-600",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://twitter.com",
      label: "@username",
      color: "hover:text-blue-400",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
            Contact
            <span className="text-4xl ml-2">💬</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            新しいプロジェクトやコラボレーションの機会について
            お気軽にお声がけください。一緒に素晴らしいものを作りましょう。
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-black">メッセージを送る</CardTitle>
              <CardDescription className="text-gray-600">
                下記のフォームからお気軽にご連絡ください。24時間以内にお返事いたします。
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
                      お名前 *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="border-gray-300 focus:border-black focus:ring-black transition-colors"
                      placeholder="田中太郎"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                      メールアドレス *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="border-gray-300 focus:border-black focus:ring-black transition-colors"
                      placeholder="hello@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-black mb-2">
                    件名 *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="border-gray-300 focus:border-black focus:ring-black transition-colors"
                    placeholder="プロジェクトについて"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
                    メッセージ *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="border-gray-300 focus:border-black focus:ring-black transition-colors resize-none"
                    placeholder="お気軽にメッセージをお送りください..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-black text-white hover:bg-gray-800 hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                      送信中...
                    </>
                  ) : (
                    <>
                      <Mail className="w-4 h-4 mr-2" />
                      メッセージを送信
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Social Links */}
            <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-black">SNS・連絡先</CardTitle>
                <CardDescription className="text-gray-600">各種SNSでもつながりましょう</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {socialLinks.map((social) => (
                    <Link
                      key={social.name}
                      href={social.href}
                      className={`flex items-center p-4 rounded-lg hover:bg-gray-50 transition-all duration-300 group ${
                        hoveredSocial === social.name ? "scale-105 shadow-md" : ""
                      }`}
                      onMouseEnter={() => setHoveredSocial(social.name)}
                      onMouseLeave={() => setHoveredSocial(null)}
                    >
                      <social.icon className={`w-6 h-6 text-gray-600 ${social.color} transition-colors mr-4`} />
                      <div>
                        <div className="font-medium text-black group-hover:text-gray-600 transition-colors">
                          {social.name}
                        </div>
                        <div className="text-sm text-gray-500">{social.label}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Additional Info */}
            <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-black">その他の情報</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center p-4 rounded-lg hover:bg-gray-50 transition-colors">
                    <MapPin className="w-6 h-6 text-gray-600 hover:text-green-500 transition-colors mr-4" />
                    <div>
                      <div className="font-medium text-black">所在地</div>
                      <div className="text-sm text-gray-500">東京, 日本</div>
                    </div>
                  </div>

                  <div className="flex items-center p-4 rounded-lg hover:bg-gray-50 transition-colors">
                    <Phone className="w-6 h-6 text-gray-600 hover:text-blue-500 transition-colors mr-4" />
                    <div>
                      <div className="font-medium text-black">対応時間</div>
                      <div className="text-sm text-gray-500">平日 9:00 - 18:00 (JST)</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Response */}
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-black mb-2">迅速な対応をお約束</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                いただいたメッセージには24時間以内にお返事いたします。 緊急の場合は、SNSのDMでもお気軽にご連絡ください。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
