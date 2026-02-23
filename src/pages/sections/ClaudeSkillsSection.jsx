import React, { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Zap, Download, BookOpen } from 'lucide-react'
import { skillIconMap } from '../../utils/iconMap'
import { claudeSkills, skillCategories } from '../../data/prompts'

export default function ClaudeSkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState('')

  const filteredSkills = useMemo(() => {
    if (!selectedCategory) return claudeSkills
    return claudeSkills.filter(s => s.category === selectedCategory)
  }, [selectedCategory])

  return (
    <div className="page-transition">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-4">
          <Zap className="w-4 h-4 text-um-cyan" />
          <span className="text-sm text-gray-300">{claudeSkills.length} Claude Skills</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Claude Skills</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Download and install these skills in Claude Code for powerful marketing automation. Chain them together for complete campaigns.
        </p>
      </div>
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        <button onClick={() => setSelectedCategory('')} className={`px-4 py-2 rounded-lg font-medium transition-all ${!selectedCategory ? 'bg-um-cyan text-white' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}>
          All Skills
        </button>
        {skillCategories.map(cat => (
          <button key={cat.id} onClick={() => setSelectedCategory(cat.id)} className={`px-4 py-2 rounded-lg font-medium transition-all ${selectedCategory === cat.id ? 'bg-um-cyan text-white' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}>
            {cat.name}
          </button>
        ))}
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {filteredSkills.map(skill => {
          const Icon = skillIconMap[skill.icon] || Zap
          const category = skillCategories.find(c => c.id === skill.category)
          return (
            <motion.div key={skill.id} layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass rounded-2xl p-6 card-hover">
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category?.color || 'from-gray-500 to-gray-600'} flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <span className="tag tag-orange">{category?.name}</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{skill.name}</h3>
              <p className="text-gray-400 text-sm mb-3">{skill.description}</p>
              <p className="text-xs text-gray-500 font-mono mb-4">{skill.instructions}</p>
              {skill.dependencies && skill.dependencies.length > 0 && (
                <div className="mb-4 p-3 bg-white/5 rounded-lg">
                  <span className="text-xs text-gray-500 uppercase tracking-wider">Works best with:</span>
                  <div className="flex flex-wrap gap-1.5 mt-1.5">
                    {skill.dependencies.map(dep => (
                      <span key={dep} className="px-2 py-0.5 bg-um-cyan/10 border border-um-cyan/20 rounded text-xs text-um-cyan font-mono">{dep}</span>
                    ))}
                  </div>
                </div>
              )}
              {skill.chainsWith && skill.chainsWith.length > 0 && (
                <div className="mb-4 p-3 bg-white/5 rounded-lg">
                  <span className="text-xs text-gray-500 uppercase tracking-wider">Chains with:</span>
                  <div className="flex flex-wrap gap-1.5 mt-1.5">
                    {skill.chainsWith.map(chain => (
                      <span key={chain} className="px-2 py-0.5 bg-purple-500/10 border border-purple-500/20 rounded text-xs text-purple-300 font-mono">{chain}</span>
                    ))}
                  </div>
                </div>
              )}
              <a href={skill.downloadUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 text-gray-300 rounded-lg transition-colors">
                <Download className="w-4 h-4" /> Download Skill
              </a>
            </motion.div>
          )
        })}
      </div>
      <div className="glass rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <BookOpen className="w-5 h-5 text-um-cyan" />
          <h3 className="text-lg font-semibold text-white">How to Install Skills</h3>
        </div>
        <ol className="space-y-3 text-gray-400">
          <li className="flex gap-3">
            <span className="w-6 h-6 rounded-full bg-um-cyan/20 text-um-cyan text-sm flex items-center justify-center flex-shrink-0">1</span>
            <span>Download the .md skill file from the link above</span>
          </li>
          <li className="flex gap-3">
            <span className="w-6 h-6 rounded-full bg-um-cyan/20 text-um-cyan text-sm flex items-center justify-center flex-shrink-0">2</span>
            <span>In Claude Code, go to Settings &rarr; Skills and import the file</span>
          </li>
          <li className="flex gap-3">
            <span className="w-6 h-6 rounded-full bg-um-cyan/20 text-um-cyan text-sm flex items-center justify-center flex-shrink-0">3</span>
            <span>Enable the skill in your project settings</span>
          </li>
          <li className="flex gap-3">
            <span className="w-6 h-6 rounded-full bg-um-cyan/20 text-um-cyan text-sm flex items-center justify-center flex-shrink-0">4</span>
            <span>Invoke with /skill-name or let it auto-trigger based on context</span>
          </li>
        </ol>
      </div>
    </div>
  )
}
