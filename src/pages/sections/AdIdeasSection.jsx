import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Fuse from 'fuse.js'
import { Image, Search } from 'lucide-react'
import { UnicornHorn } from '../../components/UnicornHorn'
import SearchBar from '../../components/SearchBar'
import PromptCard from '../../components/PromptCard'
import { adPrompts, adPromptSubcategories } from '../../data/prompts'

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

const adFuse = new Fuse(adPrompts, fuseOptions)

export default function AdIdeasSection({ onSelectPrompt }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedSubcategory, setSelectedSubcategory] = useState('')

  const filteredPrompts = useMemo(() => {
    let results = adPrompts
    if (searchQuery) {
      const searchResults = adFuse.search(searchQuery)
      results = searchResults.map(r => r.item)
    }
    if (selectedSubcategory) {
      results = results.filter(p => p.subcategory === selectedSubcategory)
    }
    return results
  }, [searchQuery, selectedSubcategory])

  const featuredPrompts = adPrompts.filter(p => p.featured)

  return (
    <div className="page-transition">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-4">
          <Image className="w-4 h-4 text-um-cyan" />
          <span className="text-sm text-gray-300">{adPrompts.length} Ad Style Prompts</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ad Idea Prompts</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          50 unique ad styles with Basic, Advanced, and Expert prompts. Each includes strategic use cases, key variables, and pro tips.
        </p>
      </div>
      {!searchQuery && !selectedSubcategory && (
        <div className="mb-12">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <UnicornHorn className="w-5 h-5" /> Featured Styles
          </h3>
          <div className="bento-grid">
            {featuredPrompts.slice(0, 6).map(prompt => (
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
        subcategories={adPromptSubcategories}
        placeholder="Search ad styles..."
      />
      <div className="mb-4">
        <h3 className="text-xl font-bold text-white">
          {searchQuery || selectedSubcategory ? 'Search Results' : 'All Ad Styles'}
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
            <h3 className="text-xl text-gray-400 mb-2">No prompts found</h3>
            <p className="text-gray-500">Try adjusting your search or filters</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
