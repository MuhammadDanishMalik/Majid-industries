'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Factory, Droplet, Package, Sparkles, Target, Eye, Truck, Zap, MapPin, Wrench, Shield } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};
const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

export default function AboutPage() {
  const caps = [
    { icon: <Factory className="w-10 h-10" />, title: 'INJECTION MOULDING', desc: 'High-precision injection moulding solutions, turning your product ideas into durable, reliable components.', color: 'from-blue-600 to-blue-700', iconBg: 'bg-blue-900/50' },
    { icon: <Droplet className="w-10 h-10" />, title: 'BLOW MOULDING', desc: 'Robust blow moulding solutions engineered for industrial-strength performance and durability.', color: 'from-green-600 to-green-700', iconBg: 'bg-green-900/50' },
    { icon: <Package className="w-10 h-10" />, title: 'PET BLOW', desc: 'Precision PET blow moulding for lightweight, durable bottles for food, beverage, and personal care.', color: 'from-pink-600 to-pink-700', iconBg: 'bg-pink-900/50' },
    { icon: <Sparkles className="w-10 h-10" />, title: 'IN-MOLD LABELLING', desc: 'Seamless in-mold labelling for premium product branding and enhanced shelf appeal.', color: 'from-orange-600 to-orange-700', iconBg: 'bg-orange-900/50' },
  ];
  const reasons = [
    { icon: <Truck className="w-8 h-8" />, title: 'Seamless Logistics', desc: 'Rapid, reliable just-in-time delivery through optimized supply chain systems.' },
    { icon: <Zap className="w-8 h-8" />, title: 'Unmatched Agility', desc: 'Quick adaptation to demand shifts, shortages, and logistical challenges.' },
    { icon: <MapPin className="w-8 h-8" />, title: 'Nationwide Reach', desc: 'Strategic hubs across four provinces ensuring efficient coverage.' },
    { icon: <Wrench className="w-8 h-8" />, title: 'Technical Expertise', desc: 'Deep knowledge in polymers, plastics, and advanced packaging solutions.' },
    { icon: <Shield className="w-8 h-8" />, title: 'Compliance Excellence', desc: 'Strict adherence to safety, environmental, and regulatory standards.' },
  ];

  return (
    <div className="bg-[#0a0a0a]">
      <div className="bg-[#111] border-b border-gray-800"><div className="container mx-auto px-4 py-3"><div className="flex items-center space-x-2 text-sm"><Link href="/" className="text-gray-500 hover:text-[#4FBFAD]">Home</Link><span className="text-gray-600">›</span><span className="text-white font-medium">About Us</span></div></div></div>

      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold text-[#4FBFAD] tracking-wide uppercase mb-4">MAJID INDUSTRIES</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Us</h1>
            <p className="text-gray-400 text-lg leading-relaxed">MAJID INDUSTRIES PVT LTD, a leading manufacturer of high-quality plastic packaging solutions since 1990, is dedicated to innovation, sustainability, and customer satisfaction.</p>
          </div>
          <motion.div variants={scaleIn} className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
            <Image src="/hero-facility.jpg" alt="Majid Industries Facility" fill className="object-cover" />
          </motion.div>
        </div>
      </motion.section>

      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="py-16 bg-[#111]">
        <div className="container mx-auto px-4">
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Our Manufacturing Capabilities</motion.h2>
          <div className="relative w-full rounded-2xl overflow-hidden">
            <Image src="/manufacturing-capabilities.jpg" alt="Manufacturing Capabilities - Injection Moulding, Blow Moulding, PET Blow, In-Mold Labelling" width={1200} height={600} className="w-full h-auto rounded-2xl" />
          </div>
        </div>
      </motion.section>

      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="relative bg-gradient-to-br from-emerald-800 to-emerald-900 py-20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto bg-emerald-700/30 backdrop-blur-sm rounded-3xl p-12 border border-emerald-600/30">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">Majid Industries Pvt. Ltd</h2>
            <p className="text-white/90 text-lg leading-relaxed mb-6 text-center"><strong>MIPL</strong> has become one of Pakistan&apos;s leading plastic manufacturing companies, offering <strong>200+ products</strong> serving automotive, household, FMCG, packaging, and food &amp; beverage industries.</p>
            <p className="text-white/90 text-lg leading-relaxed text-center">The company has established itself as a <strong>trusted single vendor</strong> for numerous national and multinational corporations in Pakistan.</p>
          </div>
        </div>
      </motion.section>

      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div variants={scaleIn} whileHover={{ y: -8 }} className="bg-[#1a1a1a] rounded-3xl p-10 border border-gray-800 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#4FBFAD] to-[#3DA895]" />
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#4FBFAD] to-[#3DA895] rounded-2xl mb-6"><Target className="w-10 h-10 text-white" /></div>
              <h3 className="text-3xl font-bold text-[#4FBFAD] mb-6">Our Mission</h3>
              <p className="text-gray-400 leading-relaxed mb-4">At <strong className="text-white">Majid Industries (PVT) LTD</strong>, we deliver top-notch plastic packaging solutions combining cutting-edge technology with exceptional craftsmanship.</p>
              <p className="text-gray-400 leading-relaxed">Our mission is to foster long-term partnerships, ensuring success through reliable service and continuous improvement.</p>
              <p className="text-xl font-semibold text-[#4FBFAD] mt-6 italic">Together, let&apos;s package the future!</p>
            </motion.div>
            <motion.div variants={scaleIn} whileHover={{ y: -8 }} className="bg-[#1a1a1a] rounded-3xl p-10 border border-gray-800 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#4FBFAD] to-[#3DA895]" />
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#4FBFAD] to-[#3DA895] rounded-2xl mb-6"><Eye className="w-10 h-10 text-white" /></div>
              <h3 className="text-3xl font-bold text-[#4FBFAD] mb-6">Our Vision</h3>
              <p className="text-gray-400 leading-relaxed text-lg italic">&quot;To be the most trusted and innovative provider of high-quality plastic packaging solutions, empowering businesses globally while promoting sustainability.&quot;</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="py-20 bg-[#111]">
        <div className="container mx-auto px-4">
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-[#4FBFAD] to-[#6fd4c4] bg-clip-text text-transparent">Why Partner With Majid Industries</motion.h2>
          <motion.p variants={fadeInUp} className="text-center text-gray-500 max-w-2xl mx-auto mb-16">We deliver excellence through innovation, reliability, and nationwide reach</motion.p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {reasons.map((r, i) => (
              <motion.div key={i} variants={scaleIn} whileHover={{ y: -10 }} className="bg-[#1a1a1a] rounded-2xl p-8 border border-gray-800 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#4FBFAD] to-transparent" />
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#4FBFAD] to-[#3DA895] rounded-xl mb-6 text-white">{r.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{r.title}</h3>
                <p className="text-gray-400">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="py-20 bg-gradient-to-br from-[#4FBFAD] to-[#0B6A5D]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Partner With Us?</h2>
          <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">Let&apos;s discuss how our plastic packaging solutions can elevate your business</p>
          <Link href="/contact" className="inline-block bg-white text-[#0B6A5D] px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all">Contact Us Today</Link>
        </div>
      </motion.section>
    </div>
  );
}
