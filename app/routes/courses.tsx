import { motion } from 'framer-motion';
import { Star, Clock, Users, Search } from 'lucide-react';
import { useState, useEffect } from 'react';
import Navbar from '~/components/home/Navbar';
import Footer from '~/components/common/Footer';
import React from "../src/Images/react.jpg";
import Python from "../src/Images/python.jpg";
import UI from "../src/Images/ui.png";

const allCourses = [
  {
    title: "React Development",
    image: React,
    rating: 4.9,
    students: 1200,
    duration: "12 weeks",
    price: "$99",
    category: "Web Development"
  },
  {
    title: "Python Mastery",
    image: Python,
    rating: 4.8,
    students: 980,
    duration: "10 weeks",
    price: "$89",
    category: "Programming"
  },
  {
    title: "UI/UX Design",
    image: UI,
    rating: 4.7,
    students: 750,
    duration: "8 weeks",
    price: "$79",
    category: "Design"
  },
  // Add more courses as needed
];

export default function Courses() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const categories = ["All", "Web Development", "Programming", "Design"];

  const filteredCourses = allCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#1C1C25] text-white">
      <Navbar scrollY={scrollY} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {/* Header Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-center mb-6"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Our Courses
            </span>
          </motion.h1>

          {/* Search and Filter */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-[#2A2A35] border border-gray-700 rounded-xl px-4 py-3 pl-12 
                         focus:outline-none focus:border-[#9AE362]"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>

            <div className="flex flex-wrap gap-4 mt-6 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-xl transition-colors ${
                    selectedCategory === category
                      ? "bg-[#9AE362] text-black"
                      : "bg-[#2A2A35] text-gray-400 hover:bg-[#9AE362]/20"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Courses Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
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
        </div>
      </section>

      <Footer />
    </div>
  );
}