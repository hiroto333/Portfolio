"use client"

import React from "react"
import { AlertCircle, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
}

interface ErrorBoundaryProps {
  children: React.ReactNode
  fallback?: React.ComponentType<{ error?: Error; resetError: () => void }>
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo)
  }

  resetError = () => {
    this.setState({ hasError: false, error: undefined })
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        const FallbackComponent = this.props.fallback
        return <FallbackComponent error={this.state.error} resetError={this.resetError} />
      }

      return (
        <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 flex items-center justify-center px-6">
          <div className="text-center max-w-md">
            <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-black mb-4">エラーが発生しました</h1>
            <p className="text-gray-600 mb-6">
              申し訳ございません。予期しないエラーが発生しました。 ページを再読み込みしてもう一度お試しください。
            </p>
            <Button
              onClick={this.resetError}
              className="bg-black text-white hover:bg-gray-800 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              再試行
            </Button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
