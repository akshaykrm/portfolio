import React, { useState } from "react";
import { portfolioData, initialBlogPosts } from "./data/portfolioData";
import { DeveloperAvatar } from "./components/DeveloperAvatar";
import { ThemeToggle } from "./components/ThemeToggle";
import { ServicesSection } from "./components/ServicesSection";
// import { BlogSection } from "./components/BlogSection";
import { ContactSection } from "./components/ContactSection";
import { MarkdownRenderer } from "./components/MarkdownRenderer";
import { ArrowRight, BookOpen, Code, Mail, MessageSquare, Terminal } from "lucide-react";

export default function App() {
  const [activeNav, setActiveNav] = useState("about");

  const scrollToSection = (id: string) => {
    setActiveNav(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-sand-50 dark:bg-sand-950 text-sand-800 dark:text-sand-200 font-sans transition-colors duration-300 antialiased selection:bg-amber-500/10 selection:text-amber-500">
      {/* Dynamic Background Noise/Texture Accent */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.14] dark:opacity-[0.08] bg-[radial-gradient(#808080_1px,transparent_1px)] [background-size:16px_16px] z-50" />
      <div className="bg-gradient-shift" />

      {/* Persistent Elegant Header Navigation */}
      <header className="sticky top-0 z-40 w-full border-b border-sand-200/60 dark:border-sand-900/60 bg-sand-50/80 dark:bg-sand-950/80 backdrop-blur-md transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <button
            onClick={() => scrollToSection("about-section")}
            className="flex items-center space-x-2 text-sm font-mono font-bold text-sand-900 dark:text-sand-50 tracking-wider group cursor-pointer"
          >
            <span className="text-amber-500 group-hover:scale-110 transition-transform">&lt;</span>
            <span>{portfolioData.name}</span>
            <span className="text-amber-500 group-hover:scale-110 transition-transform">/&gt;</span>
          </button>

          <nav className="hidden sm:flex items-center space-x-6 text-xs font-mono">
            <button
              onClick={() => scrollToSection("about-section")}
              className={`hover:text-amber-500 dark:hover:text-amber-400 transition-colors cursor-pointer ${
                activeNav === "about" ? "text-amber-500 font-semibold" : "text-sand-500 dark:text-sand-400"
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services-section")}
              className={`hover:text-amber-500 dark:hover:text-amber-400 transition-colors cursor-pointer ${
                activeNav === "services" ? "text-amber-500 font-semibold" : "text-sand-500 dark:text-sand-400"
              }`}
            >
              Services
            </button>
            {/* <button
              onClick={() => scrollToSection("blog-section")}
              className={`hover:text-amber-500 dark:hover:text-amber-400 transition-colors cursor-pointer ${
                activeNav === "blog" ? "text-amber-500 font-semibold" : "text-sand-500 dark:text-sand-400"
              }`}
            >
              Blog
            </button> */}
            <button
              onClick={() => scrollToSection("contact-section")}
              className={`hover:text-amber-500 dark:hover:text-amber-400 transition-colors cursor-pointer ${
                activeNav === "contact" ? "text-amber-500 font-semibold" : "text-sand-500 dark:text-sand-400"
              }`}
            >
              Contact
            </button>
          </nav>

          <div className="flex items-center space-x-3">
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-4xl mx-auto px-6 py-4 space-y-4 sm:space-y-6">
        {/* HERO / ABOUT SECTION */}
        <section id="about-section" className="pt-4 scroll-mt-20">
          <div className="flex flex-col md:flex-row gap-10 md:gap-12 items-start">
            
            {/* Left Column: Interactive Vector Avatar */}
            <div className="w-full md:w-auto shrink-0 flex justify-center">
              <div className="flex flex-col items-center">
                <DeveloperAvatar />
                <div className="mt-4 text-center md:text-left">
                  <span className="inline-flex items-center space-x-2 text-xs font-mono text-sand-400 dark:text-sand-500 border border-sand-200/60 dark:border-sand-800/60 rounded-full px-3 py-1 bg-sand-100/50 dark:bg-sand-900/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Available for projects</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Markdown About Content */}
            <div className="flex-grow w-full prose dark:prose-invert">
              <MarkdownRenderer markdown={portfolioData.aboutMarkdown} />
              
              {/* Quick Action Links */}
              <div className="mt-6 flex flex-wrap gap-4 pt-4 border-t border-sand-100 dark:border-sand-900">
                <button
                  onClick={() => scrollToSection("contact-section")}
                  className="inline-flex items-center space-x-2 text-sm font-semibold bg-sand-900 text-white hover:bg-sand-800 dark:bg-sand-100 dark:text-sand-950 dark:hover:bg-sand-200 px-4 py-2 rounded-lg transition-colors cursor-pointer"
                >
                  <span>Work With Me</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                {/* <button
                  onClick={() => scrollToSection("blog-section")}
                  className="inline-flex items-center space-x-2 text-sm font-medium border border-sand-200 dark:border-sand-800 hover:bg-sand-100 dark:hover:bg-sand-900/50 px-4 py-2 rounded-lg transition-all cursor-pointer text-sand-600 dark:text-sand-300"
                >
                  <BookOpen className="w-4 h-4 text-amber-500" />
                  <span>Read My Blog</span>
                </button> */}
              </div>
            </div>

          </div>
        </section>

        {/* SERVICES SECTION */}
        <div id="services-anchor" className="scroll-mt-20">
          <ServicesSection services={portfolioData.services} />
        </div>

        {/* BLOG SECTION - temporarily disabled */}
        {/* <hr className="border-sand-200 dark:border-sand-900" />
        <div id="blog-anchor" className="scroll-mt-20">
          <BlogSection posts={initialBlogPosts} />
        </div> */}

        {/* CONTACT SECTION */}
        <div id="contact-anchor" className="scroll-mt-20">
          <ContactSection contact={portfolioData.contact} />
        </div>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-sand-200/60 dark:border-sand-900/60 bg-sand-50/50 dark:bg-sand-950/25 py-6 transition-colors duration-300 mt-4 text-sand-500 dark:text-sand-400">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-xs">
          
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="font-mono text-sand-900 dark:text-sand-50 font-bold">
              {portfolioData.name} © {new Date().getFullYear()}
            </span>
            <span className="text-sand-400 dark:text-sand-500">
              Designed with architectural simplicity
            </span>
          </div>

          <div className="flex items-center space-x-4 font-mono">
            <a
              href={`mailto:${portfolioData.contact.email}`}
              className="hover:text-amber-500 dark:hover:text-amber-400 transition-colors"
            >
              Email
            </a>
            <span>•</span>
            <a
              href={portfolioData.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-500 transition-colors"
            >
              WhatsApp
            </a>
            <span>•</span>
            <a
              href={portfolioData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-500 dark:hover:text-amber-400 transition-colors"
            >
              GitHub
            </a>
          </div>

          <div className="flex items-center space-x-1.5 text-sand-400 dark:text-sand-600 font-mono">
            <Terminal className="w-3.5 h-3.5" />
            <span>Ready for GitHub Pages</span>
          </div>

        </div>
      </footer>
    </div>
  );
}
