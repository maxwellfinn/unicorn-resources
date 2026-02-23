import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HubDashboard from './pages/HubDashboard'
import AIHub from './pages/AIHub'

export default function App() {
  return (
    <div className="min-h-screen bg-um-darker text-white">
      <div className="fixed inset-0 bg-gradient-mesh opacity-50 pointer-events-none" />
      <Header />
      <main className="relative max-w-7xl mx-auto px-4 pt-24 lg:pt-20 pb-16">
        <Routes>
          <Route path="/" element={<HubDashboard />} />
          <Route path="/ai-hub/*" element={<AIHub />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
