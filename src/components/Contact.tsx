import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-8">Get In Touch</h2>
          <p className="text-center text-muted-foreground mb-12">
            Ready to elevate your project? Let's discuss how we can bring your vision to life.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input placeholder="Your Name" required />
              <Input type="email" placeholder="Your Email" required />
            </div>
            <Input placeholder="Subject" required />
            <Textarea
              placeholder="Your Message"
              className="min-h-[150px]"
              required
            />
            <Button
              type="submit"
              size="lg"
              className="w-full bg-[#FDB813] hover:bg-[#FFD700] text-black"
            >
              Send Message
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;