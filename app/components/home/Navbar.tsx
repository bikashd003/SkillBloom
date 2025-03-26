import { Link } from "@remix-run/react";
import { Button } from 'antd';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  scrollY: number;
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
}

export default function Navbar({ scrollY, isMenuOpen, setIsMenuOpen }: NavbarProps) {
  const navAnimation = {
    hidden: { y: -20, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const menuAnimation = {
    hidden: { x: -300, opacity: 0 },
    show: { 
      x: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    },
    exit: {
      x: -300,
      opacity: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.nav 
      initial="hidden"
      animate="show"
      variants={navAnimation}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? "bg-[#1C1C25]/95 backdrop-blur-md shadow-lg" : ""
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-6 px-4">
        <Link to="/" className="text-2xl font-bold">
          <motion.span 
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="h-10 w-10 rounded-full bg-gradient-to-r from-[#9AE362] to-[#8ACF57]" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Dev.
            </span>
          </motion.span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {["Home", "About Us", "Courses"].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link 
                to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                className="hover:text-[#9AE362] transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#9AE362] transition-all group-hover:w-full" />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button danger className="text-gray-800 hover:text-[#9AE362] px-6">
              Log In
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="bg-gradient-to-r from-[#9AE362] to-[#8ACF57] text-black hover:opacity-90 px-6">
              Start Free Trial
            </Button>
          </motion.div>
        </div>

        <Button 
          danger 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuAnimation}
            initial="hidden"
            animate="show"
            exit="exit"
            className="md:hidden bg-[#2A2A35] p-6 border-t border-gray-700"
          >
            <div className="flex flex-col gap-4">
              {["Home", "About Us", "Courses", "Contact"].map((item) => (
                <Link 
                  key={item}
                  to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                  className="hover:text-[#9AE362] transition-colors text-lg"
                >
                  {item}
                </Link>
              ))}
              <Button danger className="text-gray-800 hover:text-[#9AE362] mt-4">
                Log In
              </Button>
              <Button className="bg-gradient-to-r from-[#9AE362] to-[#8ACF57] text-black hover:opacity-90">
                Start Free Trial
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}