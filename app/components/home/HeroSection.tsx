import { Button } from 'antd';
import { Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';
import Hero from "../../../public/Images/Hero.png";

export default function HeroSection() {
  const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
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

  return (
    <section className="container mx-auto pt-32 pb-16 px-4">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={containerAnimation}
          initial="hidden"
          animate="show"
          className="space-y-8"
        >
          <motion.div 
            variants={itemAnimation}
            className="w-16 h-16 bg-gradient-to-br from-[#2A2A35] to-[#1C1C25] rounded-2xl flex items-center justify-center shadow-xl"
          >
            <Lightbulb className="w-8 h-8 text-[#9AE362]" />
          </motion.div>

          <motion.h1 
            variants={itemAnimation}
            className="text-5xl md:text-7xl font-bold leading-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
              GROW YOUR SKILLS <br />IN MINUTES
            </span>
          </motion.h1>

          <motion.p 
            variants={itemAnimation}
            className="text-xl text-gray-400 max-w-lg"
          >
            Explore unlimited courses that fit your skill development process.
            Master new technologies at your own pace.
          </motion.p>

          <motion.div 
            variants={itemAnimation}
            className="flex items-center gap-6"
          >
            <Button 
              className="bg-gradient-to-r from-[#9AE362] to-[#8ACF57] text-black hover:opacity-90 
                         text-lg px-8 py-2 h-auto shadow-lg shadow-[#9AE362]/20"
            >
              Get Started
            </Button>
          </motion.div>

          <motion.div 
            variants={itemAnimation}
            className="flex items-center gap-6"
          >
            <div className="bg-gradient-to-br from-[#2A2A35] to-[#1C1C25] p-4 rounded-2xl shadow-xl">
              <span className="text-3xl">😊</span>
            </div>
            <div>
              <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#9AE362] to-[#8ACF57]">
                600+
              </div>
              <div className="text-gray-400">Happy Students</div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.8,
            ease: "easeOut",
            delay: 0.4 
          }}
          className="relative"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#9AE362]/20 to-transparent rounded-3xl blur-3xl" />
            <img 
              src={Hero} 
              alt="Hero" 
              className="w-full h-full object-cover rounded-3xl shadow-2xl relative z-10" 
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}