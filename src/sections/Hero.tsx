import { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, ExternalLink, ChevronDown, Code2 } from 'lucide-react';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsLoaded(true);

    const handleScroll = () => {
      if (imageRef.current) {
        const scrollY = window.scrollY;
        imageRef.current.style.transform = `translateY(${scrollY * 0.2}px) scale(${1 + scrollY * 0.0002})`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-void"
      aria-label="Hero Section - Nasbeer Ahammed Portfolio"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-void via-matter to-void" />
      
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.03]"
        aria-hidden="true"
        style={{
          backgroundImage: `linear-gradient(rgba(99,102,241,0.4) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(99,102,241,0.4) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative z-10 w-full section-padding py-20 lg:py-0">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-screen">
            {/* Left Content */}
            <div className="order-2 lg:order-1 text-center lg:text-left">
              {/* Main Heading */}
              <h1
                className={`font-display text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold text-foreground leading-none mb-0 mt-14 transition-all duration-700 delay-100 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                NASBEER
                <br />
                <span className="gradient-text">AHAMMED</span>
              </h1>

              {/* Subtitle */}
              <p
                className={`text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-light mb-6 transition-all duration-700 delay-200 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                Senior Full Stack Engineer <span className="text-primary">&</span> AI Specialist
              </p>

              {/* Description */}
              <p
                className={`text-base lg:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 transition-all duration-700 delay-300 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                10+ years of experience in AI/ML, data science, and full-stack application development. 
                Building scalable web and mobile applications using React, React Native, Node.js, and Python. 
                Expert in LLMs, RAG architectures, and cloud-native solutions.
              </p>

              {/* CTA Buttons */}
              <div
                className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10 transition-all duration-700 delay-400 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn-primary"
                  aria-label="View my projects"
                >
                  Explore My Work
                  <ExternalLink size={18} />
                </a>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn-secondary"
                  aria-label="Contact me"
                >
                  Get In Touch
                </a>
              </div>

              {/* Social Links */}
              <nav
                className={`flex gap-3 justify-center lg:justify-start transition-all duration-700 delay-500 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                aria-label="Social media links"
              >
                <a
                  href="https://github.com/nazbeer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-secondary border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover:scale-110"
                  aria-label="Visit my GitHub profile"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/nazbeerahammed/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-secondary border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover:scale-110"
                  aria-label="Visit my LinkedIn profile"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://www.hackerrank.com/nazbeer_ahammed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-secondary border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover:scale-110"
                  aria-label="Visit my HackerRank profile"
                >
                  <Code2 size={20} />
                </a>
              </nav>
            </div>

            {/* Right Content - Image */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div
                ref={imageRef}
                className={`relative transition-all duration-1000 ${
                  isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
              >
                {/* Image Container */}
                <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px]">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" aria-hidden="true" />
                  
                  {/* Main Image */}
                  <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-primary/30 glow-primary">
                    <img
                      src="/images/hero-portrait.jpg"
                      alt="Nasbeer Ahammed - Senior Full Stack Engineer and AI Specialist"
                      className="w-full h-full object-cover object-top"
                      loading="eager"
                      width="450"
                      height="450"
                    />
                    
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-void/50 via-transparent to-transparent" aria-hidden="true" />
                  </div>

                  {/* Floating Badges */}
                  <div className="absolute -left-4 top-1/4 px-4 py-2 rounded-xl glass animate-float shadow-lg">
                    <span className="text-sm font-semibold text-primary">React Native</span>
                  </div>
                  <div 
                    className="absolute -right-4 top-1/3 px-4 py-2 rounded-xl glass animate-float shadow-lg"
                    style={{ animationDelay: '1s' }}
                  >
                    <span className="text-sm font-semibold text-primary">AI/ML</span>
                  </div>
                  <div 
                    className="absolute left-0 bottom-1/4 px-4 py-2 rounded-xl glass animate-float shadow-lg"
                    style={{ animationDelay: '2s' }}
                  >
                    <span className="text-sm font-semibold text-primary">Python</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
        aria-label="Scroll down to about section"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown size={24} className="animate-bounce" />
        </div>
      </button>
    </section>
  );
}
