import React from 'react'
import { adPrompts, frontEndPrompts, claudeSkills, selfImprovementPrompts } from '../data/prompts'

export default function StatsSection() {
  const stats = [
    { value: `${adPrompts.length}`, label: 'Ad Styles' },
    { value: `${frontEndPrompts.length}`, label: 'Front-End Templates' },
    { value: `${claudeSkills.length}`, label: 'Claude Skills' },
    { value: `${selfImprovementPrompts.length}`, label: 'Level-Up Prompts' },
  ]

  return (
    <section className="py-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <div key={i} className="glass rounded-xl p-6 text-center">
            <div className="text-3xl font-bold gradient-text">{stat.value}</div>
            <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
