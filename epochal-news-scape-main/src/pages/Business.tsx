
import React from 'react';
import NewsSectionLayout from '@/components/NewsSectionLayout';
import ArticleCard from '@/components/ArticleCard';
import HeroArticle from '@/components/HeroArticle';
import { Briefcase } from 'lucide-react';

const Business = () => {
  const featuredArticle = {
    title: "Tech Industry Responds to New Regulatory Framework with Innovation Push",
    subtitle: "Leading companies announce investments in compliance systems while accelerating R&D efforts",
    imageSrc: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Business",
    author: "Sophia Alvarez",
    timeToRead: 5,
  };
  
  const businessArticles = [
    {
      title: "Global Supply Chain Disruptions Ease as New Logistics Networks Emerge",
      excerpt: "Companies report improved delivery times and reduced costs following implementation of AI-driven distribution systems.",
      imageSrc: "https://images.unsplash.com/photo-1493946740644-2d8a1f1a6aff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80",
      category: "Business",
      author: "Marcus Chen",
      timeToRead: 4,
    },
    {
      title: "Renewable Energy Sector Attracts Record Investment as Costs Decline",
      excerpt: "Institutional investors allocate unprecedented capital to solar and wind projects, citing improved returns and ESG considerations.",
      imageSrc: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Business",
      author: "Elena Rodriguez",
      timeToRead: 6,
    },
    {
      title: "Small Business Recovery Program Shows Promising Results in Urban Areas",
      excerpt: "Local economies benefit from targeted grants and technical assistance provided to neighborhood enterprises.",
      imageSrc: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Business",
      author: "David Washington",
      timeToRead: 3,
    },
    {
      title: "Banking Sector Embraces Digital Transformation with New Consumer Platforms",
      excerpt: "Traditional financial institutions partner with fintech startups to enhance customer experience and reduce operational costs.",
      imageSrc: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Business",
      author: "Jennifer Kim",
      timeToRead: 5,
    },
  ];
  
  return (
    <NewsSectionLayout 
      title="Business" 
      icon={Briefcase}
      description="Markets, companies, economics, and the forces driving global commerce and industry."
    >
      <div className="mb-8">
        <HeroArticle {...featuredArticle} />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {businessArticles.map((article, index) => (
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

export default Business;
