import { Heart, ArrowUp, Code2 } from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const services = [
  'Data Science',
  'Machine Learning',
  'Full Stack Development',
  'UI/UX Design',
  'Cloud Solutions',
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-matter border-t border-border" role="contentinfo">
      {/* Main Footer */}
      <div className="section-padding py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#home');
                }}
                className="font-display text-4xl font-bold text-foreground tracking-wide inline-block mb-4 hover:opacity-80 transition-opacity"
                aria-label="Nasbeer Ahammed Portfolio - Back to home"
              >
                NASBEER<span className="text-primary">.</span>
              </a>
              <p className="text-muted-foreground max-w-md mb-6">
                Senior Full Stack Engineer & AI Specialist specializing in AI-powered solutions, 
                modern web development, and intuitive user experiences.
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-primary fill-primary" aria-hidden="true" />
                <span>using React & Tailwind</span>
              </div>
            </div>

            {/* Quick Links */}
            <nav aria-label="Footer navigation">
              <h4 className="font-display text-xl font-semibold text-foreground mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2"
                    >
                      <Code2 size={14} className="opacity-50" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Services */}
            <div>
              <h4 className="font-display text-xl font-semibold text-foreground mb-6">
                Services
              </h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <span className="text-muted-foreground inline-flex items-center gap-2">
                      <Code2 size={14} className="opacity-50" />
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="section-padding py-6">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Nasbeer Ahammed. All rights reserved.
            </p>
            
            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all border border-primary/20">
                <ArrowUp size={16} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
