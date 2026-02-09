import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Globe } from "lucide-react";

const regions = [
  {
    id: "usa",
    name: "USA",
    flag: "🇺🇸",
    description: "Comprehensive tax solutions for US federal and state compliance.",
    services: [
      "Tax Filings (Federal & State)",
      "Bookkeeping (QuickBooks, Xero)",
      "Payroll Processing",
      "Audit Detection & Resolution",
      "Business Incorporation & Compliance"
    ]
  },
  {
    id: "uk",
    name: "UK",
    flag: "🇬🇧",
    description: "Expert HMRC compliance and accounting for UK businesses.",
    services: [
      "VAT Registration & Filings",
      "Business Tax Filings",
      "Individual Tax Filings",
      "Bookkeeping Processing",
      "Payroll Processing"
    ]
  },
  {
    id: "uae",
    name: "UAE",
    flag: "🇦🇪",
    description: "Navigating the evolving tax landscape of the UAE.",
    services: [
      "VAT Registration & Compliance",
      "VAT Deregistration & Compliance",
      "Corporate Tax Filings",
      "Bookkeeping Processing",
      "Payroll Processing"
    ]
  }
];

export default function TaxationTabs() {
  const [activeTab, setActiveTab] = useState("usa");

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Tabs Header */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
        {regions.map((region) => (
          <button
            key={region.id}
            onClick={() => setActiveTab(region.id)}
            className={`
              relative px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all duration-300
              ${
                activeTab === region.id
                  ? "bg-primary text-white shadow-lg shadow-primary/25 scale-105 z-10"
                  : "bg-white text-muted-foreground hover:text-muted/50 border border-border hover:border-primary/20"
              }
            `}
          >
            <span className="text-2xl">{region.flag}</span>
            {region.name}
            {activeTab === region.id && (
              <motion.div
                layoutId="activeTabIndicator"
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-secondary rounded-full"
              />
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="relative min-h-[400px]">
        <AnimatePresence mode="wait">
          {regions.map((region) => (
            region.id === activeTab && (
              <motion.div
                key={region.id}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <div className="h-full bg-white border-none shadow-2xl shadow-black/5 overflow-hidden grid md:grid-cols-5 rounded-3xl">
                  {/* Left Panel */}
                  <div className="md:col-span-2 bg-gradient-to-br from-slate-50 to-slate-100 p-8 flex flex-col justify-center border-r border-border/50">
                    <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-3xl mb-6">
                      {region.flag}
                    </div>
                    <h3 className="text-3xl font-bold text-primary mb-3">
                      {region.name} Services
                    </h3>
                    <p className="text-muted-foreground font-medium mb-6">
                      {region.description}
                    </p>
                    <div className="mt-auto">
                      <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-secondary bg-secondary/10 px-3 py-1.5 rounded-full">
                        <Globe className="w-3 h-3" />
                        Region Specific
                      </div>
                    </div>
                  </div>

                  {/* Right Panel */}
                  <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center bg-white">
                    <h4 className="text-lg font-semibold text-foreground mb-6">Included Services</h4>
                    <ul className="space-y-4">
                      {region.services.map((service, index) => (
                        <motion.li
                          key={service}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors"
                        >
                          <div className="mt-0.5 min-w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                          <span className="font-medium text-slate-700">{service}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}