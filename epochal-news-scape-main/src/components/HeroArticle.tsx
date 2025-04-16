
import React, { useState } from 'react';
import { ArrowRight, Clock } from 'lucide-react';
import { Button } from './ui/button';

interface HeroArticleProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  category: string;
  author: string;
  timeToRead: number;
}

const HeroArticle: React.FC<HeroArticleProps> = ({
  title,
  subtitle,
  imageSrc,
  category,
  author,
  timeToRead,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="relative w-full overflow-hidden rounded-lg paper-texture border border-border article-card fold-shadow"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-video md:aspect-[21/9] overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
          style={{
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6 md:p-10">
          <span className="text-white/90 text-sm font-bold uppercase tracking-wider mb-2 bg-accent-red px-2 py-0.5 rounded w-fit">
            {category}
          </span>
          <h2 className="newspaper-heading text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-2">
            {title}
          </h2>
          <p className="text-white/80 mb-4 max-w-3xl">
            {subtitle}
          </p>
          <div className="flex flex-wrap items-center gap-4 text-white/70 text-sm">
            <span>{author}</span>
            <span>•</span>
            <span className="flex items-center">
              <Clock size={14} className="mr-1" /> {timeToRead} min read
            </span>
            <Button 
              variant="ghost" 
              size="sm"
              className="text-white hover:text-white hover:bg-white/20 ml-auto"
            >
              Read Full Story <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroArticle;
