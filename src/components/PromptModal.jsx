import React, { useState, useCallback, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion } from 'framer-motion'
import { X, Copy, Check, Target, Sparkles, Zap, Lightbulb } from 'lucide-react'
import { UnicornHorn } from './UnicornHorn'
import { CommunityBadge } from './PromptCard'
import { difficultyLevels } from '../data/prompts'

export default function PromptModal({ prompt, onClose }) {
  const [selectedLevel, setSelectedLevel] = useState('basic')
  const [copied, setCopied] = useState(false)

  const hasLevels = prompt.prompts && (prompt.prompts.basic || prompt.prompts.advanced || prompt.prompts.expert)
  const currentPrompt = hasLevels ? prompt.prompts[selectedLevel] : prompt.prompt

  useEffect(() => {
    const handleEscape = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const copyToClipboard = useCallback(async () => {
    await navigator.clipboard.writeText(currentPrompt)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [currentPrompt])

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] modal-backdrop flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 20 }}
        className="bg-um-dark border border-gray-800 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-gray-800 flex-shrink-0">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-um-cyan to-um-blue flex items-center justify-center flex-shrink-0">
                <UnicornHorn className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <h2 className="text-2xl font-bold text-white truncate">{prompt.title}</h2>
                <p className="text-gray-400 mt-1 line-clamp-2">{prompt.description}</p>
              </div>
            </div>
            <button onClick={onClose} className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors flex-shrink-0 ml-4">
              <X className="w-5 h-5" />
            </button>
          </div>
          {prompt.authorName && <div className="mt-4"><CommunityBadge authorName={prompt.authorName} /></div>}
          <div className="flex flex-wrap gap-2 mt-4">
            {prompt.tags?.map(tag => (
              <span key={tag} className="px-2 py-1 bg-white/5 rounded-lg text-xs text-gray-400">{tag}</span>
            ))}
          </div>
        </div>

        {/* Difficulty Level Tabs */}
        {hasLevels && (
          <div className="p-4 border-b border-gray-800 flex gap-2 flex-shrink-0">
            {difficultyLevels.map(level => (
              <button
                key={level}
                onClick={() => setSelectedLevel(level.toLowerCase())}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedLevel === level.toLowerCase() ? 'bg-um-cyan text-white' : 'bg-white/5 text-gray-400 hover:bg-white/10'
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        )}

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto flex-1">
          {prompt.strategicUseCase && (
            <div className="mb-6 p-4 bg-gradient-to-r from-um-cyan/10 to-um-blue/10 border border-um-cyan/20 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <Target className="w-4 h-4 text-um-cyan" />
                <span className="text-sm font-semibold text-um-cyan">Strategic Use Case</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">{prompt.strategicUseCase}</p>
            </div>
          )}
          {prompt.whenToUse && (
            <div className="mb-6 p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-green-400" />
                <span className="text-sm font-semibold text-green-400">When To Use</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">{prompt.whenToUse}</p>
            </div>
          )}
          {prompt.keyVariables && prompt.keyVariables.length > 0 && (
            <div className="mb-6 p-4 bg-white/5 border border-white/10 rounded-xl">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-4 h-4 text-yellow-400" />
                <span className="text-sm font-semibold text-yellow-400">Key Variables to Customize</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {prompt.keyVariables.map((v, i) => (
                  <span key={i} className="px-3 py-1.5 bg-yellow-500/10 border border-yellow-500/20 rounded-lg text-xs text-yellow-300 font-mono">[{v}]</span>
                ))}
              </div>
            </div>
          )}
          <div className="relative">
            <div className="code-block text-gray-300 text-sm leading-relaxed whitespace-pre-wrap">{currentPrompt}</div>
            <button onClick={copyToClipboard} className="absolute top-3 right-3 p-2 bg-um-gray hover:bg-um-cyan rounded-lg transition-colors">
              {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4 text-white" />}
            </button>
          </div>
          {prompt.proTip && (
            <div className="mt-6 p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-4 h-4 text-purple-400" />
                <span className="text-sm font-semibold text-purple-400">Pro Tip</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">{prompt.proTip}</p>
            </div>
          )}
          {prompt.exampleProduct && (
            <div className="mt-4 p-4 bg-white/5 rounded-xl">
              <span className="text-xs text-gray-500 uppercase tracking-wider">Example Use</span>
              <p className="text-gray-300 mt-1">Replace [PRODUCT] with: <span className="text-um-cyan">{prompt.exampleProduct}</span></p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-800 flex items-center justify-between flex-shrink-0">
          <p className="text-sm text-gray-500">Replace bracketed [PLACEHOLDERS] with your details</p>
          <button onClick={copyToClipboard} className="px-6 py-3 bg-um-cyan hover:bg-um-cyan-dark text-white font-medium rounded-xl transition-colors flex items-center gap-2 btn-press">
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            {copied ? 'Copied!' : 'Copy Prompt'}
          </button>
        </div>
      </motion.div>
    </motion.div>,
    document.body
  )
}
