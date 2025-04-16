
import React from 'react';
import NewsSectionLayout from '@/components/NewsSectionLayout';
import ArticleCard from '@/components/ArticleCard';
import HeroArticle from '@/components/HeroArticle';
import { Landmark } from 'lucide-react';

const Politics = () => {
  const featuredArticle = {
    title: "Landmark Voting Rights Legislation Passes After Marathon Session",
    subtitle: "New law expands access to polls and modernizes electoral systems nationwide",
    imageSrc: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Politics",
    author: "Victoria Blake",
    timeToRead: 6,
  };
  
  const politicsArticles = [
    {
      title: "Campaign Finance Reform Bill Gains Bipartisan Support",
      excerpt: "Legislation aims to reduce influence of special interest groups and increase transparency in political funding.",
      imageSrc: "https://images.unsplash.com/photo-1464692805480-a69dfaafdb0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Politics",
      author: "Robert Chen",
      timeToRead: 5,
    },
    {
      title: "Senate Committee Launches Investigation into Foreign Influence",
      excerpt: "Hearings scheduled to examine allegations of interference in domestic political processes by foreign actors.",
      imageSrc: "https://images.unsplash.com/photo-1569767101480-f003ce9d21bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1949&q=80",
      category: "Politics",
      author: "Amanda Winters",
      timeToRead: 7,
    },
    {
      title: "State Governors Form Coalition to Address Regional Economic Challenges",
      excerpt: "Bipartisan group pledges cooperation on infrastructure, job creation, and environmental protection.",
      imageSrc: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1926&q=80",
      category: "Politics",
      author: "Thomas Lee",
      timeToRead: 4,
    },
  ];
  
  return (
    <NewsSectionLayout 
      title="Politics" 
      icon={Landmark}
      description="Elections, legislation, governance, and the forces shaping policy decisions at home and abroad."
    >
      <div className="mb-8">
        <HeroArticle {...featuredArticle} />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {politicsArticles.map((article, index) => (
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

export default Politics;
