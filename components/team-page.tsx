'use client'

import Image from "next/image"

export function TeamPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="mb-12 text-center text-4xl font-bold">Our Team</h1>
        <div className="grid gap-8 md:grid-cols-2">
          {/* Developer Card */}
          <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
            <div className="mb-4 flex justify-center">
              <Image
                src="/vu.jpg"
                alt="Developer Avatar"
                width={128}
                height={128}
                className="rounded-full"
              />
            </div>
            <h2 className="mb-2 text-center text-2xl font-semibold">Ayanda Mdletshe</h2>
            <p className="mb-4 text-center text-xl text-gray-400">Lead Developer</p>
            <p className="text-center">
              Experienced blockchain developer with a passion for creating secure and efficient smart contracts.
            </p>
          </div>

          {/* Marketing Leader Card */}
          <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
            <div className="mb-4 flex justify-center">
              <Image
                src="/khoza.jpg"
                alt="Marketing Leader Avatar"
                width={128}
                height={128}
                className="rounded-full"
              />
            </div>
            <h2 className="mb-2 text-center text-2xl font-semibold">Luthando Khoza</h2>
            <p className="mb-4 text-center text-xl text-gray-400">Marketing Leader</p>
            <p className="text-center">
              Strategic marketing professional with expertise in crypto and blockchain project promotion.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}