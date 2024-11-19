 
import Link from "next/link"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { JSX, SVGProps } from "react"

export function Homee() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">InYosi</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="/features" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Features
          </Link>
          <Link href="/roadmap" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Roadmap
          </Link>
          <Link href="team" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Team
          </Link>
          <Link href="/InyosiWhitePaper.pdf" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Whitepaper
          </Link>
        </nav>
      </header> 
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    InYosi Crypto Presale
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Join the presale for the innovative InYosi cryptocurrency and be part of the future of
                    decentralized finance.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="/buy"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Join Presale
                  </Link>
                  <Link
                    href="/learn"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-[300px] h-[300px] relative">
                  <div className="absolute top-0 left-0 w-full h-full animate-spin-slow">
                    <CoinsIcon className="w-full h-full text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Makes InYosi Special?</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  InYosi is a revolutionary cryptocurrency that offers a unique blend of features, security, and
                  scalability.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Decentralized Governance</h3>
                      <p className="text-muted-foreground">
                        InYosi decentralized governance model ensures that the community has a direct say in the
                        project direction.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Scalable Infrastructure</h3>
                      <p className="text-muted-foreground">
                        The InYosi network is built on a highly scalable infrastructure, ensuring fast and efficient
                        transactions.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Advanced Security</h3>
                      <p className="text-muted-foreground">
                        InYosi utilizes cutting-edge security measures to protect your assets and ensure the
                        integrity of the network.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-[300px] h-[300px] relative">
                  <div className="absolute top-0 left-0 w-full h-full animate-spin-slow">
                    <CoinsIcon className="w-full h-full text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="roadmap" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Roadmap</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">The Path to Success</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Check out our detailed roadmap to see how we plan to achieve our goals and deliver value to the
                  community.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex items-center justify-center">
                <div className="w-[300px] h-[300px] relative">
                  <div className="absolute top-0 left-0 w-full h-full animate-spin-slow">
                    <CoinsIcon className="w-full h-full text-primary" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Q3 2025</h3>
                      <p className="text-muted-foreground">
                        Presale launch, token distribution, and initial exchange listings.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Q4 2025</h3>
                      <p className="text-muted-foreground">
                        Expansion of ecosystem partnerships, development of decentralized applications, and community
                        growth initiatives.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Q1 2024</h3>
                      <p className="text-muted-foreground">
                        Launch of staking and governance features, integration with leading DeFi protocols, and ongoing
                        platform enhancements.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="team" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Meet the Team</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">The Minds Behind InYosi</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our talented team of developers, designers, and strategists are dedicated to building the future of
                  decentralized finance.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center justify-center space-y-2">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" alt="Team Member 1" />
                  <AvatarFallback>TM1</AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <h3 className="text-xl font-bold">Ayanda Mdletshe</h3>
                  <p className="text-muted-foreground">Co-Founder & CEO</p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" alt="Team Member 2" />
                  <AvatarFallback>TM2</AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <h3 className="text-xl font-bold">Luthando Khoza</h3>
                  <p className="text-muted-foreground">Co-Founder & CTO</p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" alt="Team Member 3" />
                  <AvatarFallback>TM3</AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <h3 className="text-xl font-bold">Ayanda Mdletshe</h3>
                  <p className="text-muted-foreground">Lead Developer</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 InYosi. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="/terms" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="/privacy" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy Policy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function CoinsIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="8" r="6" />
      <path d="M18.09 10.37A6 6 0 1 1 10.34 18" />
      <path d="M7 6h1v4" />
      <path d="m16.71 13.88.7.71-2.82 2.82" />
    </svg>
  )
}


function MountainIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}
