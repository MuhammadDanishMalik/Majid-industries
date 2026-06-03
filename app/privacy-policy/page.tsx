import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Majid Industries',
  description: 'Privacy Policy for Majid Industries (PVT) LTD. Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <div className="bg-[#111] border-b border-gray-800">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-[#4FBFAD]">Home</Link>
            <span className="text-gray-600">›</span>
            <span className="text-white font-medium">Privacy Policy</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
        <p className="text-gray-500 mb-12">Last updated: May 2026</p>

        <div className="space-y-10 text-gray-400 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
            <p>Welcome to Majid Industries (PVT) LTD (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or interact with our services.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
            <p className="mb-4">We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-white">Personal Information:</strong> Name, email address, phone number, company name, and mailing address when you contact us, place an order, or fill out a form.</li>
              <li><strong className="text-white">Order Information:</strong> Product preferences, order history, shipping details, and payment information for processing your orders.</li>
              <li><strong className="text-white">Communication Data:</strong> Records of correspondence when you contact us via email, phone, or our contact form.</li>
              <li><strong className="text-white">Technical Data:</strong> IP address, browser type, device information, and usage patterns collected automatically when you visit our website.</li>
              <li><strong className="text-white">Cookies:</strong> Small data files placed on your device to improve your browsing experience and analyze website traffic.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
            <p className="mb-4">We use the collected information for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To process and fulfill your orders and inquiries</li>
              <li>To communicate with you about products, services, and promotions</li>
              <li>To improve our website, products, and customer service</li>
              <li>To send periodic emails regarding your order or other products and services</li>
              <li>To comply with applicable laws and regulations</li>
              <li>To protect our rights, privacy, safety, or property</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Information Sharing</h2>
            <p className="mb-4">We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-white">Service Providers:</strong> With trusted third-party companies that assist us in operating our website, conducting our business, or servicing you.</li>
              <li><strong className="text-white">Legal Requirements:</strong> When required by law, regulation, or legal process.</li>
              <li><strong className="text-white">Business Transfers:</strong> In connection with a merger, acquisition, or sale of company assets.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Data Security</h2>
            <p>We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Your Rights</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate or incomplete data</li>
              <li>Request deletion of your personal information</li>
              <li>Opt out of marketing communications at any time</li>
              <li>Withdraw consent where processing is based on consent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Cookies Policy</h2>
            <p>Our website uses cookies to enhance your browsing experience. You can choose to accept or decline cookies through your browser settings. Most web browsers automatically accept cookies, but you can modify your browser settings to decline cookies if you prefer. Declining cookies may prevent you from taking full advantage of our website.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Third-Party Links</h2>
            <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to read the privacy policies of any third-party websites you visit.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Children&apos;s Privacy</h2>
            <p>Our website and services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. Changes to This Policy</h2>
            <p>We reserve the right to update or modify this Privacy Policy at any time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically for any changes.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">11. Contact Us</h2>
            <p className="mb-4">If you have any questions or concerns about this Privacy Policy, please contact us:</p>
            <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-gray-800 space-y-3">
              <p><strong className="text-white">Majid Industries (PVT) LTD</strong></p>
              <p>📍 Plot 9, Block 4 Karim Park, Ravi Road, Lahore</p>
              <p>📞 0320 4006761 | 0300 2007742</p>
              <p>✉️ Majidindustries@hotmail.com</p>
              <p>🕐 Monday - Saturday: 9:00 AM - 5:00 PM</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
