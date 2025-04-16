
import React from 'react';
import NewsSectionLayout from '@/components/NewsSectionLayout';
import ArticleCard from '@/components/ArticleCard';
import HeroArticle from '@/components/HeroArticle';
import { Atom } from 'lucide-react';

const Science = () => {
  const featuredArticle = {
    title: "Exoplanet Discovery Reveals Potential for Habitable World Beyond Our Solar System",
    subtitle: "Astronomers detect atmosphere containing water vapor on planet orbiting within its star's habitable zone",
    imageSrc: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Science",
    author: "Thomas Lee",
    timeToRead: 8,
  };
  
  const scienceArticles = [
    {
      title: "CRISPR Gene Therapy Shows Promising Results in Treatment of Rare Disease",
      excerpt: "Clinical trial demonstrates significant improvement in patients following precise genetic modification of affected cells.",
      imageSrc: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Science",
      author: "Maria Gonzalez",
      timeToRead: 6,
    },
    {
      title: "Dark Matter Research Team Reports Unusual Signals in Underground Detector",
      excerpt: "Physicists cautiously analyze unexpected readings that could provide new insights into the mysterious substance.",
      imageSrc: "https://images.unsplash.com/photo-1618602414364-c96d646db8e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Science",
      author: "Alan Park",
      timeToRead: 7,
    },
    {
      title: "Climate Model Improvements Enable More Accurate Regional Predictions",
      excerpt: "Advanced simulation capabilities help communities prepare for specific environmental changes in their areas.",
      imageSrc: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Science",
      author: "Sarah Johnson",
      timeToRead: 5,
    },
    {
      title: "Ancient Human Settlement Discovered Using Advanced Remote Sensing Technology",
      excerpt: "Archaeological team reveals extensive urban complex hidden beneath forest canopy for over a millennium.",
      imageSrc: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      category: "Science",
      author: "Daniel Moreno",
      timeToRead: 6,
    },
  ];
  
  return (
    <NewsSectionLayout 
      title="Science" 
      icon={Atom}
      description="Discoveries, research, and breakthroughs expanding our understanding of the natural world."
    >
      <div className="mb-8">
        <HeroArticle {...featuredArticle} />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {scienceArticles.map((article, index) => (
          <ArticleCard 
            key={index} 
            {...article} 
            size="medium"
          />
        ))}
      </div>
    </NewsSectionLayout>
  );
};

export default Science;
