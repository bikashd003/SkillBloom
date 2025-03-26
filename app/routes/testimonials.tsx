import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Footer from '~/components/common/Footer';
import {  useNavigate } from "@remix-run/react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Frontend Developer",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    content: "SkillBloom transformed my career. The React course was comprehensive and practical. I landed my dream job within months of completing it!",
    rating: 5,
    course: "React Development"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Data Scientist",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    content: "The Python Mastery course exceeded my expectations. The hands-on projects really helped cement my understanding.",
    rating: 5,
    course: "Python Mastery"
  },
  {
    id: 3,
    name: "Emma Davis",
    role: "UI/UX Designer",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    content: "As someone transitioning into design, the UI/UX course provided exactly what I needed. The instructors are fantastic!",
    rating: 5,
    course: "UI/UX Design"
  }
];

export default function Testimonials() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#1C1C25]">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 bg-[#2A2A35]/50 rounded-full text-[#9AE362] text-sm mb-4 border border-gray-800"
          >
            Testimonials
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Student Success Stories
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Hear from our students who have transformed their careers through SkillBloom
          </motion.p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#2A2A35]/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 
                         hover:border-[#9AE362]/30 transition-all duration-300
                         hover:shadow-lg hover:shadow-[#9AE362]/5"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-[#9AE362]"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-white">{testimonial.name}</h3>
                    <p className="text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#9AE362] text-[#9AE362]" />
                  ))}
                </div>

                <p className="text-gray-300 mb-4">{testimonial.content}</p>
                
                <div className="pt-4 border-t border-gray-800">
                  <span className="text-sm text-[#9AE362]">
                    Course: {testimonial.course}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container mx-auto text-center"
        >
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-[#2A2A35] to-[#1C1C25] 
                        border border-gray-800 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-gray-400 mb-8">
              Join thousands of successful students who have transformed their careers with SkillBloom
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-[#9AE362] to-[#8ACF57] text-black 
                       px-8 py-3 rounded-xl font-semibold hover:opacity-90 
                       transition-opacity shadow-lg shadow-[#9AE362]/20"
              onClick={() => navigate('/courses')}
            >
              Explore Courses
            </motion.button>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}