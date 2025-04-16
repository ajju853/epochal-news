
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, Sun, Moon } from 'lucide-react';
import { Button } from './ui/button';
import { useToast } from './ui/use-toast';

const Header: React.FC = () => {
  const [date, setDate] = useState(new Date());
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    // Check system preference for dark mode
    const darkModePreference = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(darkModePreference);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.documentElement.classList.toggle('dark', newMode);
    
    toast({
      title: newMode ? "Dark Mode Enabled" : "Light Mode Enabled",
      description: `You've switched to ${newMode ? "evening" : "morning"} edition.`,
      duration: 2000,
    });
  };

  const formattedDate = date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const sections = [
    { name: 'World', path: '/world' },
    { name: 'Politics', path: '/politics' },
    { name: 'Business', path: '/business' },
    { name: 'Technology', path: '/technology' },
    { name: 'Science', path: '/science' },
    { name: 'Health', path: '/health' },
    { name: 'Arts', path: '/arts' },
  ];

  return (
    <header className="w-full border-b border-border sticky top-0 bg-background/80 backdrop-blur-md z-50">
      {/* Masthead */}
      <div className="container px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
          
          <div className="flex-1 text-center">
            <Link 
              to="/"
              className="inline-block transition-all hover:scale-105"
            >
              <h1 className="newspaper-heading text-4xl md:text-5xl lg:text-6xl font-black tracking-tight ink-bleed text-accent-red">EPOCHAL</h1>
              <p className="text-xs md:text-sm uppercase tracking-widest mt-1">The Living Newsverse</p>
            </Link>
          </div>
          
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={toggleDarkMode}
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </Button>
            <Button variant="ghost" size="icon">
              <Search size={18} />
            </Button>
          </div>
        </div>
        
        {/* Date and info bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between mt-2 text-xs md:text-sm">
          <p className="font-medium">{formattedDate}</p>
          <p className="text-muted-foreground">
            Vol. MMXXIV, No. 42 • Late Edition
          </p>
          <p className="hidden md:block">
            New York: {Math.floor(Math.random() * 10) + 60}°F • Partly Cloudy
          </p>
        </div>
      </div>
      
      {/* Navigation */}
      <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block border-t border-border`}>
        <div className="container px-4 md:px-6 py-2 overflow-x-auto">
          <ul className="flex flex-col md:flex-row gap-1 md:gap-6 justify-center">
            {sections.map((section) => (
              <li key={section.name}>
                <Link 
                  to={section.path} 
                  className="block py-2 md:py-1 whitespace-nowrap hover:text-accent-red transition-colors duration-200"
                >
                  {section.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
