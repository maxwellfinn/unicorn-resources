import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ExternalLink, ArrowLeft } from 'lucide-react'
import { UnicornHorn } from './UnicornHorn'

export default function Header() {
  const location = useLocation()
  const isAIHub = location.pathname.startsWith('/ai-hub')
  const isHome = location.pathname === '/'

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-dark">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 no-underline">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-um-cyan to-um-blue flex items-center justify-center">
              <UnicornHorn className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-white">
                {isAIHub ? 'AI Hub' : 'Unicorn Resources'}
              </h1>
              <p className="text-xs text-gray-400 font-mono">
                {isAIHub ? 'Prompt & Skill Database' : 'Internal Team Hub'}
              </p>
            </div>
          </Link>

          <div className="flex items-center gap-4">
            {isAIHub && (
              <Link
                to="/"
                className="hidden md:flex items-center gap-1 text-gray-400 hover:text-white transition-colors no-underline text-sm"
              >
                <ArrowLeft className="w-3 h-3" /> All Resources
              </Link>
            )}
            <a
              href="https://unicornmarketers.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1 text-um-cyan hover:text-white transition-colors no-underline"
            >
              Visit Site <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
