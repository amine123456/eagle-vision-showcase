import { motion } from "framer-motion";
import { Camera, Video, Film } from "lucide-react";
import { useInView } from "react-intersection-observer";

const services = [
  {
    icon: <Camera className="w-8 h-8" />,
    title: "Aerial Photography",
    description: "High-resolution aerial images perfect for real estate, events, and landscapes."
  },
  {
    icon: <Video className="w-8 h-8" />,
    title: "Drone Videography",
    description: "Cinematic aerial footage for commercials, events, and promotional content."
  },
  {
    icon: <Film className="w-8 h-8" />,
    title: "Video Editing",
    description: "Professional post-production services to deliver stunning final content."
  }
];

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Our Services
        </motion.h2>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-card p-6 rounded-lg hover:transform hover:scale-105 transition-transform duration-300"
            >
              <div className="text-[#FDB813] mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;