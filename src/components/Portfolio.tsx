import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Play, Plus, Clock, Eye, Award, ChevronRight } from "lucide-react";

const portfolioItems = [
  {
    title: "Luxury Estate Showcase",
    description: "Aerial tour of a 10-acre luxury property",
    image: "/api/placeholder/800/500",
    category: "Real Estate",
    duration: "2:15",
    views: "2.4k",
    featured: true
  },
  {
    title: "Mountain Wedding",
    description: "Cinematic wedding coverage in the Alps",
    image: "/api/placeholder/800/500",
    category: "Events",
    duration: "3:45",
    views: "1.8k",
    featured: false
  },
  {
    title: "Wildlife Documentary",
    description: "Bird migration documentary footage",
    image: "/api/placeholder/800/500",
    category: "Documentary",
    duration: "4:30",
    views: "3.2k",
    featured: true
  },
  {
    title: "Construction Progress",
    description: "Monthly construction site documentation",
    image: "/api/placeholder/800/500",
    category: "Commercial",
    duration: "2:45",
    views: "1.5k",
    featured: false
  },
  {
    title: "Coastal Resort",
    description: "Beachfront hotel promotional video",
    image: "/api/placeholder/800/500",
    category: "Tourism",
    duration: "3:15",
    views: "2.1k",
    featured: false
  },
  {
    title: "Urban Exploration",
    description: "City skyline at golden hour",
    image: "/api/placeholder/800/500",
    category: "Urban",
    duration: "2:30",
    views: "1.9k",
    featured: false
  }
];

const categories = ["All", "Real Estate", "Events", "Documentary", "Commercial", "Tourism", "Urban"];

const Portfolio = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems = selectedCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <section className="py-24 relative bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMEgwdjYwaDYwVjB6TTIgMmg1NnY1NkgyVjJ6IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
            <Eye className="w-6 h-6 text-yellow-400" />
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
          </div>
          
          <h2 className="text-5xl font-bold mb-6">Featured Works</h2>
          <p className="text-xl text-gray-400">
            Discover our award-winning aerial cinematography and photography projects
          </p>
        </motion.div>

        {/* Categories Filter */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`
                px-6 py-2 rounded-full transition-all duration-300
                ${selectedCategory === category 
                  ? 'bg-yellow-400 text-black hover:bg-yellow-500' 
                  : 'border-yellow-400/20 hover:border-yellow-400/40 text-gray-400 hover:text-white'}
              `}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                layout
              >
                <Card className="overflow-hidden group cursor-pointer bg-black/40 backdrop-blur-sm border-yellow-400/20 hover:border-yellow-400/40">
                  <CardContent className="p-0 relative">
                    {item.featured && (
                      <div className="absolute top-4 left-4 z-20">
                        <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                          Featured
                        </span>
                      </div>
                    )}
                    
                    <div className="relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Button
                          className="bg-yellow-400 hover:bg-yellow-500 text-black"
                          onClick={() => setSelectedItem(item)}
                        >
                          <Play className="w-5 h-5 mr-2" />
                          Watch Project
                        </Button>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-yellow-400 text-sm">{item.category}</span>
                        <div className="flex items-center gap-4 text-gray-400 text-sm">
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {item.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            {item.views}
                          </span>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-yellow-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-400">{item.description}</p>
                      
                      <Button 
                        variant="ghost"
                        className="mt-4 text-yellow-400 hover:text-yellow-500 p-0 group"
                      >
                        View Details
                        <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            className="bg-transparent border-2 border-yellow-400/20 hover:border-yellow-400/40 text-yellow-400"
          >
            <Plus className="w-5 h-5 mr-2" />
            Load More Projects
          </Button>
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <div className="relative w-full max-w-6xl aspect-video bg-black/60 backdrop-blur-lg rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <Play className="w-20 h-20 text-yellow-400" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;