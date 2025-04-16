
import React, { useRef, useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import BreakingNews from './BreakingNews';
import { Separator } from './ui/separator';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NewsSectionLayoutProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  children: React.ReactNode;
}

const NewsSectionLayout: React.FC<NewsSectionLayoutProps> = ({
  title,
  description,
  icon: Icon,
  children
}) => {
  // Using useRef and useState properly
  const mainRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const [showFloatingTitle, setShowFloatingTitle] = useState(false);
  const [scrollRotation, setScrollRotation] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!mainRef.current || !titleRef.current) return;
      
      // Check if title is out of view to show floating title
      const titleRect = titleRef.current.getBoundingClientRect();
      if (titleRect.bottom < 0) {
        setShowFloatingTitle(true);
      } else {
        setShowFloatingTitle(false);
      }
      
      // Add subtle tilt effect based on scroll position
      const scrollY = window.scrollY;
      const rotation = Math.min(Math.max(scrollY / 100 * 0.5, -2), 2);
      setScrollRotation(rotation);
      
      // Apply subtle paper animation effects on scroll
      const articleElements = mainRef.current.querySelectorAll('.article-card, .hero-article');
      articleElements.forEach((element) => {
        const elementTop = (element as HTMLElement).getBoundingClientRect().top;
        const elementInView = elementTop < window.innerHeight * 0.85;
        
        if (elementInView) {
          (element as HTMLElement).style.transform = `translateY(0) scale(1)`;
          (element as HTMLElement).style.opacity = '1';
        } else {
          (element as HTMLElement).style.transform = `translateY(20px) scale(0.98)`;
          (element as HTMLElement).style.opacity = '0.8';
        }
      });
    };
    
    // Initial call to set positions
    handleScroll();
    
    // Add scroll listener for paper effects
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <BreakingNews />
      
      {/* Floating title that appears when scrolling */}
      <div className={cn(
        "fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border transform transition-all duration-300",
        showFloatingTitle ? "translate-y-0" : "-translate-y-full"
      )}>
        <div className="container px-4 py-2 flex items-center gap-2">
          {Icon && <Icon className="h-5 w-5 text-accent-red" />}
          <h2 className="font-bold text-lg">{title}</h2>
        </div>
      </div>
      
      <main 
        ref={mainRef} 
        className="flex-1 container px-4 md:px-6 py-8"
        style={{
          perspective: '1000px',
          transformStyle: 'preserve-3d'
        }}
      >
        <div 
          ref={titleRef}
          className="mb-8 animate-fade-in"
          style={{
            transform: `rotateX(${scrollRotation}deg)`,
            transformOrigin: 'center top'
          }}
        >
          <div className="flex items-center gap-2 mb-2">
            {Icon && <Icon className="h-6 w-6 text-accent-red animate-float" />}
            <h1 className="newspaper-heading text-3xl md:text-4xl lg:text-5xl font-bold typewriter-text">
              {title}
            </h1>
          </div>
          <p className="text-muted-foreground max-w-3xl">
            {description}
          </p>
          <Separator className="mt-4" />
        </div>
        
        {/* Apply paper texture and subtle animations to content */}
        <div 
          className="space-y-8 transition-all duration-300"
          style={{
            transform: `rotateX(${scrollRotation * 0.5}deg)`,
            transformOrigin: 'center top'
          }}
        >
          {children}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NewsSectionLayout;
