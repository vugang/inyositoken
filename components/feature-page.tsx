'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Zap, Rocket, Coins, TrendingUp } from 'lucide-react';
import Image from 'next/image';

export function FeaturePage() {
  const [countdown, setCountdown] = useState(600); // 10 minutes countdown
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensure the client-side rendering
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4 sm:p-6 md:p-8 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-6 sm:mb-8 md:mb-12"
      >
        <div className="flex justify-center mb-4 sm:mb-6">
          <Image
            src="/nyosi.png"
            alt="CryptoMoon Logo"
            width={80}
            height={80}
            className="rounded-full w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
          />
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-2 sm:mb-3 md:mb-4 animate-pulse">
          🚀 Inyosi Presale 🌙
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-yellow-300 animate-bounce">
          Don&apos;t miss out on the next big thing in crypto!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
        {/* Token Features Card */}
        <Card className="bg-blue-600 text-white">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl md:text-3xl font-bold flex items-center">
              <Sparkles className="mr-2 h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" /> Token Features
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              {[{ icon: Zap, text: 'Lightning-fast transactions' }, { icon: Rocket, text: 'Deflationary tokenomics' }, { icon: Coins, text: 'Local Shopping' }, { icon: TrendingUp, text: 'Guaranteed moon landing' }].map(
                (item, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="text-base sm:text-lg md:text-xl flex items-center"
                  >
                    <item.icon className="inline mr-2 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                    <span>{item.text}</span>
                  </motion.li>
                )
              )}
            </ul>
          </CardContent>
        </Card>

        {/* Presale Details Card */}
        <Card className="bg-green-600 text-white">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl md:text-3xl font-bold">Presale Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 sm:space-y-3 md:space-y-4">
              <p className="text-lg sm:text-xl md:text-2xl font-semibold">Price: 1 ETH = 10,521 IY</p>
              <p className="text-lg sm:text-xl md:text-2xl font-semibold">Min Purchase: 0.0001 ETH</p>
              <p className="text-lg sm:text-xl md:text-2xl font-semibold">Max Purchase: 5 ETH</p>
              <div className="text-xl sm:text-2xl md:text-3xl font-bold animate-ping">
                Time Left: {Math.floor(countdown / 60)}:
                {countdown % 60 < 10 ? '0' : ''}
                {countdown % 60}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Token Distribution */}
        <Card className="bg-indigo-600 text-white md:col-span-2">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl md:text-3xl font-bold">Token Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[{ name: 'Presale', percentage: 40, color: 'bg-yellow-400' }, { name: 'Liquidity', percentage: 20, color: 'bg-green-400' }, { name: 'Team', percentage: 15, color: 'bg-red-400' }, { name: 'Marketing', percentage: 10, color: 'bg-purple-400' }, { name: 'Community Incentives', percentage: 15, color: 'bg-pink-400' }].map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-base sm:text-lg md:text-xl">{item.name}</span>
                    <span className="text-base sm:text-lg md:text-xl font-semibold">{item.percentage}%</span>
                  </div>
                  <div className="w-full bg-indigo-300 rounded-full h-2 sm:h-3">
                    <div
                      className={`${item.color} h-2 sm:h-3 rounded-full`}
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Animated Dots */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
        {isClient &&
          [...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 sm:w-2 sm:h-2 md:w-3 md:h-3 lg:w-4 lg:h-4 bg-white rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />
          ))}
      </div>
    </div>
  );
}
