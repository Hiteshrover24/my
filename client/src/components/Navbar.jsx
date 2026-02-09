import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@assets/logo24_1770543347743.jpeg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "#services" },
    { name: "Taxation", href: "#taxation" },
    { name: "Why Us", href: "#why-us" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href) => {
    setIsOpen(false);
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 text-xs md:text-sm hidden sm:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="mailto:info@procentrilix.com" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail className="h-4 w-4" />
              <span>info@procentrilix.com</span>
            </a>
            <a href="tel:+917993521407" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="h-4 w-4" />
              <span>+91 7993521407</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="opacity-80">Global Excellence in IT & Financial Services</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "glass-nav shadow-md py-2" : "bg-white py-4 shadow-sm"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <img src={logo} alt="Procentrilix Logo" className="h-12 w-auto object-contain" />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-primary leading-tight tracking-tight">
                PROCENTRILIX
              </span>
              <span className="text-[0.65rem] font-medium text-muted-foreground uppercase tracking-widest group-hover:text-secondary transition-colors">
                Quality • Compliance • Security
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  if (link.href.startsWith("#")) {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }
                }}
                className={`text-sm font-semibold tracking-wide transition-colors duration-200 ${
                  location === link.href ? "text-secondary" : "text-foreground/80 hover:text-secondary"
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#contact");
              }}
              className="bg-primary text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/90 hover:-translate-y-0.5 transition-all duration-200"
            >
              Get a Quote
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border shadow-xl overflow-hidden fixed w-full z-40 top-[72px]"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    if (link.href.startsWith("#")) {
                      e.preventDefault();
                      handleNavClick(link.href);
                    } else {
                      setIsOpen(false);
                    }
                  }}
                  className="text-lg font-medium py-2 border-b border-border/40 hover:text-secondary hover:border-secondary/50 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-3 text-sm text-muted-foreground">
                 <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-secondary" />
                    info@procentrilix.com
                 </div>
                 <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-secondary" />
                    +91 7993521407
                 </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}