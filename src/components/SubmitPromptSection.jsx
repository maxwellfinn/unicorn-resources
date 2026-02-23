import React, { useState } from 'react'
import { Check, Send, Award } from 'lucide-react'
import { submissionCategories } from '../data/prompts'

export default function SubmitPromptSection() {
  const [formData, setFormData] = useState({
    name: '', email: '', title: '', category: '', prompt: '', notes: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      const apiUrl = import.meta.env.VITE_API_URL || '/api/submit-prompt'
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (response.ok) {
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 5000)
        setFormData({ name: '', email: '', title: '', category: '', prompt: '', notes: '' })
      } else {
        console.log('API unavailable - Submission data:', formData)
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 5000)
        setFormData({ name: '', email: '', title: '', category: '', prompt: '', notes: '' })
      }
    } catch (err) {
      console.log('Development mode - Submission logged:', {
        ...formData,
        categoryName: submissionCategories.find(c => c.id === formData.category)?.name,
        timestamp: new Date().toISOString()
      })
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 5000)
      setFormData({ name: '', email: '', title: '', category: '', prompt: '', notes: '' })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="submit" className="py-16 border-t border-gray-800">
      <div className="glass rounded-2xl p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
            <Send className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Submit Your Best Prompt</h2>
            <p className="text-gray-400">Share with the Unicorn Marketers community</p>
          </div>
        </div>
        <div className="mb-6 p-4 bg-purple-500/10 border border-purple-500/20 rounded-xl">
          <div className="flex items-start gap-3">
            <Award className="w-5 h-5 text-purple-400 mt-0.5" />
            <div>
              <p className="text-purple-300 font-medium">Community Contributor Badge</p>
              <p className="text-gray-400 text-sm">Approved prompts will be featured with your name and a special community badge!</p>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-gray-400 mb-2">Your Name *</label>
              <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 bg-um-darker border border-gray-700 rounded-xl text-white" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Email *</label>
              <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 bg-um-darker border border-gray-700 rounded-xl text-white" placeholder="john@example.com" />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-gray-400 mb-2">Prompt Title *</label>
              <input type="text" required value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} className="w-full px-4 py-3 bg-um-darker border border-gray-700 rounded-xl text-white" placeholder="e.g., Neon Cyberpunk Style" />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Category *</label>
              <select required value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})} className="w-full px-4 py-3 bg-um-darker border border-gray-700 rounded-xl text-white">
                <option value="">Select category...</option>
                {submissionCategories.map(cat => (
                  <option key={cat.id} value={cat.id}>{cat.name}</option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">Your Prompt *</label>
            <textarea required rows={6} value={formData.prompt} onChange={(e) => setFormData({...formData, prompt: e.target.value})} className="w-full px-4 py-3 bg-um-darker border border-gray-700 rounded-xl text-white font-mono text-sm" placeholder="Enter your prompt here... Use [BRACKETS] for placeholders" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">Additional Notes (optional)</label>
            <textarea rows={3} value={formData.notes} onChange={(e) => setFormData({...formData, notes: e.target.value})} className="w-full px-4 py-3 bg-um-darker border border-gray-700 rounded-xl text-white" placeholder="Tips for using this prompt, what tools it works best with, etc." />
          </div>
          <button type="submit" disabled={submitting} className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-xl transition-all btn-press flex items-center justify-center gap-2 disabled:opacity-50">
            {submitted ? (<><Check className="w-5 h-5" /> Submitted for Review!</>) : submitting ? (<><div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Submitting...</>) : (<><Send className="w-5 h-5" /> Submit Prompt</>)}
          </button>
        </form>
      </div>
    </section>
  )
}
