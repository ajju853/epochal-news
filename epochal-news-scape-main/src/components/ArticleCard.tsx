
import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ArticleCardProps {
  title: string;
  excerpt: string;
  imageSrc?: string;
  category: string;
  author: string;
  timeToRead: number;
  size?: 'small' | 'medium' | 'large';
  isFeature?: boolean;
  className?: string; // Added className prop
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  excerpt,
  imageSrc,
  category,
  author,
  timeToRead,
  size = 'medium',
  isFeature = false,
  className = '', // Default value for className
}) => {
  const hasImage = !!imageSrc;
  
  const sizeClasses = {
    small: 'h-[250px]',
    medium: 'h-[350px]',
    large: 'h-[450px]',
  };
  
  const titleSizeClasses = {
    small: 'text-lg',
    medium: 'text-xl',
    large: 'text-2xl',
  };
  
  return (
    <article 
      className={cn(
        `paper-texture border border-border rounded-lg overflow-hidden article-card ${isFeature ? 'fold-corner' : ''} ${sizeClasses[size]}`,
        className
      )}
    >
      <div className="flex flex-col h-full">
        {hasImage && (
          <div className="relative aspect-video overflow-hidden">
            <img
              src={imageSrc}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500"
            />
            <span className="absolute top-2 left-2 text-xs font-bold uppercase tracking-wider bg-accent-red text-white px-2 py-0.5 rounded">
              {category}
            </span>
          </div>
        )}
        
        <div className="p-4 flex-grow flex flex-col">
          {!hasImage && (
            <span className="text-xs font-bold uppercase tracking-wider text-accent-red mb-2">
              {category}
            </span>
          )}
          
          <h3 className={`newspaper-heading font-bold mb-2 ${titleSizeClasses[size]}`}>
            {title}
          </h3>
          
          <p className="text-muted-foreground mb-4 text-sm line-clamp-3">
            {excerpt}
          </p>
          
          <div className="flex items-center text-xs text-muted-foreground mt-auto">
            <span>{author}</span>
            <span className="mx-2">•</span>
            <span className="flex items-center">
              <Clock size={12} className="mr-1" /> {timeToRead} min
            </span>
            <ArrowRight size={16} className="ml-auto text-accent-red" />
          </div>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
