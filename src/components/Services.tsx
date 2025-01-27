import React from 'react';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Camera, Video, Film, CheckCircle, Clock, Award, Hexagon, Globe, Building } from "lucide-react";
import { Button } from "./ui/button";

const services = [
  {
    icon: <Camera className="w-12 h-12" />,
    title: "Aerial Photography",
    description: "High-resolution aerial images perfect for real estate, events, and landscapes.",
    features: [
      "4K Ultra HD Resolution",
      "RAW Image Format",
      "Wide-angle Shots",
      "Same-day Delivery"
    ],
    popular: true
  },
  {
    icon: <Video className="w-12 h-12" />,
    title: "Drone Videography",
    description: "Cinematic aerial footage for commercials, events, and promotional content.",
    features: [
      "4K/60fps Recording",
      "Smooth Stabilization",
      "Complex Flight Paths",
      "Color Grading"
    ],
    popular: false
  },
  {
    icon: <Film className="w-12 h-12" />,
    title: "Video Editing",
    description: "Professional post-production services to deliver stunning final content.",
    features: [
      "Custom Transitions",
      "Sound Design",
      "Color Correction",
      "Motion Graphics"
    ],
    popular: false
  }
];

const industries = [
  { icon: <Building className="w-6 h-6" />, name: "Real Estate" },
  { icon: <Globe className="w-6 h-6" />, name: "Tourism" },
  { icon: <Hexagon className="w-6 h-6" />, name: "Construction" }
];

const ServiceCard = ({ service, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative group"
    >
      <div className={`
        bg-black/40 backdrop-blur-lg rounded-xl p-8
        border border-yellow-400/20 hover:border-yellow-400/40
        transform transition-all duration-300 hover:scale-[1.02]
        ${service.popular ? 'ring-2 ring-yellow-400/50' : ''}
      `}>
        {service.popular && (
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold">
              Most Popular
            </span>
          </div>
        )}

        <div className="text-yellow-400 mb-6 transform transition-transform group-hover:scale-110 duration-300">
          {service.icon}
        </div>

        <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
        <p className="text-gray-400 mb-6">{service.description}</p>

        <div className="space-y-3 mb-8">
          {service.features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-yellow-400" />
              <span className="text-gray-300">{feature}</span>
            </div>
          ))}
        </div>

        <Button 
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-6"
        >
          Get Started
        </Button>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMEgwdjYwaDYwVjB6TTIgMmg1NnY1NkgyVjJ6IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
            <Clock className="w-6 h-6 text-yellow-400" />
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
          </motion.div>

          <motion.h2
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold mb-6"
          >
            Our Professional Services
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-400"
          >
            Elevate your project with our comprehensive drone services and cutting-edge technology
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* Industries Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold mb-8">Industries We Serve</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-6 py-3 rounded-full border border-yellow-400/20"
              >
                {industry.icon}
                <span>{industry.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { icon: <Clock />, stat: "24h", label: "Turnaround" },
            { icon: <Award />, stat: "100%", label: "Satisfaction" },
            { icon: <CheckCircle />, stat: "50+", label: "Projects" }
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-yellow-400 mb-2 flex justify-center">{item.icon}</div>
              <div className="text-2xl font-bold mb-1">{item.stat}</div>
              <div className="text-gray-400">{item.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;