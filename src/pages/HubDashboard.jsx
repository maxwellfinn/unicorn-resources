import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Sparkles, Rocket, ArrowRight, Lock, Plus } from 'lucide-react'
import { UnicornHorn } from '../components/UnicornHorn'
import { resources } from '../data/hubResources'

const iconMap = { Sparkles, Rocket }

export default function HubDashboard() {
  return (
    <div className="page-transition">
      {/* Hero */}
      <section className="py-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6">
            <Lock className="w-3.5 h-3.5 text-um-cyan" />
            <span className="text-sm text-gray-300">Internal Team Resources</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Unicorn Marketers</span>
            <br />
            <span className="gradient-text">Resource Hub</span>
          </h1>

          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Everything the team needs in one place. AI prompts, deployment guides, training materials, and more.
          </p>
        </motion.div>
      </section>

      {/* Resource Cards */}
      <section className="py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => {
            const Icon = iconMap[resource.icon] || Sparkles
            const CardContent = (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-2xl p-8 card-hover cursor-pointer group h-full flex flex-col"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${resource.color} flex items-center justify-center`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <span className="tag tag-cyan">{resource.stats}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-um-cyan transition-colors">
                  {resource.title}
                </h3>
                <p className="text-gray-400 mb-6 flex-1">{resource.description}</p>
                <div className="flex items-center gap-2 text-um-cyan font-medium">
                  Open Resource <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            )

            if (resource.isReactRoute) {
              return <Link key={resource.id} to={resource.route} className="no-underline">{CardContent}</Link>
            }
            return <a key={resource.id} href={resource.route} className="no-underline">{CardContent}</a>
          })}

          {/* Coming Soon Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass rounded-2xl p-8 opacity-50 h-full flex flex-col"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gray-600 to-gray-700 flex items-center justify-center">
                <Plus className="w-7 h-7 text-gray-400" />
              </div>
              <span className="tag bg-white/5 text-gray-500">Coming Soon</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-500 mb-3">More Resources</h3>
            <p className="text-gray-600 mb-6 flex-1">Training playbooks, campaign templates, SOPs, and more coming soon.</p>
            <div className="flex items-center gap-2 text-gray-600 font-medium">
              In Development
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12">
        <div className="glass rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-6">What's Inside</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { value: '50', label: 'Ad Styles' },
              { value: '10', label: 'Front-End Templates' },
              { value: '15', label: 'Claude Skills' },
              { value: '5', label: 'Level-Up Prompts' },
              { value: '1', label: 'Deployment Guide' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
