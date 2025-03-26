import { Button } from 'antd';
import { Lightbulb, ArrowRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import Hero from "../../src/Images/Hero.png";

export default function HeroSection() {
  const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const floatingAnimation = {
    y: [-10, 10],
    transition: {
      y: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="container mx-auto pt-32 pb-16 px-4 relative">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-[#9AE362]/30 rounded-full blur-[120px]" />
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={containerAnimation}
          initial="hidden"
          animate="show"
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div 
            variants={itemAnimation}
            className="inline-flex items-center gap-2 bg-gradient-to-br from-[#2A2A35] to-[#1C1C25] 
                       px-4 py-2 rounded-full shadow-xl border border-gray-800"
          >
            <Lightbulb className="w-5 h-5 text-[#9AE362]" />
            <span className="text-sm text-gray-300">Start Learning Today</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            variants={itemAnimation}
            className="text-6xl md:text-7xl font-bold leading-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
              Level Up Your <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9AE362] to-[#8ACF57]">
                Tech Skills
              </span>
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p 
            variants={itemAnimation}
            className="text-xl text-gray-400 max-w-lg leading-relaxed"
          >
            Master in-demand technologies through interactive lessons and real-world projects.
            Join our community of passionate learners.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemAnimation}
            className="flex items-center gap-6"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                className="bg-gradient-to-r from-[#9AE362] to-[#8ACF57] text-black hover:opacity-90 
                           text-lg px-8 py-6 h-auto shadow-lg shadow-[#9AE362]/20 flex items-center gap-2"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                className="bg-[#2A2A35] text-white hover:bg-[#2A2A35]/80 
                           text-lg px-8 py-6 h-auto border border-gray-700 flex items-center gap-2"
              >
                <Play className="w-5 h-5" /> Watch Demo
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div 
            variants={itemAnimation}
            className="flex items-center gap-8 pt-8"
          >
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-br from-[#2A2A35] to-[#1C1C25] p-4 rounded-2xl shadow-xl 
                            border border-gray-800">
                <span className="text-3xl">🚀</span>
              </div>
              <div>
                <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#9AE362] to-[#8ACF57]">
                  600+
                </div>
                <div className="text-gray-400">Active Learners</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-br from-[#2A2A35] to-[#1C1C25] p-4 rounded-2xl shadow-xl 
                            border border-gray-800">
                <span className="text-3xl">⭐</span>
              </div>
              <div>
                <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#9AE362] to-[#8ACF57]">
                  4.9
                </div>
                <div className="text-gray-400">User Rating</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="relative"
        >
          <motion.div
            animate={floatingAnimation}
            className="relative"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#9AE362]/20 to-transparent rounded-3xl blur-3xl" />

            {/* Image Container */}
            <div className="relative bg-gradient-to-br from-[#2A2A35] to-[#1C1C25] p-2 rounded-3xl 
                          border border-gray-800 shadow-2xl">
              <img
                src={Hero}
                alt="Hero" 
                className="w-full h-full object-cover rounded-2xl relative z-10"
              />

              {/* Floating Elements */}
              <motion.div
                animate={{
                  y: [-10, 10],
                  transition: {
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }
                }}
                className="absolute -top-10 -right-10 bg-gradient-to-br from-[#2A2A35] to-[#1C1C25] 
                           p-4 rounded-2xl shadow-xl border border-gray-800"
              >
                <span className="text-3xl">💻</span>
              </motion.div>

              <motion.div
                animate={{
                  y: [10, -10],
                  transition: {
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }
                }}
                className="absolute -bottom-10 -left-10 bg-gradient-to-br from-[#2A2A35] to-[#1C1C25] 
                           p-4 rounded-2xl shadow-xl border border-gray-800"
              >
                <span className="text-3xl">🎯</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
