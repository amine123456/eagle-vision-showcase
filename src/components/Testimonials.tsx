import React from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "./ui/card";
import { Star, Quote, ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

const testimonials = [
  {
    name: "John Smith",
    role: "Real Estate Agent",
    company: "Luxury Homes Reality",
    content: "The aerial footage provided by the.eagle transformed our property listings. The quality and professionalism are unmatched. Our listings now stand out in a crowded market, giving us a significant competitive edge.",
    rating: 5,
    image: "/api/placeholder/100/100",
    project: "Luxury Estate Showcase",
    date: "January 2025"
  },
  {
    name: "Sarah Johnson",
    role: "Event Planner",
    company: "Elite Events Co.",
    content: "Working with the.eagle was a game-changer for our events. Their drone coverage added a spectacular dimension to our video packages. The aerial shots of our outdoor weddings and corporate events have become our signature offering.",
    rating: 5,
    image: "/api/placeholder/100/100",
    project: "Mountain Wedding Series",
    date: "December 2024"
  },
  {
    name: "Michael Brown",
    role: "Documentary Producer",
    company: "Nature Lens Productions",
    content: "The team's expertise in aerial cinematography brought our nature documentary to life. Their attention to detail is remarkable, and they captured angles we didn't think were possible. The footage exceeded our expectations.",
    rating: 5,
    image: "/api/placeholder/100/100",
    project: "Wildlife Migration Documentary",
    date: "February 2025"
  },
  {
    name: "Emma Wilson",
    role: "Marketing Director",
    company: "Coastal Resorts Group",
    content: "Outstanding service and exceptional results. The drone footage of our beachfront properties has dramatically improved our marketing materials. Their team is professional, creative, and delivers beyond expectations.",
    rating: 5,
    image: "/api/placeholder/100/100",
    project: "Resort Property Showcase",
    date: "March 2025"
  }
];

const TestimonialCard = ({ testimonial }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <Card className="bg-black/40 backdrop-blur-sm border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300">
        <CardContent className="p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="relative">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <Quote className="absolute -bottom-2 -right-2 w-6 h-6 text-yellow-400 bg-black rounded-full p-1" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <h3 className="text-lg font-semibold">{testimonial.name}</h3>
              <p className="text-gray-400 text-sm">{testimonial.role}</p>
              <p className="text-yellow-400 text-sm">{testimonial.company}</p>
            </div>
          </div>

          <blockquote className="relative">
            <Quote className="absolute -top-4 -left-4 w-8 h-8 text-yellow-400/20" />
            <p className="text-gray-300 leading-relaxed relative z-10">
              "{testimonial.content}"
            </p>
          </blockquote>

          <div className="mt-6 pt-6 border-t border-gray-800">
            <div className="flex justify-between items-center text-sm text-gray-400">
              <span>Project: {testimonial.project}</span>
              <span>{testimonial.date}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-24 relative overflow-hidden bg-black">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMEgwdjYwaDYwVjB6TTIgMmg1NnY1NkgyVjJ6IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
            <MessageCircle className="w-6 h-6 text-yellow-400" />
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
          </div>

          <h2 className="text-5xl font-bold mb-6">Client Testimonials</h2>
          <p className="text-xl text-gray-400">
            Discover why leading businesses and professionals choose our drone services
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Button
            className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-6 text-lg font-semibold"
          >
            Share Your Experience
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;