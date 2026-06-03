'use client';

import { motion } from 'framer-motion';
import { Award, Shield, Users } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Quality Assurance',
    description:
      'Majid Industries ensures top-notch products with meticulous craftsmanship and rigorous quality control.',
  },
  {
    icon: Shield,
    title: 'Reliability',
    description:
      'Our self-powered facility guarantees prompt delivery without interruptions across Pakistan.',
  },
  {
    icon: Users,
    title: 'Expertise and Experience',
    description:
      'With over 25 years of experience, we offer unmatched industry expertise and innovation.',
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-16 md:py-24 bg-[#111111]">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-white mb-16"
        >
          Why choose us?
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-[#4FBFAD] text-white rounded-full mb-6">
                  <Icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
