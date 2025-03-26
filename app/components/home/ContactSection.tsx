import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from 'antd';

export default function ContactSection() {
  return (
    <section className="container mx-auto py-24 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Get in Touch
          </span>
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="flex items-start gap-4">
            <div className="bg-gradient-to-br from-[#9AE362] to-[#8ACF57] p-3 rounded-xl">
              <Mail className="w-6 h-6 text-black" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-400">info@skillbloom.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-gradient-to-br from-[#9AE362] to-[#8ACF57] p-3 rounded-xl">
              <Phone className="w-6 h-6 text-black" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-gray-400">+1 (555) 123-4567</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-gradient-to-br from-[#9AE362] to-[#8ACF57] p-3 rounded-xl">
              <MapPin className="w-6 h-6 text-black" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-gray-400">123 Tech Street, San Francisco, CA 94105</p>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="First Name"
              className="bg-[#2A2A35] border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-[#9AE362]"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="bg-[#2A2A35] border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-[#9AE362]"
            />
          </div>
          <input
            type="email"
            placeholder="Email Address"
            className="w-full bg-[#2A2A35] border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-[#9AE362]"
          />
          <textarea
            placeholder="Your Message"
            rows={6}
            className="w-full bg-[#2A2A35] border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-[#9AE362]"
          />
          <Button
            className="bg-gradient-to-r from-[#9AE362] to-[#8ACF57] text-black hover:opacity-90 
                     px-8 py-6 h-auto flex items-center gap-2 justify-center w-full"
          >
            Send Message
            <Send className="w-5 h-5" />
          </Button>
        </motion.form>
      </div>
    </section>
  );
}