import { useEffect, useRef, useState } from 'react';
import { Calendar, MapPin, Award, Briefcase } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: 'Sr Full Stack Engineer/Developer',
    company: 'Core42.ai',
    location: 'India (Remote)',
    period: 'June 2024 - Present',
    type: 'work',
    highlights: [
      'Led backend development for Compass Portal using Python (FastAPI/Django) and Node.js',
      'Architected Azure SaaS Marketplace integration for subscription management',
      'Developed React Native companion app with real-time analytics and API Playground',
      'Built microservices architecture with Docker, Kubernetes, and CI/CD pipelines',
      'Implemented Prometheus + Grafana monitoring for system health',
    ],
  },
  {
    id: 2,
    role: 'Team Lead & Senior UI/UX Developer',
    company: 'Gulf Way Marketing LLC',
    location: 'Dubai, UAE',
    period: 'July 2023 - February 2024',
    type: 'work',
    highlights: [
      'Delivered 12+ web and mobile projects using React, React Native, Node.js, Angular, and Django',
      'Built Gulfway Delivery App with real-time tracking and Google Maps SDK integration',
      'Developed Rental App with Stripe payments and booking management',
      'Created Limo Services App with real-time location tracking and in-app chat',
      'Delivered Veterinary Management System (MEAN Stack) in 2.5 months',
      'Released 8 custom WordPress websites for corporate clients',
    ],
  },
  {
    id: 3,
    role: 'Team Lead and Data Scientist',
    company: 'DiGIMENA FZE',
    location: 'Dubai, UAE',
    period: 'April 2020 - February 2023',
    type: 'work',
    highlights: [
      'Led UI enhancement for Jubna Advertising Platform with complete UX redesign',
      'Built React Native Ad Performance Tracker App for live campaign analytics',
      'Developed Kalimad API using Django + ReactJS for engagement analytics',
      'Created Predictive Bidding Tool using Python scikit-learn for ad cost optimization',
      'Automated ad spend reports reducing reporting time by 60%',
    ],
  },
  {
    id: 4,
    role: 'WordPress & UI Developer',
    company: 'TPConnects Technologies LLC',
    location: 'Dubai, UAE',
    period: 'December 2019 - April 2020',
    type: 'work',
    highlights: [
      'Built Flight Booking Companion App using React Native with Amadeus and NDC APIs',
      'Updated WordPress UI for five B2C airline platforms',
      'Implemented B2C flight management platforms using Angular, Node.js, and Java Spring Boot',
      'Designed REST and MVC microservices for IATA NDC API',
    ],
  },
  {
    id: 5,
    role: 'Full Stack Developer',
    company: 'Expibotz Technologies Private Limited',
    location: 'India',
    period: 'November 2012 - August 2019',
    type: 'work',
    highlights: [
      'Developed enterprise applications using React, React Native, Python (Django/Flask), Angular, ASP.NET',
      'Built KSEB Mobile App (Kerala State Electricity Board) with secure payment gateways',
      'Created whiteboard tutoring platform with WebRTC and Socket.io',
      'Developed analytics dashboards and automated data pipelines with Python',
    ],
  },
];

const accomplishments = [
  'Best Performer at Core42 (Dec 2024) for high-impact contributions',
  'Delivered full-featured Veterinary Management System in 2.5 months',
  'Built BizTrackPro in 1.5 months using ReactJS, Django, and Flutter',
  'Architected cloud-native microservices with Docker and Kubernetes',
  'Implemented AI/ML solutions including LLM-based features and RAG pipelines',
  'Led cross-functional engineering teams across web and mobile projects',
];

export default function Experience() {
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
      id="experience"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-void overflow-hidden"
      aria-labelledby="experience-heading"
    >
      {/* Background */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
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
              My Journey
            </span>
            <h2 id="experience-heading" className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              WORK <span className="gradient-text">EXPERIENCE</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional experience building enterprise platforms, AI solutions, 
              and leading cross-functional engineering teams.
            </p>
          </header>

          {/* Accomplishments */}
          <div
            className={`mb-16 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="bg-matter rounded-2xl p-8 border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                  <Award className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-foreground">
                  Key Accomplishments
                </h3>
              </div>
              <ul className="grid md:grid-cols-2 gap-4">
                {accomplishments.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 group">
                    <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors">
                      <span className="text-primary text-xs">✓</span>
                    </span>
                    <span className="text-muted-foreground text-sm group-hover:text-foreground transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Timeline */}
          <div
            className={`relative transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Timeline Container */}
            <div className="relative">
              {/* Timeline Line - Desktop: center, Mobile: left */}
              <div 
                className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20 transform lg:-translate-x-1/2" 
                aria-hidden="true" 
              />

              <div className="space-y-8 lg:space-y-12">
                {experiences.map((exp, index) => (
                  <article
                    key={exp.id}
                    className={`relative flex flex-col lg:flex-row gap-4 lg:gap-8 ${
                      index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Timeline Dot */}
                    <div 
                      className="absolute left-6 lg:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-void transform -translate-x-1/2 mt-2 z-10 shadow-lg shadow-primary/30" 
                      aria-hidden="true" 
                    />

                    {/* Content Card */}
                    <div className={`ml-14 lg:ml-0 lg:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'lg:text-left' : ''}`}>
                      <div className="bg-matter rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300 card-hover group">
                        {/* Header */}
                        <div className={`flex items-center gap-2 mb-3 ${index % 2 === 0 ? 'lg:justify-start' : ''}`}>
                          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                            <Briefcase className="w-5 h-5 text-primary" />
                          </div>
                          <div className={`flex items-center gap-2 text-sm text-primary bg-primary/10 px-3 py-1 rounded-full ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                            <Calendar size={14} />
                            <time>{exp.period}</time>
                          </div>
                        </div>

                        {/* Role & Company */}
                        <h3 className="font-display text-2xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-muted-foreground font-medium mb-2">
                          {exp.company}
                        </p>
                        
                        {/* Location */}
                        <div className={`flex items-center gap-1.5 text-sm text-muted-foreground mb-4 ${index % 2 === 0 ? 'lg:justify-start' : ''}`}>
                          <MapPin size={14} />
                          <span>{exp.location}</span>
                        </div>

                        {/* Highlights */}
                        <ul className={`space-y-2 ${index % 2 === 0 ? 'lg:text-left' : ''}`}>
                          {exp.highlights.map((item, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Empty space for other side */}
                    <div className="hidden lg:block lg:w-[calc(50%-2rem)]" />
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
