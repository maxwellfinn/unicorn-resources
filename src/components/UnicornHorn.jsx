import React from 'react'

export const UnicornHorn = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="hornGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00ACE9" />
        <stop offset="50%" stopColor="#007aff" />
        <stop offset="100%" stopColor="#00ACE9" />
      </linearGradient>
    </defs>
    <path d="M12 2L14.5 8L12 10L9.5 8L12 2Z" fill="url(#hornGradient)" />
    <path d="M12 10L15 14L12 22L9 14L12 10Z" fill="url(#hornGradient)" />
    <path d="M12 2L13 5L12 6L11 5L12 2Z" fill="white" opacity="0.6" />
    <path d="M10 8L12 10L14 8" stroke="white" strokeWidth="0.5" opacity="0.4" />
    <path d="M10.5 12L12 14L13.5 12" stroke="white" strokeWidth="0.5" opacity="0.3" />
  </svg>
)

export default UnicornHorn
