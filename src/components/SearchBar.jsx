import React from 'react'
import { Search, X, ChevronDown } from 'lucide-react'

export default function SearchBar({ searchQuery, setSearchQuery, selectedSubcategory, setSelectedSubcategory, subcategories, placeholder }) {
  return (
    <div className="sticky top-32 lg:top-20 z-40 py-4 glass-dark rounded-2xl px-4 mb-8">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={placeholder || "Search prompts..."}
            className="w-full pl-12 pr-4 py-3 bg-um-darker border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-um-cyan transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
        {subcategories && setSelectedSubcategory && (
          <div className="relative">
            <select
              value={selectedSubcategory}
              onChange={(e) => setSelectedSubcategory(e.target.value)}
              className="appearance-none w-full md:w-56 px-4 py-3 bg-um-darker border border-gray-700 rounded-xl text-white cursor-pointer focus:border-um-cyan transition-colors"
            >
              <option value="">All Categories</option>
              {subcategories.map(cat => (
                <option key={cat.id} value={cat.id}>{cat.name}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>
        )}
      </div>
    </div>
  )
}
