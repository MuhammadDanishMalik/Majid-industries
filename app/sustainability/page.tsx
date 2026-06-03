import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Sustainability | Majid Industries',
  description: 'Majid Industries is committed to sustainable manufacturing practices, environmental responsibility, and building a greener future for Pakistan and beyond.',
};

export default function SustainabilityPage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">

      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-[#0B6A5D] to-[#4FBFAD] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center bg-white/20 rounded-full px-4 py-2 text-sm font-medium mb-6">
            🌿 Our Commitment to the Planet
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Sustainability at<br />Majid Industries
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Since 1996, we have been dedicated to responsible manufacturing — creating high-quality plastic products while minimising our environmental footprint and contributing to a sustainable future.
          </p>
        </div>
      </section>

      {/* Green Clean Certified */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[#4FBFAD] font-semibold text-sm uppercase tracking-widest mb-3 block">Certification</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Green Clean Certified
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Majid Industries proudly holds the <strong className="text-white">Green Clean Institute Certification</strong>, a globally recognised standard for environmentally responsible manufacturing. This certification reflects our commitment to using cleaner production methods, reducing chemical waste, and ensuring our products are safe for people and the planet.
            </p>
            <ul className="space-y-3 text-gray-400">
              {[
                'Eco-friendly production processes',
                'Reduced chemical emissions and waste',
                'Safe materials for consumers and the environment',
                'Regular third-party audits and compliance checks',
              ].map((item) => (
                <li key={item} className="flex items-start space-x-3">
                  <span className="text-[#4FBFAD] mt-1">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center">
            <div className="w-64 h-64 relative">
              <Image
                src="/certifications/green-clean.png"
                alt="Green Clean Certified"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-gray-800 mx-auto container" />

      {/* Halal Certified */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 flex justify-center">
            <div className="w-64 h-64 relative">
              <Image
                src="/certifications/halal.png"
                alt="Halal Certified"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <span className="text-[#4FBFAD] font-semibold text-sm uppercase tracking-widest mb-3 block">Certification</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Halal Certified Products
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Our products carry the <strong className="text-white">Halal Certification</strong> from the Halal Documentation Centre, confirming that all materials and manufacturing processes comply with Islamic standards. This is especially critical for our food-grade containers, storage solutions, and packaging products used across homes and the food industry.
            </p>
            <ul className="space-y-3 text-gray-400">
              {[
                'Halal-compliant raw materials and additives',
                'Food-grade safety for consumer use',
                'Certified by authorised Halal body',
                'Trusted by households and food businesses across Pakistan',
              ].map((item) => (
                <li key={item} className="flex items-start space-x-3">
                  <span className="text-[#4FBFAD] mt-1">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-gray-800 mx-auto container" />

      {/* ISO Certified */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[#4FBFAD] font-semibold text-sm uppercase tracking-widest mb-3 block">Certification</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              ISO 14001:2015 &amp; ISO 45001:2018
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Majid Industries is certified to <strong className="text-white">ISO 14001:2015</strong> (Environmental Management System) and <strong className="text-white">ISO 45001:2018</strong> (Occupational Health &amp; Safety Management System). These internationally recognised certifications by Americo, accredited through UAF and IAF, demonstrate our ongoing dedication to managing our environmental impact and ensuring the health and safety of our workforce.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'ISO 14001:2015', desc: 'Environmental Management' },
                { label: 'ISO 45001:2018', desc: 'Health & Safety Management' },
                { label: 'UAF Accredited', desc: 'United Accreditation Foundation' },
                { label: 'IAF Member', desc: 'International Accreditation Forum' },
              ].map((item) => (
                <div key={item.label} className="bg-[#1a1a1a] rounded-lg p-4 border border-gray-800">
                  <p className="text-[#4FBFAD] font-bold text-sm">{item.label}</p>
                  <p className="text-gray-500 text-xs mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-64 h-64 relative">
              <Image
                src="/certifications/iso.png"
                alt="ISO Certified"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Pillars */}
      <section className="py-20 bg-[#111]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-[#4FBFAD] font-semibold text-sm uppercase tracking-widest mb-3 block">How We Do It</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Our Sustainability Pillars</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '♻️',
                title: 'Responsible Materials',
                desc: 'We source high-quality, recyclable-grade plastics and continuously explore bio-based and recycled material options to reduce dependence on virgin polymers.',
              },
              {
                icon: '⚡',
                title: 'Energy Efficiency',
                desc: 'Our Shahdara Industrial Zone facility is equipped with energy-optimised machinery and processes that reduce electricity consumption without compromising on product quality.',
              },
              {
                icon: '🏭',
                title: 'Waste Reduction',
                desc: 'We operate lean manufacturing processes that minimise material offcuts and production waste. Plastic offcuts are reprocessed wherever possible, reducing landfill contribution.',
              },
              {
                icon: '👷',
                title: 'Worker Wellbeing',
                desc: 'Certified under ISO 45001:2018, we maintain rigorous occupational health and safety standards, ensuring every team member works in a safe, dignified environment.',
              },
              {
                icon: '🌱',
                title: 'Community Impact',
                desc: 'Since 1996, Majid Industries has contributed to local employment, skills development, and the economic growth of the Lahore industrial community.',
              },
              {
                icon: '📋',
                title: 'Continuous Compliance',
                desc: 'We undergo regular third-party audits and certification renewals to uphold the highest environmental, safety, and quality standards across all our operations.',
              },
            ].map((pillar) => (
              <div
                key={pillar.title}
                className="bg-[#1a1a1a] rounded-xl p-8 border border-gray-800 hover:border-[#4FBFAD]/50 transition-colors"
              >
                <div className="text-4xl mb-4">{pillar.icon}</div>
                <h3 className="text-white font-bold text-lg mb-3">{pillar.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Partner With a Responsible Manufacturer
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
          Choose Majid Industries for certified, environmentally responsible plastic products. Contact us to learn more about our sustainability practices or to enquire about our product range.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-block bg-[#4FBFAD] text-white px-10 py-4 rounded-lg hover:bg-[#3da392] transition-colors font-semibold text-lg"
          >
            Get in Touch
          </Link>
          <Link
            href="/about"
            className="inline-block border border-gray-600 text-gray-300 px-10 py-4 rounded-lg hover:border-gray-400 hover:text-white transition-colors font-semibold text-lg"
          >
            About Us
          </Link>
        </div>
      </section>

    </div>
  );
}
