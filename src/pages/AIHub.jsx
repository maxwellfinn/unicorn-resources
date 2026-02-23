import React, { useState } from 'react'
import { Routes, Route, Navigate, Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Image, Layout, Zap, Rocket } from 'lucide-react'
import { UnicornHorn } from '../components/UnicornHorn'
import StatsSection from '../components/StatsSection'
import SubmitPromptSection from '../components/SubmitPromptSection'
import PromptModal from '../components/PromptModal'
import AdIdeasSection from './sections/AdIdeasSection'
import FrontEndSection from './sections/FrontEndSection'
import ClaudeSkillsSection from './sections/ClaudeSkillsSection'
import SelfImprovementSection from './sections/SelfImprovementSection'
import { adPrompts, frontEndPrompts, claudeSkills, selfImprovementPrompts } from '../data/prompts'

const sections = [
  { id: 'ad-ideas', label: 'Ad Ideas', icon: Image, count: 50 },
  { id: 'front-end', label: 'Front-End', icon: Layout, count: 10 },
  { id: 'skills', label: 'Skills', icon: Zap, count: 15 },
  { id: 'self-improvement', label: 'Level Up', icon: Rocket, count: 5 },
]

export default function AIHub() {
  const [selectedPrompt, setSelectedPrompt] = useState(null)
  const location = useLocation()
  const currentPath = location.pathname.split('/').pop() || 'ad-ideas'

  const totalResources = adPrompts.length + frontEndPrompts.length + claudeSkills.length + selfImprovementPrompts.length

  return (
    <>
      {/* Hero */}
      <section className="py-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6">
            <UnicornHorn className="w-4 h-4" />
            <span className="text-sm text-gray-300">{totalResources}+ Prompts & Skills</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">The Ultimate</span>
            <br />
            <span className="gradient-text">AI Marketing Hub</span>
          </h1>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            50 ad styles, 10 front-end templates, 15 Claude Skills, and 5 self-improvement prompts.
          </p>
        </motion.div>
      </section>

      <StatsSection />

      {/* Section Tab Navigation */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {sections.map(section => {
          const Icon = section.icon
          const isActive = currentPath === section.id
          return (
            <Link
              key={section.id}
              to={`/ai-hub/${section.id}`}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all no-underline ${
                isActive ? 'bg-um-cyan text-white' : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              <Icon className="w-4 h-4" />
              {section.label}
              <span className={`text-xs px-1.5 py-0.5 rounded-full ${isActive ? 'bg-white/20' : 'bg-white/5'}`}>
                {section.count}
              </span>
            </Link>
          )
        })}
      </div>

      {/* Routed Sections */}
      <div className="mt-8">
        <Routes>
          <Route index element={<Navigate to="ad-ideas" replace />} />
          <Route path="ad-ideas" element={<AdIdeasSection onSelectPrompt={setSelectedPrompt} />} />
          <Route path="front-end" element={<FrontEndSection onSelectPrompt={setSelectedPrompt} />} />
          <Route path="skills" element={<ClaudeSkillsSection />} />
          <Route path="self-improvement" element={<SelfImprovementSection onSelectPrompt={setSelectedPrompt} />} />
        </Routes>
      </div>

      <SubmitPromptSection />

      <AnimatePresence>
        {selectedPrompt && (
          <PromptModal prompt={selectedPrompt} onClose={() => setSelectedPrompt(null)} />
        )}
      </AnimatePresence>
    </>
  )
}
