import { motion } from 'framer-motion';
import { Code2, Layout, Video, Users } from 'lucide-react';

const features = [
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Interactive Coding",
    description: "Learn by doing with hands-on coding exercises and real-time feedback"
  },
  {
    icon: <Video className="w-6 h-6" />,
    title: "Video Tutorials",
    description: "High-quality video lessons from industry experts"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Community Support",
    description: "Join a community of learners and get help when you need it"
  },
  {
    icon: <Layout className="w-6 h-6" />,
    title: "Project-Based",
    description: "Build real projects to strengthen your portfolio"
  }
];

export default function FeaturesSection() {
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
            Why Choose Us
          </span>
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          We provide the tools and resources you need to succeed in your tech journey
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-gradient-to-br from-[#2A2A35] to-[#1C1C25] p-6 rounded-2xl 
                       border border-gray-800 shadow-xl hover:shadow-2xl transition-shadow
                       hover:border-[#9AE362]/50"
          >
            <div className="bg-gradient-to-br from-[#9AE362] to-[#8ACF57] w-12 h-12 
                          rounded-xl flex items-center justify-center mb-6 text-black">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}