import { motion } from 'framer-motion';
import { Book, Users, Award, Globe } from 'lucide-react';
import Navbar from '~/components/home/Navbar';
import Footer from '~/components/common/Footer';
import { useState, useEffect } from 'react';

export default function AboutUs() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const stats = [
    { icon: <Users className="w-6 h-6" />, value: "10K+", label: "Students" },
    { icon: <Book className="w-6 h-6" />, value: "100+", label: "Courses" },
    { icon: <Award className="w-6 h-6" />, value: "50+", label: "Instructors" },
    { icon: <Globe className="w-6 h-6" />, value: "25+", label: "Countries" },
  ];

  return (
    <div className="min-h-screen bg-[#1C1C25] text-white">
      <Navbar scrollY={scrollY} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              About SkillBloom
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Empowering the next generation of tech professionals through innovative learning experiences
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-[#9AE362] to-[#8ACF57] w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 text-black">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-[#2A2A35]">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-gray-400">
              At SkillBloom, we believe in making quality tech education accessible to everyone. 
              Our mission is to bridge the gap between traditional education and industry demands, 
              providing practical, hands-on learning experiences that prepare our students for 
              real-world success.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}