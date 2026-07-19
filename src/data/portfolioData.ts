import { BlogPost, Service, PortfolioData } from "../types";

export const portfolioData: PortfolioData = {
  name: "Akshay K. M.",
  role: "Freelance Full-Stack Developer",
  imagePath: "svg-avatar", // We'll render a high-quality SVG avatar
  aboutMarkdown: `
# Hi there, I'm Akshay! 👋

I am a passionate **Freelance Full-Stack Developer** dedicated to crafting minimalist, high-performance, and beautifully tailored digital experiences. 

I believe that great design is not about what you can add, but what you can **comfortably take away** to let the core message shine. By emphasizing clean typography, structured spacing, and blazing-fast loading speeds, I build products that are both a joy to use and highly effective at converting visitors into customers.

### Why Work With Me?
- **Performance First**: I build optimized, lightweight applications designed to score 100% on Core Web Vitals.
- **Tailored Communication**: You work directly with the developer—no agencies, no middle-men.
- **Modern Tech Stack**: Expert in building responsive, solid web architectures using React, Tailwind CSS, and reliable cloud solutions.

Feel free to explore my services below, read through some of my latest articles, or reach out directly to chat about your next big idea!
`,
  services: [
    {
      id: "cms-development",
      title: "CMS Development",
      description: "Custom CMS solutions designed to give you full control over your content without the complexity.",
      icon: "Layout",
      price: "Custom Quote",
      features: [
        "Headless CMS architecture setup",
        "WordPress & Strapi implementations",
        "Custom content modeling",
        "Intuitive admin dashboards"
      ]
    },
    {
      id: "e-commerce",
      title: "E-Commerce Solutions",
      description: "Full-featured online stores built for conversion, performance, and seamless customer experiences.",
      icon: "ShoppingCart",
      price: "Custom Quote",
      features: [
        "Product catalog & inventory systems",
        "Secure payment gateway integration",
        "Order & shipping workflows",
        "Conversion-optimized checkout"
      ]
    },
    {
      id: "personal-websites",
      title: "Personal Websites",
      description: "Minimal, high-impact personal brand websites that leave a lasting impression on every visitor.",
      icon: "Globe",
      price: "Starting at $499",
      features: [
        "Portfolio showcase design",
        "Blog & content integration",
        "SEO-optimized architecture",
        "Lightning-fast load times"
      ]
    },
    {
      id: "consultation",
      title: "Consultation",
      description: "Expert technical guidance to help you make the right decisions for your digital projects from day one.",
      icon: "Lightbulb",
      price: "Starting at $99/hr",
      features: [
        "Tech stack selection & evaluation",
        "Architecture & code review",
        "Scalability & growth planning",
        "Cost optimization strategies"
      ]
    },
    {
      id: "project-management",
      title: "Project Management",
      description: "End-to-end project oversight from concept to launch — so you can focus on your business, not the details.",
      icon: "ClipboardList",
      price: "Custom Quote",
      features: [
        "Timeline & milestone planning",
        "Task tracking & reporting",
        "Team coordination & communication",
        "Risk management & delivery"
      ]
    },
    {
      id: "server-management",
      title: "Server Management",
      description: "Reliable server setup, monitoring, and maintenance to keep your infrastructure secure and performant.",
      icon: "Server",
      price: "Starting at $199/mo",
      features: [
        "Deployment pipeline setup",
        "Performance monitoring & alerts",
        "Security hardening & updates",
        "Automated backups & recovery"
      ]
    }
  ],
  contact: {
    email: "akshaykm@fastmail.com",
    whatsapp: "https://wa.me/918921395637", // Standard Indian country code format (example, or standard link)
    github: "https://github.com/akshaykrm"
  }
};

export const initialBlogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Why Minimalist Websites Perform Better",
    slug: "why-minimalist-websites-perform-better",
    date: "July 18, 2026",
    excerpt: "Discover how stripping away visual clutter improves user engagement, boosts search engine rankings, and leads to dramatic load-time improvements.",
    readTime: "4 min read",
    tags: ["Design", "Performance", "WebDev"],
    content: `
# Why Minimalist Websites Perform Better

In modern web development, it's incredibly easy to get carried away. With high-powered frameworks and visual effects packages, we have the ability to fill every pixel with animations, scroll effects, and intricate heavy graphics. 

However, the question we must ask ourselves is: **Does this actually help our users?**

In most cases, the answer is a resounding **no**. Minimalist websites consistently outperform their cluttered, animation-heavy counterparts across several key metrics.

---

## 1. Blazing Fast Page Speeds

Page load speed is one of the most critical aspects of the modern user experience. According to research, a 100ms delay in website load time can hurt conversion rates by up to 7%.

When you minimize external dependencies and unnecessary design overhead:
- **Smaller bundle sizes** mean less JavaScript to parse.
- **Fewer static assets** reduce the number of HTTP requests.
- **Sleeker structures** mean faster browser rendering.

Using lightweight CSS utilities like **Tailwind CSS** combined with structured, vanilla-inspired components keeps your site loading in milliseconds rather than seconds.

---

## 2. Reduced Cognitive Load

As human beings, our attention spans are limited. When a visitor arrives on your website, they have a specific goal in mind—whether it's reading a blog post, booking a consultation, or purchasing a service.

> **"Simplicity is the ultimate sophistication."**  
> — Leonardo da Vinci

When a page is littered with floating sidebars, popups, background videos, and aggressive animations:
1. The user's focus is fragmented.
2. They feel overwhelmed.
3. They are significantly more likely to click away (bounce).

Minimalism is about **architectural honesty**. It directs the viewer's gaze exactly where it needs to go: your headings, your copy, and your call-to-action buttons.

---

## 3. Seamless SEO and Accessibility

Search engines love websites that are structured semantically. By keeping layouts simple:
- Screen readers can easily traverse your content.
- Clean heading hierarchies (\`h1\`, \`h2\`, \`h3\`) communicate context clearly to search crawlers.
- Higher mobile compatibility ensures you rank well under mobile-first indexing rules.

## Conclusion

Minimalist web design is not about making things look plain; it is about **crafting with intent**. By stripping away the noise, you create a powerful, unforgettable experience that respects your user's time and attention.

*What are your thoughts on minimal design? Let me know!*
`
  },
  {
    id: "2",
    title: "A Freelancer's Guide to Building Client Trust",
    slug: "freelancer-guide-building-client-trust",
    date: "July 15, 2026",
    excerpt: "Effective communication and honest expectations are the foundation of any successful freelance project. Here is how to construct those channels.",
    readTime: "5 min read",
    tags: ["Freelancing", "Productivity", "Career"],
    content: `
# A Freelancer's Guide to Building Client Trust

Freelancing is about far more than just writing clean code. In fact, technical skills are often only 50% of the equation. The other 50% consists of relationship management, scoping, and above all, **building client trust**.

When clients hire a freelancer, they are taking a risk. They are trusting you with their time, budget, and business reputation. Here is how you can establish credibility right from your very first interaction.

---

## 1. Set Clear, Structured Expectations

Nothing damages a freelance relationship faster than misaligned expectations. Before a single line of code is written:
- **Define the exact scope**: Clearly list what is *included* and, just as importantly, what is *excluded*.
- **Agree on milestones**: Break down the project timeline into distinct, manageable checkpoints.
- **Be realistic with deadlines**: It is always better to *under-promise and over-deliver*. If you think a task will take four days, estimate five.

---

## 2. Establish a Direct, Transparent Feedback Loop

Clients appreciate being kept in the loop. You don't need to write long essays or call them every day; instead, establish a simple, predictable communication structure:

- **Weekly updates**: Send a quick, bulleted email outlining what was completed, what is next, and any current blockers.
- **Direct channels**: Use easily accessible platforms like WhatsApp or Email for quick queries, keeping discussions focused and professional.

---

## 3. Practice Architectural Honesty

Do not try to inflate your project's architecture with overly complex features to "impress" the client. 
If a simple static landing page is what they need, tell them that. Suggesting a lightweight, low-dependency solution rather than an expensive, over-engineered framework demonstrates that you genuinely care about their budget and long-term maintenance costs.

> "A reliable freelancer who communicates clearly and delivers on time will always be preferred over a genius who is silent and unpredictable."

## Summary

By establishing structured workflows, communicating transparently, and keeping your technical implementations elegant and focused, you will transition from being 'just a contractor' to a valued **strategic partner**.
`
  },
  {
    id: "3",
    title: "Mastering Tailwind CSS for High-Contrast Clean Layouts",
    slug: "mastering-tailwind-high-contrast-clean-layouts",
    date: "July 10, 2026",
    excerpt: "Learn how to use Tailwind's native theme utilities, color variations, and space settings to construct visual harmony without clutter.",
    readTime: "3 min read",
    tags: ["Tailwind", "CSS", "Design-Systems"],
    content: `
# Mastering Tailwind CSS for High-Contrast Clean Layouts

Tailwind CSS has completely transformed how we style web applications. Instead of writing custom CSS rules, we construct layouts directly in our HTML/JSX using utility classes.

However, having access to hundreds of utility classes makes it easy to create visual clutter. Let's look at how we can master Tailwind to build cohesive, high-contrast, and beautiful minimalist layouts.

---

## 1. Embrace Generous Negative Space

One of the defining features of premium modern design is the use of **negative space** (or whitespace). Whitespace gives your elements room to "breathe" and signals to the reader what's important.

Instead of squeezing content, use spacious padding and margins:
- Use large gaps in vertical layouts: \`space-y-12\` or \`space-y-16\`.
- Use ample padding for sections: \`py-16 md:py-24\`.
- Keep containers max widths controlled: \`max-w-3xl\` or \`max-w-4xl\` for readable text blocks.

\`\`\`tsx
// Example of a clean, spaced header section
<header className="max-w-3xl mx-auto pt-20 pb-12 px-6">
  <span className="text-xs font-mono tracking-widest uppercase text-amber-500">
    Introductory
  </span>
  <h1 className="mt-3 text-4xl font-mono font-semibold text-zinc-900">
    Design with Intent
  </h1>
</header>
\`\`\`

---

## 2. Focus on Typography Pairings

A successful minimal design relies heavily on great typography. Using Tailwind's custom font families, create rhythmic hierarchies:

- **Display headings**: Use a sophisticated serif font (\`font-mono\`) to add warmth, personality, and human texture.
- **Body copy**: Pair it with a highly readable, clean sans-serif (\`font-sans\`) like Inter for ultimate readability on screens of all sizes.
- **Accents**: Use monospace (\`font-mono\`) in small sizes for dates, tags, and secondary indicators to provide a technical, structured feel.

---

## 3. Build Safe, Accessible Color Contrasts

A minimal design should be clear and accessible. Rather than using pure black (\`#000\`) on pure white (\`#fff\`), which can cause eye strain:
- **Light theme**: Use an off-white background like sand or slate (\`bg-zinc-50\` or \`bg-stone-50/40\`) paired with a deep charcoal text (\`text-zinc-800\`).
- **Dark theme**: Use a deep dark charcoal (\`bg-zinc-950\`) paired with muted silver/white copy (\`text-zinc-300\`) and crisp white headings (\`text-zinc-50\`).

By keeping color variations disciplined and relying on high-contrast accent highlights (like a warm amber or gold), you can build interfaces that look incredibly deliberate, modern, and professional.
`
  }
];
