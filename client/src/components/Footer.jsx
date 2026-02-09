import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import logo from "@assets/logo24_1770543347743.jpeg";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md-cols-2 lg-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Procentrilix" className="h-10 w-auto bg-white/10 rounded p-1" />
              <span className="text-2xl font-bold font-display text-white">PROCENTRILIX</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Centralizing expertise for the digital future. We deliver enterprise-grade services with a focus on compliance, security, and trust.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover-secondary hover-white transition-all duration-200"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Taxation', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(" ", "-")}`} className="hover-secondary transition-colors inline-block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3 text-sm">
              <li>Web Development</li>
              <li>Taxation Services</li>
              <li>Compliance Support</li>
              <li>Back-Office Support</li>
              <li>E-Publishing</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span>Hyderabad, Telangana, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary shrink-0" />
                <a href="tel:+917993521407" className="hover-white transition-colors">+91 7993521407</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary shrink-0" />
                <a href="mailto@procentrilix.com" className="hover-white transition-colors">info@procentrilix.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {currentYear} Procentrilix. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
