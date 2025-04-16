
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { CalendarDays, Clock, Share2, MessageSquare } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface InteractiveNewsCardProps {
  title: string;
  excerpt: string;
  imageSrc: string;
  category: string;
  author: string;
  date?: string;
  timeToRead: number;
  commentCount?: number;
  className?: string;
}

const InteractiveNewsCard: React.FC<InteractiveNewsCardProps> = ({
  title,
  excerpt,
  imageSrc,
  category,
  author,
  date = 'Apr 14, 2025',
  timeToRead,
  commentCount = 0,
  className,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Calculate rotation based on mouse position
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isHovered) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element
    const y = e.clientY - rect.top;  // y position within the element
    
    // Calculate rotation (max ±10 degrees)
    const rotateX = ((y / rect.height) - 0.5) * -10;
    const rotateY = ((x / rect.width) - 0.5) * 10;
    
    setMousePosition({ x: rotateY, y: rotateX });
  };
  
  return (
    <div
      className={cn(
        "paper-texture border border-border rounded-lg overflow-hidden transition-all duration-300",
        isHovered ? "shadow-xl" : "shadow-md",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      onMouseMove={handleMouseMove}
      style={{
        transform: `perspective(1000px) rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg) scale(${isHovered ? 1.02 : 1})`,
        transformStyle: 'preserve-3d',
        transition: isHovered ? 'none' : 'all 0.5s ease',
      }}
    >
      <div className="relative">
        <div 
          className="h-48 bg-cover bg-center paper-fold-corner"
          style={{ 
            backgroundImage: `url(${imageSrc})`,
            transition: 'transform 0.5s ease',
            transform: isHovered ? 'scale(1.05)' : 'scale(1)'
          }}
        ></div>
        <Badge className="absolute top-3 left-3 bg-accent-red text-white">
          {category}
        </Badge>
      </div>
      
      <div className="p-4">
        <h3 className="newspaper-subheading text-lg font-bold mb-2 hover:text-accent-red transition-colors">
          {title}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {excerpt}
        </p>
        
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <CalendarDays size={14} />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={14} />
              <span>{timeToRead} min read</span>
            </div>
          </div>
          
          <div>
            <span className="font-medium">By {author}</span>
          </div>
        </div>
        
        <div 
          className={cn(
            "mt-4 flex items-center justify-between border-t border-border pt-3 opacity-0 transition-opacity duration-300",
            isHovered ? "opacity-100" : "opacity-0"
          )}
        >
          <Button variant="ghost" size="sm" className="text-xs">
            <MessageSquare size={14} className="mr-1" />
            {commentCount} Comments
          </Button>
          
          <Button variant="ghost" size="sm" className="text-xs">
            <Share2 size={14} className="mr-1" />
            Share
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InteractiveNewsCard;
