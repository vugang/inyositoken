'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Circle } from 'lucide-react'

const roadmapData = [
  {
    phase: 'Phase 1',
    title: 'Project Inception',
    items: ['Concept Development', 'Team Formation', 'Initial Planning'],
    completed: true,
  },
  {
    phase: 'Phase 2',
    title: 'Token Development',
    items: ['Smart Contract Creation', 'Token Economics Design', 'Security Audits'],
    completed: true,
  },
  {
    phase: 'Phase 3',
    title: 'Pre-Sale Preparation',
    items: ['Website Launch', 'Whitepaper Release', 'Community Building'],
    completed: false,
  },
  {
    phase: 'Phase 4',
    title: 'Token Pre-Sale',
    items: ['Pre-Sale Launch', 'Marketing Campaign', 'Investor Onboarding'],
    completed: false,
  },
  {
    phase: 'Phase 5',
    title: 'Exchange Listing',
    items: ['Major Exchange Listings', 'Liquidity Provision', 'Trading Commencement'],
    completed: false,
  },
]

export function RoadmapComponent() {
  const [activePhase, setActivePhase] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePhase((prev) => (prev + 1) % roadmapData.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-100 to-orange-50 text-gray-900 p-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-12">Token Presale Roadmap</h1>
      <div className="max-w-4xl mx-auto">
        {roadmapData.map((phase, index) => (
          <motion.div
            key={phase.phase}
            className={`flex flex-col lg:flex-row mb-8 ${
              index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
            }`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {/* Card Section */}
            <div className="w-full lg:w-1/2 px-4 mb-4 lg:mb-0">
              <motion.div
                className={`bg-white bg-opacity-50 p-6 rounded-lg shadow-lg ${
                  activePhase === index ? 'border-2 border-green-400' : ''
                }`}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <h2 className="text-xl sm:text-2xl font-semibold mb-2">{phase.phase}</h2>
                <h3 className="text-lg sm:text-xl mb-4">{phase.title}</h3>
                <ul className="list-none">
                  {phase.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center mb-2">
                      {phase.completed ? (
                        <CheckCircle className="text-green-500 mr-2" />
                      ) : (
                        <Circle className="text-gray-400 mr-2" />
                      )}
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Timeline Section (Hidden for Last Phase) */}
            {index !== roadmapData.length - 1 && (
              <div className="w-full lg:w-1/2 flex justify-center items-center">
                <div className="w-1 h-24 lg:h-full bg-green-300 relative">
                  <div
                    className={`w-6 h-6 rounded-full ${
                      phase.completed ? 'bg-green-400' : 'bg-gray-400'
                    } absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
                  />
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}
