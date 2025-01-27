import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
        style={{ filter: "brightness(0.6)" }}
      >
        <source src="https://player.vimeo.com/external/517090081.hd.mp4?s=50c2c0e6b52686c8d233c2ab37b640670a634dcc&profile_id=175" type="video/mp4" />
      </video>
      
      <div className="hero-gradient absolute inset-0" />
      
      <div className="relative z-10 text-center px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          <span className="text-gradient">the.eagle</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
        >
          Professional drone videography that captures your vision from new heights
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button size="lg" className="bg-[#FDB813] hover:bg-[#FFD700] text-black">
            Explore Our Services <ArrowRight className="ml-2" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;