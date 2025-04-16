
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail } from 'lucide-react';
import { Button } from './ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const sections = [
    { name: 'World', path: '/world' },
    { name: 'Politics', path: '/politics' },
    { name: 'Business', path: '/business' },
    { name: 'Technology', path: '/technology' },
    { name: 'Science', path: '/science' },
    { name: 'Health', path: '/health' },
    { name: 'Arts', path: '/arts' },
  ];
  
  const companyLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
    { name: 'Ethics Policy', path: '/ethics' },
  ];
  
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-background border-t border-border mt-10">
      <div className="container px-4 md:px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Branding and Description */}
          <div>
            <Link 
              to="/"
              className="inline-block"
            >
              <h2 className="newspaper-heading text-3xl font-bold ink-bleed text-accent-red mb-2">EPOCHAL</h2>
              <p className="text-xs uppercase tracking-widest">The Living Newsverse</p>
            </Link>
            <p className="text-sm text-muted-foreground mt-4">
              Experience news through time with our innovative blend of traditional journalism and cutting-edge technology.
            </p>
          </div>
          
          {/* News Sections */}
          <div>
            <h3 className="text-base font-bold mb-4 uppercase tracking-wider">News Sections</h3>
            <ul className="space-y-2">
              {sections.map((section) => (
                <li key={section.name}>
                  <Link 
                    to={section.path}
                    className="text-sm hover:text-accent-red transition-colors"
                  >
                    {section.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="text-base font-bold mb-4 uppercase tracking-wider">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-sm hover:text-accent-red transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter Sign Up */}
          <div>
            <h3 className="text-base font-bold mb-4 uppercase tracking-wider">Subscribe</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Get the latest news delivered to your inbox.
            </p>
            <div className="flex space-x-2">
              <div className="relative flex-grow">
                <Mail size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="w-full py-2 pl-10 pr-4 text-sm bg-background border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-accent-red"
                />
              </div>
              <Button size="sm" className="bg-accent-red hover:bg-accent-red/90 text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        {/* Social Media Links */}
        <div className="flex flex-wrap justify-center gap-4 mt-8 pt-6 border-t border-border">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a 
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="p-2 text-muted-foreground hover:text-foreground transition-colors" 
              >
                <Icon size={20} />
              </a>
            );
          })}
        </div>
        
        {/* Copyright */}
        <div className="mt-8 text-center text-xs text-muted-foreground">
          <p>&copy; {currentYear} EPOCHAL. All rights reserved.</p>
          <p className="mt-1">
            <Link to="/privacy" className="hover:underline">Privacy Policy</Link> • 
            <Link to="/terms" className="hover:underline ml-2">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
