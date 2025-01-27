import { MapPin, Mail, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-gradient">the.eagle</span>
            </h3>
            <p className="text-muted-foreground">
              Professional drone videography services capturing moments from above.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2">
              <div className="flex items-center text-muted-foreground">
                <MapPin className="w-5 h-5 mr-2" />
                <span>Your Location</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Mail className="w-5 h-5 mr-2" />
                <span>contact@theeagle.com</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-muted-foreground hover:text-[#FDB813] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-[#FDB813] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-muted mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} the.eagle. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;