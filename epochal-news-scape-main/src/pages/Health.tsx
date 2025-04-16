
import React from 'react';
import NewsSectionLayout from '@/components/NewsSectionLayout';
import ArticleCard from '@/components/ArticleCard';
import HeroArticle from '@/components/HeroArticle';
import { Heart } from 'lucide-react';

const Health = () => {
  const featuredArticle = {
    title: "Novel Vaccine Platform Shows Broad Protection Against Multiple Viruses",
    subtitle: "Researchers develop single-dose approach that could transform response to emerging infectious diseases",
    imageSrc: "https://images.unsplash.com/photo-1584118624012-df056829fbd0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2032&q=80",
    category: "Health",
    author: "James Wilson",
    timeToRead: 6,
  };
  
  const healthArticles = [
    {
      title: "Mental Health Support Programs Show Positive Outcomes in Schools",
      excerpt: "Early intervention initiatives demonstrate improvements in student wellbeing and academic performance.",
      imageSrc: "https://images.unsplash.com/photo-1454894210209-65bb68943aff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Health",
      author: "Olivia Taylor",
      timeToRead: 5,
    },
    {
      title: "Nutrition Study Links Specific Dietary Patterns to Improved Cognitive Health",
      excerpt: "Long-term research identifies combinations of foods associated with better brain function in aging populations.",
      imageSrc: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80",
      category: "Health",
      author: "Michael Zhang",
      timeToRead: 4,
    },
    {
      title: "Wearable Medical Devices Transform Chronic Disease Management",
      excerpt: "New generation of sensors provides continuous monitoring and early warning of potential health issues.",
      imageSrc: "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Health",
      author: "Rebecca Li",
      timeToRead: 6,
    },
  ];
  
  return (
    <NewsSectionLayout 
      title="Health" 
      icon={Heart}
      description="Medical advances, wellness trends, and insights for maintaining physical and mental wellbeing."
    >
      <div className="mb-8">
        <HeroArticle {...featuredArticle} />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {healthArticles.map((article, index) => (
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

export default Health;
