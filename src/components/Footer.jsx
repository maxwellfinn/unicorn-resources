import React from 'react'
import { UnicornHorn } from './UnicornHorn'

export default function Footer() {
  return (
    <footer className="pt-16 pb-8 text-center border-t border-gray-800 mt-16">
      <div className="flex items-center justify-center gap-2 mb-4">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-um-cyan to-um-blue flex items-center justify-center">
          <UnicornHorn className="w-4 h-4" />
        </div>
        <span className="font-bold text-white">Unicorn Marketers</span>
      </div>
      <p className="text-gray-500 text-sm">Elite Advertising Talent. Zero Hiring Headaches.</p>
      <p className="text-gray-600 text-xs mt-4">&copy; 2026 Unicorn Marketers. All rights reserved.</p>
    </footer>
  )
}
