import React, { useState } from "react";
import { Mail, MessageSquare, Github, Send, Copy, Check } from "lucide-react";
import { ContactInfo } from "../types";

interface ContactSectionProps {
  contact: ContactInfo;
}

export function ContactSection({ contact }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    message: "",
  });
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const subjectLine = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const bodyText = encodeURIComponent(
      `Hello Akshay,\n\n${formData.message}\n\nBest regards,\n${formData.name}`
    );
    window.location.href = `mailto:${contact.email}?subject=${subjectLine}&body=${bodyText}`;
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact-section" className="py-8">
      {/* Header */}
      <div className="flex items-center space-x-3 mb-8">
        <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#e7e5e4] dark:bg-sand-800 text-sand-700 dark:text-sand-300 font-semibold uppercase tracking-wider">
          Connection
        </span>
        <h2 className="text-2xl sm:text-3xl font-mono font-bold text-sand-900 dark:text-sand-50">
          Get in Touch
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Info & Social Links Cards */}
        <div className="md:col-span-5 space-y-4">
          <p className="text-sand-500 dark:text-sand-400 text-sm leading-relaxed mb-6">
            Have an interesting project, a freelance opportunity, or just want to say hello? Drop me a line or send a quick WhatsApp message. I'm usually responsive and love collaborating on minimal web platforms.
          </p>

          {/* Email Card */}
          <div className="flex items-center justify-between p-4 rounded-xl border border-sand-200 dark:border-sand-800 bg-white/50 dark:bg-sand-900/40 hover:border-sand-300 dark:hover:border-sand-800/80 transition-all">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-sand-50 dark:bg-sand-800 flex items-center justify-center border border-sand-200 dark:border-sand-800 shrink-0">
                <Mail className="w-5 h-5 text-sand-600 dark:text-sand-400" />
              </div>
              <div className="overflow-hidden">
                <span className="block text-xs font-mono text-sand-400 uppercase tracking-wider">Email</span>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-sm font-medium text-sand-900 dark:text-sand-100 hover:text-amber-500 dark:hover:text-amber-400 transition-colors truncate block"
                >
                  {contact.email}
                </a>
              </div>
            </div>
            <button
              onClick={handleCopyEmail}
              className="p-1.5 rounded-md hover:bg-sand-100 dark:hover:bg-sand-800 text-sand-400 hover:text-sand-600 dark:hover:text-sand-300 transition-colors cursor-pointer shrink-0"
              title="Copy email to clipboard"
            >
              {copiedEmail ? (
                <Check className="w-4 h-4 text-emerald-500" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>

          {/* WhatsApp Card */}
          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 p-4 rounded-xl border border-sand-200 dark:border-sand-800 bg-white/50 dark:bg-sand-900/40 hover:border-emerald-500/20 hover:bg-emerald-50/5 dark:hover:bg-emerald-950/5 transition-all group"
          >
            <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-950/20 flex items-center justify-center border border-emerald-100 dark:border-emerald-900/20 shrink-0 group-hover:bg-emerald-500/10 transition-colors">
              <MessageSquare className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <span className="block text-xs font-mono text-sand-400 uppercase tracking-wider">WhatsApp</span>
              <span className="text-sm font-medium text-sand-900 dark:text-sand-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                Send a Direct Message
              </span>
            </div>
          </a>

          {/* GitHub Card */}
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 p-4 rounded-xl border border-sand-200 dark:border-sand-800 bg-white/50 dark:bg-sand-900/40 hover:border-sand-900/10 dark:hover:border-sand-700/50 hover:bg-sand-50 dark:hover:bg-sand-800/20 transition-all group"
          >
            <div className="w-10 h-10 rounded-lg bg-sand-50 dark:bg-sand-800 flex items-center justify-center border border-sand-200 dark:border-sand-800 shrink-0 group-hover:bg-sand-900/5 dark:group-hover:bg-sand-50/5 transition-colors">
              <Github className="w-5 h-5 text-sand-600 dark:text-sand-400" />
            </div>
            <div>
              <span className="block text-xs font-mono text-sand-400 uppercase tracking-wider">GitHub</span>
              <span className="text-sm font-medium text-sand-900 dark:text-sand-100 group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors">
                @akshaykrm
              </span>
            </div>
          </a>
        </div>

        {/* Message Composition Form */}
        <div className="md:col-span-7">
          <form
            onSubmit={handleSendEmail}
            className="p-6 rounded-xl border border-sand-200 dark:border-sand-800 bg-white dark:bg-sand-900/50 space-y-4"
          >
            <h3 className="text-base font-mono font-bold text-sand-900 dark:text-sand-50 mb-1">
              Compose Quick Message
            </h3>
            <p className="text-xs text-sand-400 dark:text-sand-500 mb-4">
              This will draft an email to me from your default mail client.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="contact-name" className="block text-xs font-mono text-sand-500 dark:text-sand-400 mb-1.5 uppercase">
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Jane Doe"
                  className="w-full px-3.5 py-2 text-sm rounded-lg border border-sand-200 dark:border-sand-800 bg-white/50 dark:bg-sand-900/40 text-sand-800 dark:text-sand-100 placeholder-sand-400 dark:placeholder-sand-500 focus:outline-none focus:ring-2 focus:ring-sand-400/50 focus:border-sand-400 transition-all"
                />
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-xs font-mono text-sand-500 dark:text-sand-400 mb-1.5 uppercase">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  className="w-full px-3.5 py-2 text-sm rounded-lg border border-sand-200 dark:border-sand-800 bg-white/50 dark:bg-sand-900/40 text-sand-800 dark:text-sand-100 placeholder-sand-400 dark:placeholder-sand-500 focus:outline-none focus:ring-2 focus:ring-sand-400/50 focus:border-sand-400 transition-all"
                />
              </div>
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-xs font-mono text-sand-500 dark:text-sand-400 mb-1.5 uppercase">
                Your Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project, timeline, and goals..."
                className="w-full px-3.5 py-2 text-sm rounded-lg border border-sand-200 dark:border-sand-800 bg-white/50 dark:bg-sand-900/40 text-sand-800 dark:text-sand-100 placeholder-sand-400 dark:placeholder-sand-500 focus:outline-none focus:ring-2 focus:ring-sand-400/50 focus:border-sand-400 transition-all resize-none"
              />
            </div>

            <button
              id="send-message-btn"
              type="submit"
              className="w-full flex items-center justify-center space-x-2 py-2 px-4 rounded-lg bg-sand-900 hover:bg-sand-800 dark:bg-sand-100 dark:hover:bg-sand-200 text-white dark:text-sand-900 font-medium text-sm transition-colors cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Draft Email</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
