import React, { useRef, useState, useEffect, useCallback, useLayoutEffect } from "react";
import { Layout, ShoppingCart, Globe, Lightbulb, ClipboardList, Server, Check, ChevronLeft, ChevronRight } from "lucide-react";
import { Service } from "../types";

interface ServicesSectionProps {
  services: Service[];
}

const CLONE_COUNT = 3;

export function ServicesSection({ services }: ServicesSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const isResetting = useRef(false);

  const displayServices = [...services.slice(-CLONE_COUNT), ...services, ...services.slice(0, CLONE_COUNT)];
  const total = services.length;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Layout":
        return <Layout className="w-6 h-6 text-amber-500" />;
      case "ShoppingCart":
        return <ShoppingCart className="w-6 h-6 text-amber-500" />;
      case "Globe":
        return <Globe className="w-6 h-6 text-amber-500" />;
      case "Lightbulb":
        return <Lightbulb className="w-6 h-6 text-amber-500" />;
      case "ClipboardList":
        return <ClipboardList className="w-6 h-6 text-amber-500" />;
      case "Server":
        return <Server className="w-6 h-6 text-amber-500" />;
      default:
        return <Layout className="w-6 h-6 text-amber-500" />;
    }
  };

  const getCardWidth = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return 300;
    return (el.children[0]?.getBoundingClientRect().width || 300) + 24;
  }, []);

  const getRealIndex = useCallback((displayIndex: number) => {
    return ((displayIndex - CLONE_COUNT) % total + total) % total;
  }, [total]);

  const scrollToReal = useCallback((realIndex: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = getCardWidth();
    const displayIndex = realIndex + CLONE_COUNT;
    isResetting.current = true;
    el.scrollTo({ left: displayIndex * cardWidth, behavior: "smooth" });
    setActiveIndex(realIndex);
    setTimeout(() => { isResetting.current = false; }, 50);
  }, [getCardWidth]);

  const resetAutoScroll = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => {
          const next = (prev + 1) % total;
          scrollToReal(next);
          return next;
        });
      }, 5000);
    }
  }, [isHovered, total, scrollToReal]);

  useLayoutEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = getCardWidth();
    el.scrollTo({ left: CLONE_COUNT * cardWidth, behavior: "instant" });
  }, [getCardWidth]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      if (isResetting.current) return;

      const scrollLeft = el.scrollLeft;
      const cardWidth = getCardWidth();
      const displayIndex = Math.round(scrollLeft / cardWidth);
      const realIndex = getRealIndex(displayIndex);
      setActiveIndex(realIndex);

      const lowerBound = (CLONE_COUNT - 1) * cardWidth;
      const upperBound = (CLONE_COUNT + total) * cardWidth;

      if (scrollLeft < lowerBound - cardWidth * 0.5) {
        isResetting.current = true;
        const target = displayIndex + total;
        el.scrollTo({ left: target * cardWidth, behavior: "instant" });
        setTimeout(() => { isResetting.current = false; }, 50);
      } else if (scrollLeft > upperBound + cardWidth * 0.5) {
        isResetting.current = true;
        const target = displayIndex - total;
        el.scrollTo({ left: target * cardWidth, behavior: "instant" });
        setTimeout(() => { isResetting.current = false; }, 50);
      }
    };

    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [getCardWidth, getRealIndex, total]);

  useEffect(() => {
    resetAutoScroll();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [resetAutoScroll, isHovered]);

  const handlePrev = () => {
    const next = (activeIndex - 1 + total) % total;
    scrollToReal(next);
    resetAutoScroll();
  };

  const handleNext = () => {
    const next = (activeIndex + 1) % total;
    scrollToReal(next);
    resetAutoScroll();
  };

  return (
    <section id="services-section" className="py-8">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-3">
          <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#e7e5e4] dark:bg-sand-800 text-sand-700 dark:text-sand-300 font-semibold uppercase tracking-wider">
            Offerings
          </span>
          <h2 className="text-2xl sm:text-3xl font-mono font-bold text-sand-900 dark:text-sand-50">
            Services Provided
          </h2>
        </div>

        <div className="hidden sm:flex items-center space-x-2">
          <button
            onClick={handlePrev}
            className="p-2 rounded-lg border border-sand-200 dark:border-sand-800 text-sand-500 dark:text-sand-400 hover:bg-sand-100 dark:hover:bg-sand-800/50 transition-all cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={handleNext}
            className="p-2 rounded-lg border border-sand-200 dark:border-sand-800 text-sand-500 dark:text-sand-400 hover:bg-sand-100 dark:hover:bg-sand-800/50 transition-all cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {displayServices.map((service, idx) => (
          <div
            key={`${service.id}-${idx}`}
            id={`service-card-${service.id}`}
            className="snap-start shrink-0 w-[85vw] sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] flex flex-col justify-between p-6 rounded-xl border border-sand-200 dark:border-sand-800/80 bg-white dark:bg-sand-900/50 shadow-sm transition-all duration-300 hover:border-sand-400 dark:hover:border-sand-700 hover:shadow-md cursor-pointer group"
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
                {service.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start text-xs text-sand-600 dark:text-sand-300">
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

      <div className="flex items-center justify-center space-x-2 mt-4">
        {services.map((_, idx) => (
          <button
            key={idx}
            onClick={() => { scrollToReal(idx); resetAutoScroll(); }}
            className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
              activeIndex === idx
                ? "bg-amber-500 w-6"
                : "bg-sand-300 dark:bg-sand-700 hover:bg-sand-400 dark:hover:bg-sand-600"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
