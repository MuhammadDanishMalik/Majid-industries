'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useState } from 'react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); setTimeout(() => setSubmitted(false), 3000); };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => { setFormData({ ...formData, [e.target.name]: e.target.value }); };

  const contactItems = [
    { icon: MapPin, title: 'Head Office', text: 'Plot 9, Block 4 Karim Park, Ravi Road\nLahore, Punjab, Pakistan' },
    { icon: MapPin, title: 'Factory', text: 'Bara Dari Road, Javed Forman Street\nShahdara Industrial Zone, Lahore' },
    { icon: Phone, title: 'Phone', text: '0320 4006761\n0300 2007742' },
    { icon: Mail, title: 'Email', text: 'Majidindustries@hotmail.com' },
    { icon: Clock, title: 'Working Hours', text: 'Monday - Saturday: 9:00 AM - 5:00 PM\nSunday: Closed' },
  ];

  return (
    <div className="bg-[#0a0a0a]">
      <div className="bg-[#111] border-b border-gray-800"><div className="container mx-auto px-4 py-3"><div className="flex items-center space-x-2 text-sm"><Link href="/" className="text-gray-500 hover:text-[#4FBFAD]">Home</Link><span className="text-gray-600">›</span><span className="text-white font-medium">Contact</span></div></div></div>

      <motion.section initial="hidden" animate="visible" variants={fadeInUp} className="bg-gradient-to-br from-[#4FBFAD] to-[#0B6A5D] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">Have questions about our products? We&apos;re here to help you find the perfect packaging solutions.</p>
        </div>
      </motion.section>

      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl font-bold mb-8 text-white">Contact Information</h2>
              <div className="space-y-6">
                {contactItems.map((item, i) => (
                  <motion.div key={i} variants={fadeInUp} whileHover={{ x: 8 }} className="bg-[#1a1a1a] p-6 rounded-2xl border border-gray-800 hover:border-gray-700 transition-all">
                    <div className="flex items-start space-x-4">
                      <div className="bg-[#4FBFAD] p-3 rounded-xl"><item.icon className="w-6 h-6 text-white" /></div>
                      <div>
                        <h3 className="font-bold text-lg mb-2 text-white">{item.title}</h3>
                        <p className="text-gray-400 whitespace-pre-line">{item.text}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div className="bg-[#1a1a1a] p-8 rounded-2xl border border-gray-800">
                <h2 className="text-3xl font-bold mb-6 text-white">Send us a Message</h2>
                {submitted && (<motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="bg-green-900/50 border border-green-700 text-green-400 px-4 py-3 rounded-lg mb-6">✓ Thank you! We&apos;ll get back to you soon.</motion.div>)}
                <form onSubmit={handleSubmit} className="space-y-6">
                  {[{ label: 'Your Name *', name: 'name', type: 'text', ph: 'John Doe' }, { label: 'Email Address *', name: 'email', type: 'email', ph: 'john@example.com' }, { label: 'Phone Number', name: 'phone', type: 'tel', ph: '+92 300 1234567' }].map(f => (
                    <div key={f.name}><label className="block text-sm font-medium text-gray-400 mb-2">{f.label}</label><input type={f.type} name={f.name} value={formData[f.name as keyof typeof formData]} onChange={handleChange} required={f.label.includes('*')} className="w-full px-4 py-3 bg-[#0a0a0a] border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#4FBFAD] focus:border-transparent outline-none text-white placeholder-gray-600" placeholder={f.ph} /></div>
                  ))}
                  <div><label className="block text-sm font-medium text-gray-400 mb-2">Subject *</label><select name="subject" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-3 bg-[#0a0a0a] border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#4FBFAD] focus:border-transparent outline-none text-white"><option value="">Select a subject</option><option value="product-inquiry">Product Inquiry</option><option value="bulk-order">Bulk Order</option><option value="custom-request">Custom Request</option><option value="partnership">Partnership Opportunity</option><option value="other">Other</option></select></div>
                  <div><label className="block text-sm font-medium text-gray-400 mb-2">Message *</label><textarea name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full px-4 py-3 bg-[#0a0a0a] border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#4FBFAD] focus:border-transparent outline-none text-white placeholder-gray-600 resize-none" placeholder="Tell us about your requirements..." /></div>
                  <button type="submit" className="w-full bg-gradient-to-r from-[#4FBFAD] to-[#3DA895] text-white py-4 px-6 rounded-lg font-medium flex items-center justify-center space-x-2 hover:shadow-lg transition-all"><Send className="w-5 h-5" /><span>Send Message</span></button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
