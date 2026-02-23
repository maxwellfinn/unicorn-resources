import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, UserCheck } from 'lucide-react'
import { UnicornHorn } from './UnicornHorn'

const CommunityBadge = ({ authorName }) => (
  <div className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full">
    <UserCheck className="w-3.5 h-3.5 text-purple-400" />
    <span className="text-xs font-medium text-purple-300">
      Community &bull; {authorName}
    </span>
  </div>
)

export { CommunityBadge }

export default function PromptCard({ prompt, onSelect, isCommunity = false }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className={`glass rounded-2xl p-6 card-hover cursor-pointer group ${
        isCommunity ? 'border border-purple-500/20' : ''
      }`}
      onClick={() => onSelect(prompt)}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-um-cyan to-um-blue flex items-center justify-center">
          <UnicornHorn className="w-6 h-6" />
        </div>
        <div className="flex flex-col items-end gap-2">
          {prompt.featured && (
            <span className="tag tag-cyan flex items-center gap-1">
              <UnicornHorn className="w-3 h-3" /> Featured
            </span>
          )}
          {isCommunity && prompt.authorName && (
            <CommunityBadge authorName={prompt.authorName} />
          )}
        </div>
      </div>
      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-um-cyan transition-colors">
        {prompt.title}
      </h3>
      <p className="text-gray-400 text-sm mb-4 line-clamp-2">
        {prompt.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {prompt.tags.slice(0, 4).map(tag => (
          <span key={tag} className="px-2 py-1 bg-white/5 rounded-lg text-xs text-gray-400">
            {tag}
          </span>
        ))}
        {prompt.tags.length > 4 && (
          <span className="px-2 py-1 text-xs text-gray-500">+{prompt.tags.length - 4}</span>
        )}
      </div>
      <div className="flex items-center justify-between pt-4 border-t border-white/5">
        <span className="text-xs text-gray-500 font-mono">{prompt.subcategory?.replace(/-/g, ' ')}</span>
        <span className="text-um-cyan text-sm flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          View Prompts <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </motion.div>
  )
}
