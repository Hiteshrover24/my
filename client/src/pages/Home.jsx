import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import TaxationTabs from "@/components/TaxationTabs";
import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Code, 
  BookOpen, 
  HeadphonesIcon, 
  FileCheck, 
  Globe, 
  Lock, 
  Clock, 
  TrendingUp,
  Mail,
  Phone,
  Check
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow">
        {/* HERO SECTION */}
        <section id="home" className="relative pt-20 pb-32 lg:pb-48 overflow-hidden bg-slate-900">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
              alt="Corporate Skyscraper" 
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/40" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-3xl"
            >
              <div className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary border border-secondary/20 font-bold text-sm mb-6 backdrop-blur-sm">
                Next-Gen Business Solutions
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8">
                Centralizing Expertise for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">Digital Future</span>
              </h1>
              <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
                Procentrilix delivers enterprise-grade IT and Non-IT services with a focus on quality, compliance, security, and long-term trust.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#services" 
                  className="px-8 py-4 bg-secondary hover:bg-secondary/90 text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-secondary/25 hover:shadow-xl hover:shadow-secondary/30 text-center"
                >
                  Explore Services
                </a>
                <a 
                  href="#contact" 
                  className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/10 rounded-xl font-bold text-lg backdrop-blur-sm transition-all text-center"
                >
                  Contact Us
                </a>
              </div>
            </motion.div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block opacity-20">
            <div className="w-[600px] h-[600px] bg-secondary rounded-full blur-[120px]" />
          </div>
        </section>

        {/* CORE SERVICES */}
        <section id="services" className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 bg-grid-slate-900/[0.04] dark:bg-grid-white/[0.02] bg-[center_top_-1px] [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-float [animation-delay:2s]" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-secondary font-bold tracking-[0.2em] uppercase text-sm mb-4">Our Expertise</h2>
                <h3 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight">
                  Comprehensive <span className="text-secondary">Business Solutions</span>
                </h3>
                <div className="w-24 h-1.5 bg-secondary mx-auto mb-8 rounded-full" />
                <p className="text-slate-600 dark:text-slate-400 text-xl leading-relaxed">
                  Enterprise-grade infrastructure designed to scale your business securely across the digital landscape.
                </p>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard 
                title="Remediation Services" 
                description="Expert handling of compliance issues and system vulnerabilities to ensure your operations remain secure and lawful."
                icon={<ShieldCheck className="w-6 h-6" />}
                delay={0.1}
              />
              <ServiceCard 
                title="Web Development" 
                description="Custom, scalable web applications built with modern frameworks to drive your digital presence forward."
                icon={<Code className="w-6 h-6" />}
                delay={0.2}
              />
              <ServiceCard 
                title="E-publishing & XML" 
                description="High-fidelity conversion and digital publishing services for streamlined content management and distribution."
                icon={<BookOpen className="w-6 h-6" />}
                delay={0.3}
              />
              <ServiceCard 
                title="Back-Office Support" 
                description="Efficient customer care and administrative support to keep your core business focused on growth."
                icon={<HeadphonesIcon className="w-6 h-6" />}
                delay={0.4}
              />
              <ServiceCard 
                title="Compliance Support" 
                description="Navigating complex regulatory landscapes with precision to protect your business reputation."
                icon={<FileCheck className="w-6 h-6" />}
                delay={0.5}
              />
              <div className="hidden lg:flex items-center justify-center p-8">
                <div className="text-center">
                  <h4 className="text-2xl font-bold text-primary mb-2">Need something else?</h4>
                  <p className="text-muted-foreground mb-4">We offer tailored solutions.</p>
                  <a href="#contact" className="text-secondary font-bold hover:underline">Contact us today &rarr;</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TAXATION SECTION */}
        <section id="taxation" className="py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-secondary font-bold tracking-wider uppercase text-sm mb-4">Global Finance & Security</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-primary mb-6">Taxation, Finance & Cybersecurity</h3>
              <p className="text-muted-foreground text-lg">
                Expert tax filing, bookkeeping, and advanced penetration testing to keep your business financially compliant and digitally secure.
              </p>
            </div>

            <TaxationTabs />

            {/* Cybersecurity Cards Integration */}
            <div className="mt-20 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              

              {/* Cybersecurity Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="md:col-span-2 group relative bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] border border-border shadow-xl hover:shadow-2xl transition-all overflow-hidden"
              >
                <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="w-20 h-20 bg-blue-50 dark:bg-blue-900/20 text-blue-600 rounded-3xl flex items-center justify-center mb-8 border border-blue-100 dark:border-blue-800">
                      <ShieldCheck className="w-10 h-10" />
                    </div>
                    <h4 className="text-4xl font-bold mb-4">Cybersecurity</h4>
                    <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                      Comprehensive defensive architecture designed to protect your most critical digital assets from evolving threats.
                    </p>
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-border group-hover:border-blue-500/30 transition-colors">
                        <div className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                        <span className="text-lg font-bold">Web Penetration Testing</span>
                      </div>
                      <div className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-border group-hover:border-indigo-500/30 transition-colors">
                        <div className="w-3 h-3 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
                        <span className="text-lg font-bold">OWASP Top 10 Assessment</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-3xl border border-border">
                      <h5 className="font-bold mb-4 text-blue-600 dark:text-blue-400">Security Protocols</h5>
                      <ul className="space-y-3">
                        {['Real-time Threat Monitoring', 'Advanced Data Encryption', 'Strict Access Controls', 'Incident Response Strategy'].map((item) => (
                          <li key={item} className="flex items-center gap-3 text-sm font-medium">
                            <Check className="w-4 h-4 text-green-500" /> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-6 bg-indigo-50 dark:bg-indigo-900/10 rounded-3xl border border-indigo-100 dark:border-indigo-900/30">
                      <h5 className="font-bold mb-4 text-indigo-600 dark:text-indigo-400">Offensive Security</h5>
                      <div className="flex flex-wrap gap-2">
                        {['SQLi', 'XSS', 'API Security', 'Auth Bypass', 'CSRF'].map((tag) => (
                          <span key={tag} className="px-3 py-1.5 bg-white dark:bg-slate-900 text-indigo-700 dark:text-indigo-300 rounded-lg text-xs font-black border border-indigo-100 dark:border-indigo-900/50 uppercase tracking-tighter">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Decorative scanning line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent animate-scan" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* WHY TRUST US */}
        <section id="why-us" className="py-24 bg-primary text-white relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>
          
          <div className="container mx-auto px-4 relative z-10">
             <div className="grid lg:grid-cols-2 gap-16 items-center">
               <div>
                  <h2 className="text-accent font-bold tracking-wider uppercase text-sm mb-4">Why Choose Us</h2>
                  <h3 className="text-4xl md:text-5xl font-bold mb-8">Why Clients Trust Procentrilix</h3>
                  <p className="text-slate-300 text-lg mb-10 leading-relaxed">
                    In a world of digital uncertainty, we stand as a pillar of reliability. Our commitment to enterprise-grade standards ensures your business is always ahead of the curve.
                  </p>
                  
                  <div className="space-y-6">
                    {[
                      { title: "Enterprise-grade processes", icon: Lock },
                      { title: "Strong data security practices", icon: ShieldCheck },
                      { title: "On-time delivery & accountability", icon: Clock },
                      { title: "Cost-effective global delivery", icon: Globe }
                    ].map((item, i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                      >
                        <div className="p-3 rounded-full bg-accent text-primary">
                          <item.icon className="w-5 h-5" />
                        </div>
                        <span className="font-bold text-lg">{item.title}</span>
                      </motion.div>
                    ))}
                  </div>
               </div>
               
               <div className="relative">
                 {/* Image */}
                 <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                   <img 
                      src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop" 
                      alt="Team collaboration" 
                      className="w-full h-auto"
                   />
                   <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
                 </div>
                 
                 {/* Floating card */}
                 <div className="absolute -bottom-10 -left-10 bg-white text-primary p-6 rounded-2xl shadow-xl max-w-xs hidden md:block">
                   <div className="flex items-center gap-4 mb-4">
                     <div className="p-3 bg-green-100 text-green-600 rounded-full">
                       <ShieldCheck className="w-6 h-6" />
                     </div>
                     <div>
                       <p className="font-bold text-lg">100% Secure</p>
                       <p className="text-sm text-muted-foreground">Compliance Guaranteed</p>
                     </div>
                   </div>
                   <p className="text-sm text-slate-600">
                     Our infrastructure is secured with strict access controls and multi-level quality checks.
                   </p>
                 </div>
               </div>
             </div>
          </div>
        </section>

        {/* QUALITY & SECURITY (Short Section) */}
        <section id="about" className="py-32 bg-white dark:bg-slate-950 text-center relative overflow-hidden">
          <div className="absolute inset-0 security-gradient pointer-events-none" />
          
          <div className="container mx-auto px-4 max-w-4xl relative z-10">
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 md:p-20 border border-slate-100 dark:border-slate-800 shadow-2xl shadow-primary/5 relative overflow-hidden shimmer-glimpse"
             >
               {/* Animated Icon Container */}
               <motion.div 
                 initial={{ scale: 0.8, rotate: -10 }}
                 whileInView={{ scale: 1, rotate: 0 }}
                 transition={{ 
                   type: "spring",
                   stiffness: 200,
                   delay: 0.2
                 }}
                 className="inline-block p-6 rounded-3xl bg-primary/5 text-primary mb-10 relative"
               >
                 <ShieldCheck className="w-16 h-16 relative z-10" />
                 <motion.div 
                   animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] }}
                   transition={{ duration: 3, repeat: Infinity }}
                   className="absolute inset-0 bg-primary/20 rounded-3xl blur-xl"
                 />
               </motion.div>

               <h3 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900 dark:text-white tracking-tight">
                 Uncompromising <span className="text-primary">Quality & Security</span>
               </h3>
               
               <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-12">
                 We follow structured workflows, multi-level quality checks, and strict data protection policies. Our infrastructure is secured with access controls, backups, and compliance-driven operations to protect every client asset.
               </p>

               <div className="flex flex-wrap justify-center gap-4">
                 {[
                   { text: 'Structured Workflows', icon: Clock },
                   { text: 'Multi-level QC', icon: Check },
                   { text: 'Data Protection', icon: Lock },
                   { text: 'Access Controls', icon: ShieldCheck }
                 ].map((item, i) => (
                   <motion.span 
                     key={item.text}
                     initial={{ opacity: 0, x: -10 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     transition={{ delay: 0.4 + (i * 0.1) }}
                     className="px-6 py-3 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm text-base font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2 hover:bg-white dark:hover:bg-slate-700 transition-colors"
                   >
                     <item.icon className="w-4 h-4 text-primary" />
                     {item.text}
                   </motion.span>
                 ))}
               </div>

               {/* Decorative corner accent */}
               <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full" />
             </motion.div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-24 bg-slate-900 text-white relative">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <img 
               src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
               alt="Global connectivity" 
               className="w-full h-full object-cover"
            />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-accent font-bold tracking-wider uppercase text-sm mb-4">Get In Touch</h2>
                <h3 className="text-4xl md:text-5xl font-bold mb-6">Let's Build Your Future</h3>
                <p className="text-slate-300 text-lg mb-12">
                  Ready to optimize your operations? Contact our team for a consultation on Remediation, Web Development, Cybersecurity or Taxation services.
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <div className="p-4 rounded-xl bg-white/10 border border-white/10 text-secondary">
                      <Globe className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Global Headquarters</h4>
                      <p className="text-slate-400">Hyderabad, Telangana, India</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <div className="p-4 rounded-xl bg-white/10 border border-white/10 text-secondary">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Email Us</h4>
                      <a href="mailto:info@procentrilix.com" className="text-slate-400 hover:text-white transition-colors">
                        info@procentrilix.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <div className="p-4 rounded-xl bg-white/10 border border-white/10 text-secondary">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Call Us</h4>
                      <a href="tel:+917993521407" className="text-slate-400 hover:text-white transition-colors">
                        +91 7993521407
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-foreground">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}