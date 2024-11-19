'use client'

import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function TermsOfServiceComponent() {
  return (
    <div className="min-h-screen bg-white p-4 md:p-8">
      <Card className="mx-auto max-w-4xl">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">Terms of Service</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[60vh] md:h-[70vh] pr-4">
            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-semibold mb-2">1. Acceptance of Terms</h2>
                <p>By accessing or using our crypto presale token website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, you are prohibited from using or accessing this site.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-2">2. Description of Service</h2>
                <p>Our website provides information about our upcoming crypto token presale and allows eligible participants to register for and participate in the presale event.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-2">3. Eligibility</h2>
                <p>You must be at least 18 years old and comply with all applicable laws and regulations in your jurisdiction to participate in our token presale. We reserve the right to refuse service to anyone for any reason at any time.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-2">4. Registration</h2>
                <p>To participate in the presale, you may be required connect your crypto wallet. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-2">5. Risks and Disclaimers</h2>
                <p>Participating in a crypto token presale involves significant risk. The value of tokens can be extremely volatile, and you may lose all or a substantial portion of your investment. You acknowledge and agree that you are solely responsible for any decision to participate in our presale and for any losses you may incur.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-2">6. Anti-Money Laundering (AML) and Know Your Customer (KYC)</h2>
                <p>We may require you to complete AML and KYC procedures before participating in the presale. You agree to provide all requested information and documentation promptly and accurately.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-2">7. Intellectual Property</h2>
                <p>All content on this website, including text, graphics, logos, and software, is our property and is protected by copyright and other intellectual property laws.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-2">8. Limitation of Liability</h2>
                <p>To the fullest extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your access to or use of or inability to access or use the service.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-2">9. Governing Law</h2>
                <p>These Terms shall be governed and construed in accordance with the laws of Consumer Protection Law, without regard to its conflict of law provisions.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-2">10. Changes to Terms</h2>
                <p>We reserve the right to modify or replace these Terms at any time. It is your responsibility to check these Terms periodically for changes.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-2">11. Contact Us</h2>
                <p>If you have any questions about these Terms, please contact us on Telegram.
                <a
        href={`https://t.me/inyosi_official`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-[#4b6bfb] hover:underline ml-2"
      >
        Click Here 
      </a>
                </p>
              </section>
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  )
}