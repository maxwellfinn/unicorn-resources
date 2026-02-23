import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Fuse from 'fuse.js'
import { Layout, Search } from 'lucide-react'
import { UnicornHorn } from '../../components/UnicornHorn'
import SearchBar from '../../components/SearchBar'
import PromptCard from '../../components/PromptCard'
import { frontEndPrompts, frontEndSubcategories } from '../../data/prompts'

const fuseOptions = {
  keys: [
    { name: 'title', weight: 0.4 },
    { name: 'description', weight: 0.3 },
    { name: 'tags', weight: 0.2 },
    { name: 'prompts.basic', weight: 0.05 },
  ],
  threshold: 0.3,
  includeScore: true,
}

const frontEndFuse = new Fuse(frontEndPrompts, fuseOptions)

export default function FrontEndSection({ onSelectPrompt }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedSubcategory, setSelectedSubcategory] = useState('')

  const filteredPrompts = useMemo(() => {
    let results = frontEndPrompts
    if (searchQuery) {
      const searchResults = frontEndFuse.search(searchQuery)
      results = searchResults.map(r => r.item)
    }
    if (selectedSubcategory) {
      results = results.filter(p => p.subcategory === selectedSubcategory)
    }
    return results
  }, [searchQuery, selectedSubcategory])

  const featuredPrompts = frontEndPrompts.filter(p => p.featured)

  return (
    <div className="page-transition">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-4">
          <Layout className="w-4 h-4 text-um-cyan" />
          <span className="text-sm text-gray-300">{frontEndPrompts.length} Front-End Prompts</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Front-End Idea Prompts</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          High-converting landing page templates designed to work with Claude Skills. Advertorials, VSLs, quizzes, and more.
        </p>
      </div>
      {!searchQuery && !selectedSubcategory && featuredPrompts.length > 0 && (
        <div className="mb-12">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <UnicornHorn className="w-5 h-5" /> Featured Templates
          </h3>
          <div className="bento-grid">
            {featuredPrompts.map(prompt => (
              <PromptCard key={prompt.id} prompt={prompt} onSelect={onSelectPrompt} />
            ))}
          </div>
        </div>
      )}
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedSubcategory={selectedSubcategory}
        setSelectedSubcategory={setSelectedSubcategory}
        subcategories={frontEndSubcategories}
        placeholder="Search front-end templates..."
      />
      <div className="mb-4">
        <h3 className="text-xl font-bold text-white">
          {searchQuery || selectedSubcategory ? 'Search Results' : 'All Front-End Templates'}
          <span className="ml-2 text-sm text-gray-400 font-normal">({filteredPrompts.length})</span>
        </h3>
      </div>
      <AnimatePresence mode="popLayout">
        {filteredPrompts.length > 0 ? (
          <motion.div className="bento-grid">
            {filteredPrompts.map(prompt => (
              <PromptCard key={prompt.id} prompt={prompt} onSelect={onSelectPrompt} />
            ))}
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16">
            <Search className="w-12 h-12 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl text-gray-400 mb-2">No templates found</h3>
            <p className="text-gray-500">Try adjusting your search or filters</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
