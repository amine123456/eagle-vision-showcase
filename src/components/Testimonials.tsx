import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "./ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "John Smith",
    role: "Real Estate Agent",
    content: "The aerial footage provided by the.eagle transformed our property listings. The quality and professionalism are unmatched.",
    rating: 5
  },
  {
    name: "Sarah Johnson",
    role: "Event Planner",
    content: "Working with the.eagle was a game-changer for our events. Their drone coverage added a spectacular dimension to our video packages.",
    rating: 5
  },
  {
    name: "Michael Brown",
    role: "Documentary Producer",
    content: "The team's expertise in aerial cinematography brought our nature documentary to life. Their attention to detail is remarkable.",
    rating: 5
  }
];

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See what our clients have to say about our drone videography services
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#FDB813] text-[#FDB813]" />
                    ))}
                  </div>
                  <p className="mb-4 text-muted-foreground">{testimonial.content}</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
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

export default Testimonials;