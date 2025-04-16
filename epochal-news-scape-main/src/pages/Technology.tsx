
import React from 'react';
import NewsSectionLayout from '@/components/NewsSectionLayout';
import ArticleCard from '@/components/ArticleCard';
import HeroArticle from '@/components/HeroArticle';
import TechnologyTrendsChart from '@/components/TechnologyTrendsChart';
import { Cpu } from 'lucide-react';

const Technology = () => {
  const featuredArticle = {
    title: "Quantum Computing Achieves Major Breakthrough in Error Correction",
    subtitle: "Scientists demonstrate fault-tolerant quantum systems that maintain coherence for unprecedented durations",
    imageSrc: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Technology",
    author: "Marcus Chen",
    timeToRead: 7,
  };
  
  const technologyArticles = [
    {
      title: "AI-Powered Medical Diagnostics System Receives Regulatory Approval",
      excerpt: "Platform demonstrates accuracy matching or exceeding human specialists in detecting early signs of disease.",
      imageSrc: "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
      category: "Technology",
      author: "James Wilson",
      timeToRead: 5,
    },
    {
      title: "Next-Generation Renewable Battery Technology Shows Promise in Early Tests",
      excerpt: "New energy storage solution offers higher capacity, faster charging, and reduced environmental impact compared to lithium-ion batteries.",
      imageSrc: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2194&q=80",
      category: "Technology",
      author: "Rebecca Li",
      timeToRead: 6,
    },
    {
      title: "Digital Privacy Framework Adopted by Major Tech Platforms",
      excerpt: "Industry-wide standards aim to enhance user control over personal data while enabling innovative services.",
      imageSrc: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
      category: "Technology",
      author: "Nathan Rodriguez",
      timeToRead: 4,
    },
  ];
  
  return (
    <NewsSectionLayout 
      title="Technology" 
      icon={Cpu}
      description="Innovation, digital transformation, and the latest advances reshaping how we live and work."
    >
      <div className="mb-8">
        <HeroArticle {...featuredArticle} />
      </div>
      
      {/* Technology Trends Chart */}
      <div className="mb-8">
        <TechnologyTrendsChart />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {technologyArticles.map((article, index) => (
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

export default Technology;
