import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "./ui/card";
import { Play } from "lucide-react";

const portfolioItems = [
  {
    title: "Aerial Real Estate",
    image: "https://images.unsplash.com/photo-1628744876497-eb30460be9f6?w=800&auto=format&fit=crop",
    category: "Real Estate"
  },
  {
    title: "Event Coverage",
    image: "https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?w=800&auto=format&fit=crop",
    category: "Events"
  },
  {
    title: "Nature Documentary",
    image: "https://images.unsplash.com/photo-1552163164-fad1d6527f96?w=800&auto=format&fit=crop",
    category: "Documentary"
  }
];

const Portfolio = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Our Portfolio</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of stunning aerial cinematography and photography
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="overflow-hidden group cursor-pointer">
                <CardContent className="p-0 relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Play className="w-12 h-12 text-[#FDB813]" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    <p className="text-[#FDB813]">{item.category}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;