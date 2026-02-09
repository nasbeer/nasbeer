import { useEffect, useRef, useState } from 'react';
import { Award, ExternalLink, Trophy } from 'lucide-react';

const certifications = [
  {
    id: 1,
    title: 'Scrum Master',
    issuer: 'PMI',
    url: 'https://www.linkedin.com/learning/certificates/4727a4dbeb1ff30664387c7481b0a2a83201de0d6f43a85a8cc5ac00265963fc',
    category: 'Project Management',
  },
  {
    id: 2,
    title: 'Data Science Foundation',
    issuer: 'IBM',
    url: 'https://www.credly.com/badges/504886d6-ed1c-41bf-a2c1-692fcbaf2d3f/linked_in_profile',
    category: 'Data Science',
  },
  {
    id: 3,
    title: 'SQL',
    issuer: 'HackerRank',
    url: 'https://www.hackerrank.com/certificates/e5d517b88486',
    category: 'Database',
  },
  {
    id: 4,
    title: 'CSS',
    issuer: 'HackerRank',
    url: 'https://www.hackerrank.com/certificates/c36608dccf63',
    category: 'Frontend',
  },
  {
    id: 5,
    title: 'Python',
    issuer: 'HackerRank',
    url: 'https://www.hackerrank.com/certificates/f3671f339a4a',
    category: 'Programming',
  },
  {
    id: 6,
    title: 'Fake News Detection with ML',
    issuer: 'Coursera Projects',
    url: 'https://www.coursera.org/account/accomplishments/verify/VLYXK79C39CD',
    category: 'Machine Learning',
  },
  {
    id: 7,
    title: 'Google Data Analyst Certification',
    issuer: 'Coursera',
    url: 'https://www.coursera.org/account/accomplishments/verify/D4QYZL45KESG',
    category: 'Data Analysis',
  },
  {
    id: 8,
    title: 'G Suite Admin Fundamentals',
    issuer: 'Coursera',
    url: 'https://www.coursera.org/account/accomplishments/verify/65QRY6M7WGNU',
    category: 'Administration',
  },
  {
    id: 9,
    title: 'Deep Learning Fundamentals',
    issuer: 'SimpliLearn',
    url: 'https://certificates.simplicdn.net/share/1409501.pdf',
    category: 'Deep Learning',
  },
  {
    id: 10,
    title: 'Introduction to AI',
    issuer: 'SimpliLearn',
    url: 'https://certificates.simplicdn.net/share/1331917.pdf',
    category: 'AI',
  },
  {
    id: 11,
    title: 'React JS With Node & Express',
    issuer: 'Udemy',
    url: 'https://www.udemy.com/certificate/UC-VMNYT0H5/',
    category: 'Full Stack',
  },
];

const categories = ['All', 'Data Science', 'Machine Learning', 'Programming', 'Frontend', 'Full Stack'];

export default function Certifications() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
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

  const filteredCerts = activeCategory === 'All' 
    ? certifications 
    : certifications.filter(cert => cert.category === activeCategory);

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-void overflow-hidden"
      aria-labelledby="certifications-heading"
    >
      {/* Background */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <header
            className={`text-center mb-12 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="inline-block text-primary text-sm font-semibold uppercase tracking-widest mb-4">
              Achievements
            </span>
            <h2 id="certifications-heading" className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              CERTIFICATIONS <span className="gradient-text">& BADGES</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional certifications and achievements that validate my expertise 
              in various technologies and methodologies.
            </p>
          </header>

          {/* Category Filter */}
          <nav
            className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            aria-label="Filter certifications by category"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
                    : 'bg-matter text-muted-foreground hover:text-foreground border border-border hover:border-primary/30'
                }`}
                aria-pressed={activeCategory === category}
              >
                {category}
              </button>
            ))}
          </nav>

          {/* Certifications Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCerts.map((cert, index) => (
              <a
                key={cert.id}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative bg-matter rounded-xl p-6 border border-border hover:border-primary/30 transition-all duration-500 card-hover ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
                aria-label={`View ${cert.title} certificate from ${cert.issuer}`}
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors border border-primary/20">
                  <Award className="w-7 h-7 text-primary" aria-hidden="true" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-3">{cert.issuer}</p>
                
                {/* Category Tag */}
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20">
                  {cert.category}
                </span>

                {/* Link Icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink size={16} className="text-primary" aria-hidden="true" />
                </div>
              </a>
            ))}
          </div>

          {/* Stats */}
          <div
            className={`mt-16 grid grid-cols-3 gap-8 text-center transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                <Trophy className="w-8 h-8 text-primary" />
              </div>
              <div className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-2">
                {certifications.length}+
              </div>
              <div className="text-muted-foreground text-sm">Certifications</div>
            </div>
            <div className="group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <div className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-2">
                6
              </div>
              <div className="text-muted-foreground text-sm">Platforms</div>
            </div>
            <div className="group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                <ExternalLink className="w-8 h-8 text-primary" />
              </div>
              <div className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-2">
                10+
              </div>
              <div className="text-muted-foreground text-sm">Skill Areas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
