
import React from 'react';
import NewsSectionLayout from '@/components/NewsSectionLayout';
import ArticleCard from '@/components/ArticleCard';
import HeroArticle from '@/components/HeroArticle';
import ArtsTrendingCharts from '@/components/ArtsTrendingCharts';
import { PaintBucket } from 'lucide-react';

const Arts = () => {
  const featuredArticle = {
    title: "The Renaissance of Interactive Museum Experiences",
    subtitle: "How technology is transforming the way we engage with art in galleries worldwide",
    imageSrc: "https://images.unsplash.com/photo-1608099269227-82de5da1e4a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Arts",
    author: "Eleanor Richards",
    timeToRead: 8,
  };
  
  const artsArticles = [
    {
      title: "Traditional Crafts Finding New Audiences Through Social Media",
      excerpt: "Artisans around the world are using platforms like Instagram and TikTok to preserve and promote ancient crafting techniques.",
      imageSrc: "https://images.unsplash.com/photo-1459908676235-d5f02a50184b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Arts",
      author: "Marcus Chen",
      timeToRead: 6,
    },
    {
      title: "The Evolution of Public Art in Urban Planning",
      excerpt: "Cities are increasingly incorporating large-scale art installations as essential elements of community development.",
      imageSrc: "https://images.unsplash.com/photo-1561059531-89289d61df0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      category: "Arts",
      author: "Sophia Martinez",
      timeToRead: 5,
    },
    {
      title: "Ballet Companies Embrace Digital Innovation for Post-Pandemic Era",
      excerpt: "Leading dance organizations are finding creative ways to blend traditional performance with immersive digital experiences.",
      imageSrc: "https://images.unsplash.com/photo-1590941622400-945fb10e11d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Arts",
      author: "Julian Moore",
      timeToRead: 7,
    },
  ];
  
  return (
    <NewsSectionLayout 
      title="Arts & Culture" 
      icon={PaintBucket}
      description="Exploring creativity, expression, and cultural narratives through visual arts, performing arts, literature, and more."
    >
      <div className="mb-8">
        <HeroArticle {...featuredArticle} />
      </div>
      
      {/* Add trending charts section */}
      <ArtsTrendingCharts />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {artsArticles.map((article, index) => (
          <ArticleCard 
            key={index} 
            {...article} 
            size="small"
          />
        ))}
      </div>
    </NewsSectionLayout>
  );
};

export default Arts;
