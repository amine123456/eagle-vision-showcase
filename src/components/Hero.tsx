import { motion } from "framer-motion";
import { ArrowRight, Rocket } from "lucide-react";
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
        style={{ filter: "brightness(0.5)" }}
      >
        <source src="https://player.vimeo.com/external/493162505.hd.mp4?s=c83e0d2380b55f0c66a60c5bdc7efad6a5c58c6c&profile_id=175" type="video/mp4" />
      </video>
      
      <div className="hero-gradient absolute inset-0" />
      
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <Rocket className="w-16 h-16 mx-auto text-[#FDB813] mb-4" />
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold mb-6"
        >
          <span className="text-gradient">the.eagle</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-200"
        >
          Elevate your vision with stunning aerial cinematography. 
          Capturing breathtaking moments from perspectives never seen before.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button 
            size="lg" 
            className="bg-[#FDB813] hover:bg-[#FFD700] text-black px-8 py-6 text-lg group transition-all duration-300 transform hover:scale-105"
          >
            Explore Our Services 
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="border-[#FDB813] text-[#FDB813] hover:bg-[#FDB813] hover:text-black px-8 py-6 text-lg transition-all duration-300 transform hover:scale-105"
          >
            View Portfolio
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="animate-bounce">
            <div className="w-1 h-12 rounded-full bg-[#FDB813] mx-auto" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;