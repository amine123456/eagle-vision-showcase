import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { ArrowRight, Play, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

// Custom Drone Icon (SVG)
const DroneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 2048 2048" width="100" height="100">
  <path transform="translate(427,421)" d="m0 0 10 1 10 3 11 8 7 9 4 10 2 9v16h352l11 3 10 6 8 9 5 9 2 8v12l-4 12-7 10-7 6-8 4-13 3-349 1 1 79 12 5 16 10 13 11 9 10 11 18 6 15 3 12 1 7v61h74l1-13 3-16 5-14 8-14 9-11 8-8 13-9 12-6 12-4 11-2 79-1h533l37 1 15 3 13 5 11 6 13 10 8 8 10 14 6 13 4 12 3 21v5h73v-28l1-32 4-20 8-19 10-15 13-14 12-9 12-7 12-5 1-80h-351l-12-3-10-6-8-9-5-10-2-7v-11l4-13 7-11h2v-2l14-8 8-2 23-1h329l2-20 3-10 6-10 9-8 10-5 10-2 11 1 11 4 8 6 7 8 5 10 2 9v18h353l10 3 10 6 9 10 6 13v21l-3 4-6 10-9 8-7 4-14 3h-349l1 80 19 9 13 9 13 12 11 15 8 16 5 16 2 12 1 25v115l-1 61-2 14-6 19-10 17-8 10-2 3h-2v2h-2v2l-16 12-16 8-15 5-9 2-10 1h-32l-16-2-18-6-17-9-13-11-8-8-10-14-8-15-5-16-2-13-1-19v-40h-73l-1 19-3 16-6 16-9 15-11 12-11 9-14 8-18 6-11 2-15 1h-62v23l10 7 16 12 14 12 7 7 8 7 7 7 2 1v2l4 2 7 8 11 12 11 14 15 20 12 18 13 21 14 25 13 26 14 33 10 27 11 33 12 45 10 48 6 39 4 31 4 46 2 39v52l-3 10-7 11-10 8-11 4-11 2-13-3-8-4-9-8-6-10-3-9-1-5-2-42-1-30-3-37-6-52-10-54-10-40-8-28-15-42-18-40-13-25-10-17-11-17-12-17-14-17-9-11-27-27-11-9-14-11-9-6-7 1-18 6-13 2-118 1v63l169 1 10 2 10 5 10 9 6 11 3 14v180l-1 16-2 9-6 11-4 5-9 6-10 4-16 2h-405l-15-2-11-4-10-8-7-11-3-10-1-7v-192l3-14 6-10 5-6 11-7 12-3 28-1h142l1-63-116-1-16-2-19-7-7 1-21 16-10 9-8 7-19 19-6 8h-2l-2 4-9 11-14 19-10 15-10 16-6 11-14 27-14 32-10 28-10 30-11 41-7 34-6 35-3 23-4 38-2 31-2 55-2 18-3 9-8 11-11 8-10 3-4 1h-9l-12-3-10-7-8-9-4-8-2-7-1-8 1-44 2-41 5-55 8-54 10-49 11-42 9-28 10-29 10-24 8-18 12-25 12-22 9-15 7-11 15-22 13-17 13-16 12-13 3-4h2l2-4 8-7 9-9 8-7 11-10 12-9 16-11v-23h-62l-23-2-16-5-16-8-13-10-8-8-10-14-7-15-4-14-2-16v-12l-73 1-1 56-3 18-6 17-9 16-8 10-11 11-13 9-16 8-17 5-15 2h-34l-14-2-18-6-14-7-13-10-12-12-8-11-7-12-6-16-3-17-1-12v-182l2-18 4-15 8-17 8-12 11-12 9-8 14-9 16-7 1-80h-351l-12-3-11-7-8-9-5-9-1-4v-19l6-12 9-10 9-6 11-3 352-1 1-16 3-13 7-12h2l2-4 12-7zm587 802-10 3-10 5-12 11-6 9-5 13-1 6v14l3 12 6 12 10 11 14 8 9 3 6 1h11l11-2 16-8 10-9 8-13 3-9 1-6v-14l-3-12-6-12-9-10-8-6-11-5-7-2z" fill="#f8c814"/>
  <path transform="translate(2047,505)" d="m0 0" fill="#f8c814"/>
  </svg>
);

const Hero = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
          style={{ 
            filter: "brightness(0.4)",
            transform: scrolled ? 'scale(1.1)' : 'scale(1)',
            transition: 'transform 0.7s ease-out'
          }}
        >
          <source src="YOUR_VIDEO_URL_HERE" type="video/mp4" />
        </video>
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMEgwdjYwaDYwVjB6TTIgMhg1NnY1NkgyVjJ6IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-20" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Top Section */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
            <DroneIcon />
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
          </motion.div>

          {/* Title Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-8"
          >
            <h1 className="text-7xl md:text-8xl font-bold mb-6 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600">
                The.Eagle
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Transforming ordinary perspectives into extraordinary stories through
              cutting-edge drone cinematography and professional aerial photography.
            </p>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12"
          >
            <Button 
              size="lg"
              className="group bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-6 text-lg relative overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-yellow-400/20"
            >
              <span className="relative z-10 flex items-center">
                Start Your Project
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="group border-2 border-yellow-400/50 hover:border-yellow-400 text-yellow-400 px-8 py-6 text-lg flex items-center gap-2 transform transition-all duration-300 hover:scale-105"
              onClick={() => setIsVideoPlaying(true)}
            >
              <Play className="w-5 h-5" />
              Watch Showreel
            </Button>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto"
          >
            {[
              { number: "100+", label: "Projects Completed" },
              { number: "8K", label: "Ultra HD Quality" },
              { number: "25+", label: "Satisfied Clients" },
              { number: "5⭐", label: "Average Rating" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <ChevronDown className="w-6 h-6 text-yellow-400 animate-bounce" />
          </motion.div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoPlaying && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setIsVideoPlaying(false)}
        >
          <div className="relative w-full max-w-6xl aspect-video">
            <iframe
              className="w-full h-full"
              src="YOUR_SHOWREEL_URL_HERE?autoplay=1"
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Hero;