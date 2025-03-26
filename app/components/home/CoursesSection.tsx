import { motion } from 'framer-motion';
import { Star, Clock, Users } from 'lucide-react';
import React from "../../src/Images/react.jpg";
import Python from "../../src/Images/python.jpg";
import UI from "../../src/Images/ui.png";

const courses = [
  {
    title: "React Development",
    image: React,
    rating: 4.9,
    students: 1200,
    duration: "12 weeks",
    price: "₹999"
  },
  {
    title: "Python Mastery",
    image: Python,
    rating: 4.8,
    students: 980,
    duration: "10 weeks",
    price: "₹899"
  },
  {
    title: "UI/UX Design",
    image: UI,
    rating: 4.7,
    students: 750,
    duration: "8 weeks",
    price: "₹799"
  }
];

export default function CoursesSection() {
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
            Popular Courses
          </span>
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Start your journey with our most sought-after courses
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <motion.div
            key={course.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-gradient-to-br from-[#2A2A35] to-[#1C1C25] rounded-2xl 
                       overflow-hidden border border-gray-800 shadow-xl 
                       hover:shadow-2xl transition-all hover:border-[#9AE362]/50"
          >
            <div className="relative">
              <img 
                src={course.image} 
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md 
                            px-3 py-1 rounded-full text-sm flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-400" fill="currentColor" />
                {course.rating}
              </div>
            </div>

            <div className="p-6 space-y-4">
              <h3 className="text-xl font-semibold">{course.title}</h3>
              
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {course.duration}
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  {course.students} students
                </div>
              </div>

              <div className="flex items-center justify-between pt-4">
                <span className="text-2xl font-bold text-[#9AE362]">{course.price}</span>
                <button className="bg-gradient-to-r from-[#9AE362] to-[#8ACF57] 
                                 text-black px-4 py-2 rounded-xl hover:opacity-90 
                                 transition-opacity">
                  Enroll Now
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}