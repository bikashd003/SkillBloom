import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Button } from 'antd';

export default function ContactSection() {
  return (
    <section className="relative container mx-auto py-32 px-4">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20 relative"
      >
        <span className="inline-block px-4 py-2 bg-[#2A2A35]/50 rounded-full text-[#9AE362] text-sm mb-4 border border-gray-800">
          Contact Us
        </span>
        <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
          Let&apos;s Connect
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
        </p>
      </motion.div>

      <div className="relative grid md:grid-cols-2 gap-16 items-center">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="bg-[#2A2A35]/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8 space-y-8 hover:border-[#9AE362]/30 transition-colors duration-300">
            {[
              { icon: Mail, title: "Email", value: "info@skillbloom.com", delay: 0 },
              { icon: Phone, title: "Phone", value: "+91 1234567890", delay: 0.1 },
              { icon: MapPin, title: "Location", value: "123 Tech Street, WB 700001", delay: 0.2 }
            ].map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: item.delay }}
                className="flex items-center gap-6 group"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#9AE362] to-[#8ACF57] rounded-xl blur-md opacity-50 group-hover:opacity-100 transition-opacity" />
                  <div className="relative bg-gradient-to-br from-[#9AE362] to-[#8ACF57] p-4 rounded-xl">
                    <item.icon className="w-6 h-6 text-black" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-300 mb-1">{item.title}</h3>
                  <p className="text-gray-400 group-hover:text-[#9AE362] transition-colors">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <form className="relative bg-[#2A2A35]/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {["First Name", "Last Name"].map((placeholder) => (
                <motion.div
                  key={placeholder}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <input
                    type="text"
                    placeholder={placeholder}
                    className="w-full bg-[#1C1C25]/50 border border-gray-700 rounded-xl px-4 py-3 
                             focus:outline-none focus:border-[#9AE362] transition-colors
                             group-hover:border-[#9AE362]/50"
                  />
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-[#1C1C25]/50 border border-gray-700 rounded-xl px-4 py-3 
                         focus:outline-none focus:border-[#9AE362] transition-colors
                         group-hover:border-[#9AE362]/50"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <textarea
                placeholder="Your Message"
                rows={6}
                className="w-full bg-[#1C1C25]/50 border border-gray-700 rounded-xl px-4 py-3 
                         focus:outline-none focus:border-[#9AE362] transition-colors
                         group-hover:border-[#9AE362]/50"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                className="bg-gradient-to-r from-[#9AE362] to-[#8ACF57] text-black hover:opacity-90 
                         px-8 py-6 h-auto flex items-center gap-2 justify-center w-full
                         text-lg font-semibold rounded-xl shadow-lg shadow-[#9AE362]/20"
              >
                Send Message
                <ArrowRight className="w-5 h-5" />
              </Button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
