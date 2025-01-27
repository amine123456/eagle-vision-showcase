import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Check } from "lucide-react";
import { Button } from "./ui/button";

const pricingPlans = [
  {
    name: "Basic",
    price: "499",
    features: [
      "2 hours of aerial footage",
      "Basic video editing",
      "1 revision round",
      "HD quality delivery",
      "48-hour delivery"
    ]
  },
  {
    name: "Professional",
    price: "999",
    features: [
      "4 hours of aerial footage",
      "Advanced video editing",
      "3 revision rounds",
      "4K quality delivery",
      "24-hour delivery",
      "Raw footage included"
    ]
  },
  {
    name: "Premium",
    price: "1499",
    features: [
      "Full day coverage",
      "Premium video editing",
      "Unlimited revisions",
      "4K & 8K quality delivery",
      "Same-day delivery",
      "Raw footage included",
      "Licensed music included"
    ]
  }
];

const Pricing = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="pricing" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Pricing Plans</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect package for your aerial videography needs
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="relative overflow-hidden hover:border-[#FDB813] transition-colors">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">{plan.name}</CardTitle>
                  <div className="text-center mt-4">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-muted-foreground">/project</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <Check className="w-5 h-5 text-[#FDB813] mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full mt-6 bg-[#FDB813] hover:bg-[#FFD700] text-black"
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;