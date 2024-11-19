'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Coins, Lock, TrendingUp, ChevronDown } from 'lucide-react'

const AnimatedLogo = () => (
  <motion.svg
    width="200"
    height="200"
    viewBox="0 0 200 200"
    initial="hidden"
    animate="visible"
  >
    <motion.circle
      cx="100"
      cy="100"
      r="80"
      stroke="black"
      strokeWidth="20"
      fill="none"
      variants={{
        hidden: { pathLength: 0, opacity: 0 },
        visible: { pathLength: 1, opacity: 1 }
      }}
      transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
    />

    {/* Replace the triangle with an image logo */}
    <motion.image
      href="/nyosi.png" // Update this path to your logo image
      x="60"
      y="60"
      width="80"
      height="80"
      variants={{
        hidden: { scale: 0, opacity: 0 },
        visible: { scale: 1, opacity: 1 }
      }}
      transition={{ duration: 1, delay: 0.5 }}
    />

    <motion.text
      x="100"
      y="180"
      textAnchor="middle"
      fill="black"
      fontSize="24"
      fontWeight="bold"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
      }}
      transition={{ duration: 1, delay: 1 }}
    >
     
    </motion.text>
  </motion.svg>
)

export function LearnMoreWithAnimatedLogo() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const [openQuestion, setOpenQuestion] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index)
  }

  const faqData = [
    {
      question: 'What is Inyosi Token?',
      answer:
        'Inyosi Token is a new cryptocurrency designed to revolutionize decentralized finance. It offers unique features and a strong potential for growth.'
    },
    {
      question: 'How can I participate in the presale?',
      answer:
        'To participate in the presale, you need to register on our platform and complete the KYC process. Once approved, you can purchase tokens using approved cryptocurrencies or fiat.'
    },
    {
      question: 'What are the tokenomics of Inyosi?',
      answer:
        'Inyosi has a total supply of 1 billion tokens. 40% is allocated for the presale, 20% for liquidity, 15% for development, 15% Community incentives and 10% for marketing and partnerships.'
    },
    {
      question: 'When will Inyosi be listed on exchanges?',
      answer:
        'We aim to list Inyosi on major exchanges within 4 months after the completion of the presale. Specific dates will be announced closer to the time.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-orange-100 to-green-100 flex flex-col items-center justify-center p-8">
      <motion.h1
        className="text-5xl md:text-7xl font-bold mb-8 text-center text-black"
        {...fadeIn}
      >
        Welcome to Inyosi
      </motion.h1>

      <motion.p
        className="text-xl md:text-2xl mb-12 text-center max-w-2xl text-black"
        {...fadeIn}
        transition={{ delay: 0.2 }}
      >
        The future of decentralized finance is here. Join our presale and be part of the revolution.
      </motion.p>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 w-full max-w-6xl">
        {[
          {
            icon: Coins,
            title: 'Limited Supply',
            description: 'Only 1 billion tokens available'
          },
          {
            icon: Lock,
            title: 'Secure Platform',
            description: 'Built on cutting-edge blockchain technology'
          },
          {
            icon: TrendingUp,
            title: 'High Growth Potential',
            description: 'Backed by a strong development team'
          }
        ].map((feature, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center p-6 bg-white bg-opacity-80 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-300"
            {...fadeIn}
            transition={{ delay: 0.4 + index * 0.2 }}
          >
            <feature.icon size={48} className="mb-4 text-black" />
            <h2 className="text-2xl font-bold mb-2 text-black">{feature.title}</h2>
            <p className="text-gray-700">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Animated Logo */}
      <motion.div className="mb-16" {...fadeIn} transition={{ delay: 0.6 }}>
        <AnimatedLogo />
      </motion.div>

      {/* FAQ Section */}
      <motion.div
        className="w-full max-w-3xl bg-white bg-opacity-80 p-6 rounded-lg shadow-lg"
        {...fadeIn}
        transition={{ delay: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-black">
          Frequently Asked Questions
        </h2>
        {faqData.map((faq, index) => (
          <div key={index} className="mb-4 border-b border-gray-200 pb-4">
            <button
              className="flex justify-between items-center w-full text-left font-semibold text-lg text-black"
              onClick={() => toggleQuestion(index)}
            >
              {faq.question}
              <ChevronDown
                className={`transform transition-transform ${
                  openQuestion === index ? 'rotate-180' : ''
                }`}
              />
            </button>
            <AnimatePresence>
              {openQuestion === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-2 text-gray-600"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
