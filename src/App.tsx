import { Toaster } from 'sonner';
import { ThemeProvider } from '@/hooks/use-theme';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="nasbeer-portfolio-theme">
      <div className="min-h-screen bg-void text-foreground">
        <Toaster 
          position="top-right" 
          toastOptions={{
            style: {
              background: 'hsl(var(--card))',
              color: 'hsl(var(--card-foreground))',
              border: '1px solid hsl(var(--border))',
            },
          }}
        />
        <Navigation />
        <main>
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
