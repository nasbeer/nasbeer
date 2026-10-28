import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, ArrowRight, FolderGit2 } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Dis Chem App',
    description: 'Dis-Chem Pharmacies is a major South African retail pharmacy chain specializing in health, beauty, wellness, and prescriptions.',
    image: '/images/project-health.jpg',
    tags: ['React Native', 'Node', 'Typescript', 'PostgreSQL', 'Redis', 'AWS', ],
    demoUrl: 'https://play.google.com/store/apps/details?id=za.co.dischem&pli=1',
    githubUrl: null,
    featured: true,
  },
  {
    id: 2,
    title: 'AI Astraea',
    description: 'AI-driven platform leveraging Retrieval-Augmented Generation and autonomous agents for intelligent workflows, chat systems, and knowledge automation across web and mobile platforms.',
    image: '/images/project-ai.jpg',
    tags: ['Python', 'React', 'React Native', 'Next.js', 'PostgreSQL', 'Redis', 'AWS', 'RAG', 'LLMs', 'Agent AI'],
    demoUrl: 'https://aiastraea.com',
    githubUrl: null,
    featured: false,
  },
  {
    id: 3,
    title: 'Compass Portal - Core42 AI',
    description: 'Enterprise AI SaaS platform for managing AI models, subscriptions, API usage, and billing. Implemented secure authentication, usage analytics, API playgrounds, and scalable microservices architecture.',
    image: '/images/project-business.jpg',
    tags: ['Python', 'FastAPI', 'React', 'TypeScript', 'PostgreSQL', 'Docker', 'Kubernetes', 'Azure'],
    demoUrl: 'https://compass.core42.ai/',
    githubUrl: null,
    featured: true,
  },
  {
    id: 4,
    title: 'Compass AI Chat',
    description: 'Real-time AI chat interface integrated with Core42 models, supporting secure authentication, streaming responses, and usage tracking for enterprise users.',
    image: '/images/project-ai.jpg',
    tags: ['Python', 'React', 'TypeScript', 'Azure', 'WebSockets', 'REST APIs'],
    demoUrl: 'https://compass.core42.ai/chat/core42/chat',
    githubUrl: null,
    featured: false,
  },
  {
    id: 5,
    title: 'Loop360',
    description: 'Social intelligence mobile application focused on claims verification and digital trust. Features claims management, real-time chat, AI-powered chat, and fake post detection using intelligent content analysis.',
    image: '/images/project-marketing.jpg',
    tags: ['React Native', 'Next.js', 'NestJS', 'MongoDB', 'AWS', 'AI/ML'],
    demoUrl: null,
    githubUrl: null,
    featured: false,
  },
  {
    id: 6,
    title: 'Jubna Advertising Platform',
    description: 'Large-scale native advertising and monetization platform with real-time analytics, campaign management, payment integrations, and blockchain-enabled transparency for ad operations.',
    image: '/images/project-marketing.jpg',
    tags: ['React', 'Python', 'Node.js', 'PHP', 'PostgreSQL', 'AWS', 'Blockchain'],
    demoUrl: 'https://jubna.com',
    githubUrl: null,
    featured: false,
  },
  {
    id: 7,
    title: 'SureView TV',
    description: 'Digital media and streaming analytics platform providing content performance insights, monetization tools, and secure data pipelines with scalable cloud infrastructure.',
    image: '/images/project-video.jpg',
    tags: ['React', 'Python', 'Node.js', 'PHP', 'PostgreSQL', 'AWS', 'Blockchain'],
    demoUrl: 'https://sureview.tv',
    githubUrl: null,
    featured: false,
  },
  {
    id: 8,
    title: 'Gulfway Delivery App',
    description: 'React Native delivery management app with real-time order tracking, driver route optimization using Google Maps SDK, push notifications, and live delivery status updates through WebSockets.',
    image: '/images/project-business.jpg',
    tags: ['React Native', 'Node.js', 'MongoDB', 'Firebase', 'Google Maps SDK'],
    demoUrl: null,
    githubUrl: null,
    featured: false,
  },
  {
    id: 9,
    title: 'Veterinary Management System',
    description: 'Complete MEAN Stack veterinary management system including appointment scheduling, medical record management, and user roles. Delivered beta version in 2.5 months.',
    image: '/images/project-health.jpg',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    demoUrl: null,
    githubUrl: null,
    featured: false,
  },
  {
    id: 10,
    title: 'Trenchbound',
    description: 'Gaming application which helps gamers to experience the mariana trench depth and its hidden gems',
    image: '/images/project-business.jpg',
    tags: ['React Native', 'AWS', 'Firebase', 'REST APIs'],
    demoUrl: null,
    githubUrl: null,
    featured: false,
  },
];

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
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

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-void overflow-hidden"
      aria-labelledby="projects-heading"
    >
      {/* Background */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
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
              Portfolio
            </span>
            <h2 id="projects-heading" className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              WHAT DID I <span className="gradient-text">BUILD?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A collection of enterprise-grade applications, AI-powered platforms, 
              and mobile solutions built with cutting-edge technologies.
            </p>
          </header>

          {/* Featured Projects */}
          <div className="mb-16">
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <article
                  key={project.id}
                  className={`group relative rounded-2xl overflow-hidden border border-border transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  {/* Background Image */}
                  <figure className="relative h-80 lg:h-96">
                    <img
                      src={project.image}
                      alt={`${project.title} - ${project.description}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                      width="800"
                      height="450"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-void via-void/80 to-transparent" aria-hidden="true" />
                    
                    {/* Featured Badge */}
                    <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30">
                      <span className="text-xs font-semibold text-primary flex items-center gap-1">
                        <FolderGit2 size={12} />
                        Featured
                      </span>
                    </div>
                  </figure>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                    <h3 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm lg:text-base mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    
                    {/* Tags */}
                    <footer className="flex flex-wrap gap-2 mb-6">
                      {project.tags.slice(0, 6).map((tag) => (
                        <span key={tag} className="tech-tag">
                          {tag}
                        </span>
                      ))}
                    </footer>

                    {/* Links */}
                    <nav className="flex gap-4" aria-label={`${project.title} links`}>
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary text-sm"
                          aria-label={`View live demo of ${project.title}`}
                        >
                          <ExternalLink size={16} />
                          Live Demo
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-secondary text-sm"
                          aria-label={`View source code of ${project.title}`}
                        >
                          <Github size={16} />
                          Source
                        </a>
                      )}
                    </nav>
                  </div>

                  {/* Hover Overlay */}
                  <div 
                    className={`absolute inset-0 bg-primary/5 transition-opacity duration-300 pointer-events-none ${
                      hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                    }`}
                    aria-hidden="true"
                  />
                </article>
              ))}
            </div>
          </div>

          {/* Other Projects Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <article
                key={project.id}
                className={`group relative bg-matter rounded-xl overflow-hidden border border-border card-hover transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${(index + 2) * 150}ms` }}
              >
                {/* Image */}
                <figure className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} - ${project.description}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    width="400"
                    height="225"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-matter via-transparent to-transparent" aria-hidden="true" />
                </figure>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <footer className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span key={tag} className="tech-tag text-xs">
                        {tag}
                      </span>
                    ))}
                  </footer>

                  {/* Links */}
                  <nav className="flex gap-3" aria-label={`${project.title} links`}>
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                        aria-label={`View live demo of ${project.title}`}
                      >
                        <ExternalLink size={14} />
                        Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                        aria-label={`View source code of ${project.title}`}
                      >
                        <Github size={14} />
                        Code
                      </a>
                    )}
                  </nav>
                </div>
              </article>
            ))}
          </div>

          {/* View All Button */}
          <div
            className={`text-center mt-12 transition-all duration-700 delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <a
              href="https://github.com/nazbeer"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              aria-label="View all projects on GitHub"
            >
              View All Projects
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
