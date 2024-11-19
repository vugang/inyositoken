'use client'

import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function PrivacyPolicyComponent() {
  return (
    <div className="min-h-screen bg-white p-4 md:p-8">
      <Card className="mx-auto max-w-4xl">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">Privacy Policy</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[60vh] md:h-[70vh] pr-4">
            <div className="space-y-6">
            <section>
  <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
  <p>
    Welcome to our crypto presale token website. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or participate in our token presale.
  </p>
  <p>
    We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you participate in our crypto token presale. By accessing or participating in the presale, you agree to the terms outlined in this policy.
  </p>
  <p>
    During the presale process, we may collect certain information, such as your name, email address, wallet address, and other relevant details necessary for registration, verification, and compliance with regulatory requirements. We use this information to facilitate your participation in the presale, enhance our services, and ensure the security of transactions. We are dedicated to using your data responsibly and only for the purposes outlined in this policy.
  </p>
  <p>
    We understand the importance of confidentiality, especially in the crypto space, and take appropriate measures to protect your personal information from unauthorized access or misuse. Your data will not be shared with third parties except as required by law or to fulfill legal obligations. Please read this policy carefully to understand how we handle your information. If you have any questions or concerns, feel free to contact us. Thank you for trusting us with your information.
  </p>
</section>

              <section>
                <h2 className="text-2xl font-semibold mb-2">2. Information We Collect</h2>
                <p>We may collect personal information that you provide to us, such as:</p>
                <ul className="list-disc pl-6 mt-2">
                  <li>Wallet address</li>
                </ul>
                <p className="mt-2">We may also automatically collect certain information about your device and how you interact with our website.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-2">3. How We Use Your Information</h2>
                <p>We may use the information we collect for various purposes, including:</p>
                <ul className="list-disc pl-6 mt-2">
                  <li>Facilitating your participation in the token presale</li>
                  <li>Verifying your identity and eligibility</li>
                  <li>Communicating with you about the presale and our services</li>
                  <li>Complying with legal and regulatory requirements</li>
                  <li>Improving our website and services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-2">4. How We Share Your Information</h2>
                <p>We may share your information with:</p>
                <ul className="list-disc pl-6 mt-2">
                  <li>Service providers who assist us in operating our website and conducting the presale</li>
                  <li>Legal and regulatory authorities when required by law</li>
                  <li>Professional advisors such as lawyers, auditors, and accountants</li>
                </ul>
                <p className="mt-2">We do not sell your personal information to third parties.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-2">5. Security of Your Information</h2>
                <p>We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-2">6. Your Rights</h2>
                <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
                <ul className="list-disc pl-6 mt-2">
                  <li>The right to access your personal information</li>
                  <li>The right to correct inaccurate information</li>
                  <li>The right to delete your information</li>
                  <li>The right to restrict or object to processing</li>
                  <li>The right to data portability</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-2">7. Cookies and Similar Technologies</h2>
                <p>We may use cookies and similar tracking technologies to collect and store information about how you use our website. You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-2">8. Changes to This Privacy Policy</h2>
                <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-2">9. Contact Us</h2>
                <p>If you have any questions about this Privacy Policy, please contact us at:</p>
                <p className="mt-2">
                  InYosi IT<br />

                       <a
        href={`https://t.me/inyosi_official`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-[#4b6bfb] hover:underline ml-2"
      >
        Click Here for Support 
      </a>
                </p>
              </section>

              <p className="mt-6 text-sm text-gray-600">Last updated: 19/11/2024</p>
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  )
}