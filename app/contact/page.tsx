"use client"
import { Mail, Github, Copy, Check } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function ContactPage() {
  const [copiedEmail, setCopiedEmail] = useState(false)

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("s266021@wakayama-u.ac.jp")
      setCopiedEmail(true)
      setTimeout(() => setCopiedEmail(false), 2000)
    } catch (err) {
      // フォールバック: テキスト選択
      const textArea = document.createElement("textarea")
      textArea.value = "s266021@wakayama-u.ac.jp"
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand("copy")
      document.body.removeChild(textArea)
      setCopiedEmail(true)
      setTimeout(() => setCopiedEmail(false), 2000)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">Contact</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">お気軽にご連絡ください。</p>
        </div>

        <div className="flex justify-center">
          <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 w-full max-w-md">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-black">連絡先</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Email */}
              <div className="p-4 rounded-lg hover:bg-gray-50 transition-all duration-300 group">
                <div className="flex items-center mb-3">
                  <Mail className="w-6 h-6 text-gray-600 hover:text-red-500 transition-colors mr-4" />
                  <div>
                    <div className="font-medium text-black group-hover:text-gray-600 transition-colors">Email</div>
                  </div>
                </div>
                <div className="flex items-center justify-between bg-gray-50 p-3 rounded-md">
                  <span className="text-sm text-gray-700 font-mono">s266021@wakayama-u.ac.jp</span>
                  <Button onClick={handleCopyEmail} size="sm" variant="ghost" className="ml-2 hover:bg-gray-200">
                    {copiedEmail ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>
                {copiedEmail && <p className="text-xs text-green-600 mt-1">メールアドレスをコピーしました！</p>}
              </div>

              {/* GitHub */}
              <a
                href="https://github.com/hiroto333"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 rounded-lg hover:bg-gray-50 transition-all duration-300 group hover:scale-105 hover:shadow-md"
              >
                <Github className="w-6 h-6 text-gray-600 hover:text-gray-800 transition-colors mr-4" />
                <div>
                  <div className="font-medium text-black group-hover:text-gray-600 transition-colors">GitHub</div>
                  <div className="text-sm text-gray-500">github.com/hiroto333</div>
                </div>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
