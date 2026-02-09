import { useForm } from "react-hook-form";
import { useState } from "react";
import { Loader2, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [isPending, setIsPending] = useState(false);
  const [formError, setFormError] = useState("");

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  const onSubmit = async (data) => {
    setIsPending(true);
    setFormError("");
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    try {
      // Simple validation
      if (!data.name.trim() || !data.email.trim() || !data.message.trim()) {
        throw new Error("Please fill in all required fields");
      }
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        throw new Error("Please enter a valid email address");
      }
      
      // Show success message
      alert("✅ Thank you! Your message has been sent.\n\nWe'll get back to you within 24 hours.");
      
      // Reset form
      form.reset();
      
      // Log for debugging
      console.log("Form submitted (frontend only):", {
        ...data,
        timestamp: new Date().toISOString()
      });
      
      // Optional: Save to localStorage for demo
      try {
        const savedMessages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
        savedMessages.push({
          ...data,
          submittedAt: new Date().toISOString(),
          id: Date.now()
        });
        localStorage.setItem('contactMessages', JSON.stringify(savedMessages));
      } catch (err) {
        console.log("Could not save to localStorage:", err);
      }
      
    } catch (error) {
      setFormError(error.message);
      alert(`Error: ${error.message}`);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-3xl p-8 shadow-xl shadow-primary/5 border border-border"
    >
      <h3 className="text-2xl font-bold mb-2">Send us a message</h3>
      <p className="text-muted-foreground mb-8">Fill out the form below and our team will get back to you within 24 hours.</p>
      
      {formError && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
          <p className="text-red-600 font-medium">{formError}</p>
        </div>
      )}
      
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-semibold text-foreground">
              Full Name *
            </label>
            <input
              {...form.register("name", { required: "Name is required" })}
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-secondary focus:ring-4 focus:ring-secondary/10 transition-all duration-200"
              placeholder="John Doe"
            />
            {form.formState.errors.name && (
              <p className="text-sm text-red-500">{form.formState.errors.name.message}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-semibold text-foreground">
              Email Address *
            </label>
            <input
              {...form.register("email", { 
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email"
                }
              })}
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-secondary focus:ring-4 focus:ring-secondary/10 transition-all duration-200"
              placeholder="john@example.com"
            />
            {form.formState.errors.email && (
              <p className="text-sm text-red-500">{form.formState.errors.email.message}</p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="subject" className="text-sm font-semibold text-foreground">
            Subject
          </label>
          <input
            {...form.register("subject")}
            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-secondary focus:ring-4 focus:ring-secondary/10 transition-all duration-200"
            placeholder="How can we help?"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-semibold text-foreground">
            Message *
          </label>
          <textarea
            {...form.register("message", { required: "Message is required", minLength: { value: 10, message: "Message must be at least 10 characters" } })}
            rows={4}
            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-secondary focus:ring-4 focus:ring-secondary/10 transition-all duration-200 resize-none"
            placeholder="Tell us about your project or inquiry..."
          />
          {form.formState.errors.message && (
            <p className="text-sm text-red-500">{form.formState.errors.message.message}</p>
          )}
        </div>

        <div className="text-sm text-muted-foreground">
          <p>* Required fields</p>
          <p className="mt-1">Note: This is a demo form. No data is actually sent to a server.</p>
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full px-8 py-4 rounded-xl font-bold text-lg bg-gradient-to-r from-primary to-primary/90 text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2"
        >
          {isPending ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="h-5 w-5" />
              Submit Inquiry
            </>
          )}
        </button>
      </form>
    </motion.div>
  );
}