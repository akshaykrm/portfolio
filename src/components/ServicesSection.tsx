import React from "react";
import { Code, Sparkles, Zap, Check } from "lucide-react";
import { Service } from "../types";

interface ServicesSectionProps {
  services: Service[];
}

export function ServicesSection({ services }: ServicesSectionProps) {
  // Map string name to Lucide components
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Code":
        return <Code className="w-6 h-6 text-amber-500" />;
      case "Sparkles":
        return <Sparkles className="w-6 h-6 text-amber-500" />;
      case "Zap":
        return <Zap className="w-6 h-6 text-amber-500" />;
      default:
        return <Code className="w-6 h-6 text-amber-500" />;
    }
  };

  return (
    <section id="services-section" className="py-8">
      <div className="flex items-center space-x-3 mb-8">
        <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#e7e5e4] dark:bg-sand-800 text-sand-700 dark:text-sand-300 font-semibold uppercase tracking-wider">
          Offerings
        </span>
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-sand-900 dark:text-sand-50">
          Services Provided
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            id={`service-card-${service.id}`}
            className="flex flex-col justify-between p-6 rounded-xl border border-sand-200 dark:border-sand-800/80 bg-white dark:bg-sand-900/50 shadow-sm transition-all duration-300 hover:border-sand-400 dark:hover:border-sand-700 hover:shadow-md hover:translate-y-[-2px] group"
          >
            <div>
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-sand-50 dark:bg-sand-800/60 border border-sand-200 dark:border-sand-850 mb-5 group-hover:bg-amber-500/5 dark:group-hover:bg-amber-400/5 transition-colors">
                {getIcon(service.icon)}
              </div>

              <h3 className="text-lg font-semibold text-sand-900 dark:text-sand-50 mb-2">
                {service.title}
              </h3>

              <p className="text-sm text-sand-500 dark:text-sand-400 mb-6 leading-relaxed">
                {service.description}
              </p>

              <hr className="border-sand-100 dark:border-sand-800/80 mb-5" />

              <ul className="space-y-2.5 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-xs text-sand-600 dark:text-sand-300">
                    <Check className="w-4 h-4 text-amber-500 mr-2 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {service.price && (
              <div className="mt-auto pt-2 flex items-center justify-between">
                <span className="text-xs font-mono text-sand-400 uppercase tracking-wider">
                  Rate
                </span>
                <span className="text-sm font-mono font-medium text-amber-600 dark:text-amber-400 bg-amber-500/5 dark:bg-amber-400/5 px-2.5 py-1 rounded border border-amber-500/10">
                  {service.price}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
