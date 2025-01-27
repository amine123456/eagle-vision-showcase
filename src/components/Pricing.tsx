import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Check, X, HelpCircle, Zap, Award, Clock, Video, Download, Music, Star } from "lucide-react";

const pricingPlans = [
  {
    name: "Basic",
    price: "499",
    description: "Perfect for small projects and basic aerial coverage",
    features: [
      { text: "2 hours of aerial footage", icon: <Video className="w-4 h-4" />, included: true },
      { text: "Basic video editing", icon: <Clock className="w-4 h-4" />, included: true },
      { text: "1 revision round", icon: <Download className="w-4 h-4" />, included: true },
      { text: "HD quality delivery", icon: <Star className="w-4 h-4" />, included: true },
      { text: "48-hour delivery", icon: <Clock className="w-4 h-4" />, included: true },
      { text: "Raw footage", icon: <Download className="w-4 h-4" />, included: false },
      { text: "Licensed music", icon: <Music className="w-4 h-4" />, included: false }
    ],
    popular: false,
    accent: "blue"
  },
  {
    name: "Professional",
    price: "999",
    description: "Ideal for business and promotional content",
    features: [
      { text: "4 hours of aerial footage", icon: <Video className="w-4 h-4" />, included: true },
      { text: "Advanced video editing", icon: <Clock className="w-4 h-4" />, included: true },
      { text: "3 revision rounds", icon: <Download className="w-4 h-4" />, included: true },
      { text: "4K quality delivery", icon: <Star className="w-4 h-4" />, included: true },
      { text: "24-hour delivery", icon: <Clock className="w-4 h-4" />, included: true },
      { text: "Raw footage", icon: <Download className="w-4 h-4" />, included: true },
      { text: "Licensed music", icon: <Music className="w-4 h-4" />, included: false }
    ],
    popular: true,
    accent: "yellow"
  },
  {
    name: "Premium",
    price: "1499",
    description: "Complete solution for professional productions",
    features: [
      { text: "Full day coverage", icon: <Video className="w-4 h-4" />, included: true },
      { text: "Premium video editing", icon: <Clock className="w-4 h-4" />, included: true },
      { text: "Unlimited revisions", icon: <Download className="w-4 h-4" />, included: true },
      { text: "4K & 8K quality", icon: <Star className="w-4 h-4" />, included: true },
      { text: "Same-day delivery", icon: <Clock className="w-4 h-4" />, included: true },
      { text: "Raw footage", icon: <Download className="w-4 h-4" />, included: true },
      { text: "Licensed music", icon: <Music className="w-4 h-4" />, included: true }
    ],
    popular: false,
    accent: "purple"
  }
];

const PricingCard = ({ plan, inView, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getAccentColor = (accent) => {
    const colors = {
      blue: "from-blue-400 to-blue-600",
      yellow: "from-yellow-400 to-yellow-600",
      purple: "from-purple-400 to-purple-600"
    };
    return colors[accent];
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative"
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className={`absolute inset-0 bg-gradient-to-br ${getAccentColor(plan.accent)} opacity-10 rounded-xl`}
          />
        )}
      </AnimatePresence>

      <Card className={`
        relative overflow-hidden backdrop-blur-sm
        border-gray-800 hover:border-yellow-400/40
        transition-all duration-300 transform hover:scale-[1.02]
        ${plan.popular ? 'border-yellow-400/40 shadow-lg shadow-yellow-400/10' : ''}
      `}>
        {plan.popular && (
          <div className="absolute top-0 right-0">
            <div className="bg-yellow-400 text-black px-4 py-1 text-sm font-semibold rounded-bl-lg">
              Most Popular
            </div>
          </div>
        )}

        <CardHeader className="space-y-4">
          <div className="space-y-2 text-center">
            <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
            <p className="text-gray-400 text-sm">{plan.description}</p>
          </div>
          
          <div className="text-center space-y-1">
            <div className="flex items-center justify-center">
              <span className="text-sm text-gray-400 mr-1">$</span>
              <span className="text-4xl font-bold">{plan.price}</span>
            </div>
            <span className="text-sm text-gray-400">per project</span>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <ul className="space-y-3">
            {plan.features.map((feature, i) => (
              <li key={i} className="flex items-center gap-3">
                <div className="w-4 h-4 flex-shrink-0">
                  {feature.included ? (
                    <Check className="w-4 h-4 text-green-400" />
                  ) : (
                    <X className="w-4 h-4 text-gray-600" />
                  )}
                </div>
                <span className={feature.included ? 'text-gray-200' : 'text-gray-500'}>
                  {feature.text}
                </span>
              </li>
            ))}
          </ul>

          <Button 
            className={`
              w-full py-6 font-semibold
              ${plan.popular 
                ? 'bg-yellow-400 hover:bg-yellow-500 text-black' 
                : 'bg-gray-800 hover:bg-gray-700'}
            `}
          >
            Get Started
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Pricing = () => {
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
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
            <Zap className="w-6 h-6 text-yellow-400" />
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
          </div>

          <h2 className="text-5xl font-bold mb-6">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-400">
            Choose the perfect package for your aerial cinematography needs
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <div 
          ref={ref} 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {pricingPlans.map((plan, index) => (
            <PricingCard 
              key={plan.name} 
              plan={plan} 
              inView={inView} 
              index={index} 
            />
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 flex items-center justify-center gap-2">
            <HelpCircle className="w-4 h-4" />
            Need a custom package? Contact us for a personalized quote
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;