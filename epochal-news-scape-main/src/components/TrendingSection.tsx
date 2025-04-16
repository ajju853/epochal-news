
import React, { useState, useEffect } from 'react';
import { TrendingUp } from 'lucide-react';

interface TrendingItem {
  id: number;
  title: string;
  views: number;
  category: string;
}

const trendingItems: TrendingItem[] = [
  { id: 1, title: 'Scientists discover new sustainable energy source', views: 32450, category: 'Science' },
  { id: 2, title: 'Global markets react to economic stimulus announcement', views: 28734, category: 'Business' },
  { id: 3, title: 'New breakthrough in artificial intelligence research', views: 25102, category: 'Technology' },
  { id: 4, title: 'Historic peace agreement reached in ongoing conflict', views: 23890, category: 'World' },
  { id: 5, title: 'Major health study reveals surprising nutrition findings', views: 19245, category: 'Health' },
];

const TrendingSection: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState<TrendingItem[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    setVisibleItems(trendingItems.slice(0, 5));
    
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % trendingItems.length;
        return newIndex;
      });
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="paper-texture border border-border p-4 md:p-6 rounded-lg">
      <header className="flex items-center gap-2 mb-4 pb-2 border-b border-border">
        <TrendingUp size={18} className="text-accent-red" />
        <h3 className="newspaper-subheading font-bold text-xl">Trending Now</h3>
      </header>
      
      <ul className="space-y-4">
        {visibleItems.map((item, index) => (
          <li 
            key={item.id} 
            className={`relative transition-all duration-300 ${
              index === activeIndex ? 'bg-accent-red/5 -translate-x-1 scale-105' : ''
            }`}
          >
            <a href="#" className="flex gap-4 p-2 group">
              <span className="font-bold text-xl text-muted-foreground w-6">
                {index + 1}
              </span>
              <div className="flex-1">
                <h4 className="text-base font-medium leading-tight group-hover:text-accent-red transition-colors">
                  {item.title}
                </h4>
                <div className="flex items-center mt-1 text-xs text-muted-foreground">
                  <span className="bg-secondary text-secondary-foreground px-1.5 py-0.5 rounded text-xs">
                    {item.category}
                  </span>
                  <span className="ml-2">
                    {new Intl.NumberFormat().format(item.views)} views
                  </span>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingSection;
