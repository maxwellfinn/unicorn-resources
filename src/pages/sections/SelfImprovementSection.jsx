import React from 'react'
import { motion } from 'framer-motion'
import { Rocket, Info, ChevronRight } from 'lucide-react'
import { skillIconMap } from '../../utils/iconMap'
import { selfImprovementPrompts } from '../../data/prompts'

export default function SelfImprovementSection({ onSelectPrompt }) {
  return (
    <div className="page-transition">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-4">
          <Rocket className="w-4 h-4 text-um-cyan" />
          <span className="text-sm text-gray-300">{selfImprovementPrompts.length} Enhancement Prompts</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Level Up Your Output</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Recursive self-improvement prompts that make everything else better. Run these AFTER generating content to stress-test, refine, and optimize.
        </p>
      </div>
      <div className="glass rounded-2xl p-6 mb-10">
        <div className="flex items-center gap-3 mb-4">
          <Info className="w-5 h-5 text-um-cyan" />
          <h3 className="text-lg font-semibold text-white">How These Work</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 bg-white/5 rounded-xl">
            <div className="w-8 h-8 rounded-lg bg-um-cyan/20 text-um-cyan flex items-center justify-center text-sm font-bold mb-3">1</div>
            <h4 className="text-white font-medium mb-1">Generate Your Content</h4>
            <p className="text-gray-400 text-sm">Use any ad prompt, front-end template, or skill to create your first draft.</p>
          </div>
          <div className="p-4 bg-white/5 rounded-xl">
            <div className="w-8 h-8 rounded-lg bg-um-cyan/20 text-um-cyan flex items-center justify-center text-sm font-bold mb-3">2</div>
            <h4 className="text-white font-medium mb-1">Run an Enhancement</h4>
            <p className="text-gray-400 text-sm">Paste the output into one of these prompts. They'll stress-test and improve it.</p>
          </div>
          <div className="p-4 bg-white/5 rounded-xl">
            <div className="w-8 h-8 rounded-lg bg-um-cyan/20 text-um-cyan flex items-center justify-center text-sm font-bold mb-3">3</div>
            <h4 className="text-white font-medium mb-1">Ship Better Work</h4>
            <p className="text-gray-400 text-sm">Apply the recommendations and ship content that's been battle-tested before going live.</p>
          </div>
        </div>
      </div>
      <div className="space-y-6">
        {selfImprovementPrompts.map((prompt, index) => {
          const Icon = skillIconMap[prompt.icon] || Rocket
          return (
            <motion.div
              key={prompt.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-2xl p-6 card-hover cursor-pointer group"
              onClick={() => onSelectPrompt(prompt)}
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-um-cyan transition-colors">{prompt.title}</h3>
                    <span className="text-um-cyan text-sm flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 ml-4">
                      View Prompt <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                  <p className="text-gray-400 mb-3">{prompt.description}</p>
                  <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg mb-3">
                    <span className="text-xs text-green-400 font-semibold uppercase tracking-wider">When to use:</span>
                    <p className="text-gray-300 text-sm mt-1">{prompt.whenToUse}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {prompt.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 bg-white/5 rounded-lg text-xs text-gray-400">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
