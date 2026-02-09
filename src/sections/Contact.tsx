import { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, Facebook, Youtube, Instagram, Mail, MapPin, ArrowUpRight, Sparkles } from 'lucide-react';

const socialLinks = [
  { name: 'GitHub', icon: Github, url: 'https://github.com/nazbeer', description: 'View my projects' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/nazbeerahammed/', description: 'Let\'s connect professionally' },
  { name: 'Facebook', icon: Facebook, url: 'https://www.facebook.com/nazbeer.ahammed', description: 'Follow my updates' },
  { name: 'YouTube', icon: Youtube, url: 'https://www.youtube.com/user/nazbeerahammed', description: 'Watch my tutorials' },
  { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/nasbeer.codes/', description: 'Behind the scenes' },
];

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-void overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-2xl" />
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-primary/5 rounded-full blur-2xl" />
      </div>

      <div className="relative z-10 section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <header
            className={`text-center mb-16 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="inline-block text-primary text-sm font-semibold uppercase tracking-widest mb-4">
              Get In Touch
            </span>
            <h2 id="contact-heading" className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              LET'S BUILD THE <span className="gradient-text">FUTURE</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I am available on almost every social media. You can message me, 
              I will reply within 24 hours. I can help you with Data Science, 
              Python, React, WordPress, Cloud and Open Source Development.
            </p>
          </header>

          {/* Email CTA Card */}
          <div
            className={`max-w-2xl mx-auto mb-16 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <a
              href="mailto:nazbeer.ahammed@gmail.com"
              className="group block relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 border border-primary/30 p-8 lg:p-12 hover:border-primary/50 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              
              <div className="relative flex flex-col lg:flex-row items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <div className="text-center lg:text-left flex-1">
                  <h3 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-2">
                    Let&apos;s Work Together
                  </h3>
                  <p className="text-muted-foreground mb-1">Send me an email at</p>
                  <p className="text-xl lg:text-2xl text-primary font-medium group-hover:underline decoration-2 underline-offset-4">
                    nazbeer.ahammed@gmail.com
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <ArrowUpRight className="w-6 h-6" />
                </div>
              </div>
            </a>
          </div>

          {/* Social Links Grid */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="flex items-center justify-center gap-2 mb-8">
              <Sparkles className="w-5 h-5 text-primary" />
              <p className="text-sm text-muted-foreground uppercase tracking-widest font-medium">
                Connect With Me
              </p>
              <Sparkles className="w-5 h-5 text-primary" />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden rounded-xl bg-matter border border-border p-6 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                    style={{ transitionDelay: `${index * 50}ms` }}
                    aria-label={`Visit my ${social.name} profile`}
                  >
                    <div className="flex flex-col items-center text-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110">
                        <Icon size={24} />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {social.name}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {social.description}
                        </p>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Location */}
          <div
            className={`mt-16 flex items-center justify-center gap-2 text-muted-foreground transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <MapPin className="w-4 h-4" />
            <span className="text-sm">Based in Kochi, India • Available Worldwide</span>
          </div>
        </div>
      </div>
    </section>
  );
}
