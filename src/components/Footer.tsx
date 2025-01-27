import { MapPin, Mail, Phone, ArrowRight, Facebook, Instagram, Youtube } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <footer className="bg-[#1A1F2C] py-16">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div {...fadeIn} className="space-y-6">
            <h3 className="text-3xl font-bold mb-6">
              <span className="text-gradient">the.eagle</span>
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Elevating perspectives through professional drone videography. Capturing moments that matter from above.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#FDB813] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FDB813] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FDB813] transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div {...fadeIn} className="space-y-6">
            <h4 className="text-xl font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <a href="#services" className="text-gray-300 hover:text-[#FDB813] transition-colors flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-300 hover:text-[#FDB813] transition-colors flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-300 hover:text-[#FDB813] transition-colors flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Pricing
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-[#FDB813] transition-colors flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div {...fadeIn} className="space-y-6">
            <h4 className="text-xl font-semibold text-white mb-6">Our Services</h4>
            <ul className="space-y-4">
              <li className="text-gray-300">Aerial Photography</li>
              <li className="text-gray-300">Real Estate Tours</li>
              <li className="text-gray-300">Event Coverage</li>
              <li className="text-gray-300">Commercial Projects</li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div {...fadeIn} className="space-y-6">
            <h4 className="text-xl font-semibold text-white mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center text-gray-300">
                <MapPin className="w-5 h-5 mr-3 text-[#FDB813]" />
                <span>123 Drone Street, Sky City</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 mr-3 text-[#FDB813]" />
                <span>contact@theeagle.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-5 h-5 mr-3 text-[#FDB813]" />
                <span>+1 234 567 890</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          {...fadeIn}
          className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400"
        >
          <p>&copy; {new Date().getFullYear()} the.eagle. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;