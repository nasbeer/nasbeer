import { useEffect, useRef, useState } from 'react';
import { Brain, Code, Zap, TrendingUp, Layers, Cloud } from 'lucide-react';

const skills = [
  {
    id: 1,
    title: 'AI/ML & Data Science',
    description: 'Expert in LLMs, RAG architectures, analytics pipelines, and machine learning workflows. Experience with TensorFlow, predictive analytics, and AI-powered solutions.',
    image: '/images/data-science.jpg',
    icon: Brain,
    tags: ['Python', 'TensorFlow', 'RAG', 'LLMs', 'OpenAI', 'scikit-learn'],
  },
  {
    id: 2,
    title: 'Full Stack Development',
    description: 'Building scalable web and mobile applications using React, React Native, Node.js, and Python. Strong expertise in microservices and API-driven systems.',
    image: '/images/fullstack-dev.jpg',
    icon: Code,
    tags: ['React', 'React Native', 'Node.js', 'Python', 'Django', 'FastAPI'],
  },
  {
    id: 3,
    title: 'Cloud & DevOps',
    description: 'Cloud computing with AWS and Azure, Docker, Kubernetes, CI/CD pipelines, and monitoring with Prometheus and Grafana. Database design and optimization.',
    image: '/images/ui-ux-design.jpg',
    icon: Cloud,
    tags: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'PostgreSQL', 'MongoDB'],
  },
];

const stats = [
  { value: '10+', label: 'Years Experience', icon: TrendingUp },
  { value: '50+', label: 'Projects Delivered', icon: Layers },
  { value: '12+', label: 'Mobile Apps Built', icon: Zap },
];

const techStack = [
  'React', 'React Native', 'Next.js', 'Node.js', 'Python', 'Django', 'FastAPI',
  'TypeScript', 'PostgreSQL', 'MongoDB', 'AWS', 'Azure', 'Docker', 'Kubernetes',
  'TensorFlow', 'LLMs', 'RAG', 'Git', 'REST APIs', 'GraphQL'
];

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSkill, setActiveSkill] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-void overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Background Elements */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <header
            className={`text-center mb-16 lg:mb-24 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="inline-block text-primary text-sm font-semibold uppercase tracking-widest mb-4">
              About Me
            </span>
            <h2 id="about-heading" className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              WHO AM <span className="gradient-text">I?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              I build AI applications and full-stack products end to end — React and Next on the front, Node and Python on the back, React Native for mobile, and the observability to keep it all honest. Ten years of shipping things that hold up when real users show up.
            </p>
          </header>

          {/* Skills Cards */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <article
                  key={skill.id}
                  className={`group relative bg-matter rounded-2xl overflow-hidden border border-border card-hover transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                  onMouseEnter={() => setActiveSkill(index)}
                >
                  {/* Image */}
                  <figure className="relative h-48 overflow-hidden">
                    <img
                      src={skill.image}
                      alt={`${skill.title} - ${skill.description}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                      width="400"
                      height="200"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-matter via-matter/50 to-transparent" aria-hidden="true" />
                    
                    {/* Icon Badge */}
                    <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-primary/20 backdrop-blur-sm border border-primary/30 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
                    </div>
                  </figure>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
                      {skill.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {skill.description}
                    </p>
                    
                    {/* Tags */}
                    <footer className="flex flex-wrap gap-2">
                      {skill.tags.map((tag) => (
                        <span key={tag} className="tech-tag">
                          {tag}
                        </span>
                      ))}
                    </footer>
                  </div>

                  {/* Active Indicator */}
                  <div 
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/70 transition-transform duration-300 ${
                      activeSkill === index ? 'scale-x-100' : 'scale-x-0'
                    }`}
                    aria-hidden="true"
                  />
                </article>
              );
            })}
          </div>

          {/* Tech Stack */}
          <div
            className={`mb-16 transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h3 className="text-center text-muted-foreground text-sm uppercase tracking-widest mb-8">
              Technologies I Work With
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full bg-matter border border-border text-foreground text-sm hover:border-primary hover:text-primary transition-all duration-300 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div
            className={`grid grid-cols-3 gap-8 transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="text-center"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/30 mb-4">
                    <Icon className="w-8 h-8 text-primary" aria-hidden="true" />
                  </div>
                  <div className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
