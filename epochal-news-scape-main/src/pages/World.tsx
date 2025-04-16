
import React, { useState } from 'react';
import NewsSectionLayout from '@/components/NewsSectionLayout';
import ArticleCard from '@/components/ArticleCard';
import HeroArticle from '@/components/HeroArticle';
import { Globe } from 'lucide-react';
import TimeTravel from '@/components/TimeTravel';
import { Separator } from '@/components/ui/separator';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const World = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  const featuredArticle = {
    title: "Global Summit Addresses Climate Crisis with Unprecedented Commitments",
    subtitle: "World leaders agree on ambitious carbon reduction targets and financial support for vulnerable nations",
    imageSrc: "https://images.unsplash.com/photo-1552799446-159ba9523315?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "World",
    author: "Eleanor Wright",
    timeToRead: 7,
  };
  
  const worldArticles = [
    {
      title: "European Union Expands Renewable Energy Initiative Across Member States",
      excerpt: "New policy requires 50% renewable energy sources by 2035, with substantial funding for infrastructure development.",
      imageSrc: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "World",
      author: "Martin Fourier",
      timeToRead: 5,
    },
    {
      title: "Asia-Pacific Trade Agreement Signals New Era of Regional Cooperation",
      excerpt: "Fifteen nations sign landmark deal removing tariffs and establishing common standards across diverse economies.",
      imageSrc: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "World",
      author: "Akira Tanaka",
      timeToRead: 6,
    },
    {
      title: "Humanitarian Crisis Deepens as Conflict Zones Face Severe Food Shortages",
      excerpt: "UN agencies call for immediate international response as millions face hunger in war-torn regions.",
      imageSrc: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "World",
      author: "Sarah Johnson",
      timeToRead: 8,
    },
    {
      title: "Diplomatic Breakthrough: Historic Peace Accord Signed After Decades of Tension",
      excerpt: "Former adversaries agree to open borders, establish economic ties, and cooperate on regional security issues.",
      imageSrc: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "World",
      author: "Daniel Moreno",
      timeToRead: 7,
    },
  ];

  // World regions carousel data
  const worldRegions = [
    {
      name: "Europe",
      image: "https://images.unsplash.com/photo-1519677100203-a0e668c92439?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      stories: 42
    },
    {
      name: "Asia",
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      stories: 38
    },
    {
      name: "Americas",
      image: "https://images.unsplash.com/photo-1534398079543-7ae6d016b86a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      stories: 31
    },
    {
      name: "Africa",
      image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80",
      stories: 25
    },
    {
      name: "Middle East",
      image: "https://images.unsplash.com/photo-1586500036696-8642525b5a1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80",
      stories: 27
    },
    {
      name: "Oceania",
      image: "https://images.unsplash.com/photo-1589330273594-fade1ee91647?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      stories: 19
    },
  ];
  
  const handleTimeChange = (date: Date) => {
    setCurrentDate(date);
    // In a real app, this would fetch historical news from that date
  };
  
  return (
    <NewsSectionLayout 
      title="World News" 
      icon={Globe}
      description="Global events, international relations, and developments shaping our interconnected world."
    >
      <div className="mb-8">
        <HeroArticle {...featuredArticle} />
      </div>
      
      {/* World regions carousel */}
      <div className="mb-10 paper-texture border border-border p-4 rounded-lg">
        <h2 className="newspaper-subheading text-xl md:text-2xl font-bold mb-4">Explore World Regions</h2>
        <Carousel className="w-full">
          <CarouselContent>
            {worldRegions.map((region) => (
              <CarouselItem key={region.name} className="basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div className="p-1">
                  <div className="overflow-hidden rounded-lg border border-border hover:shadow-lg transition-shadow duration-300 cursor-pointer h-[200px] relative group">
                    <img 
                      src={region.image} 
                      alt={region.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                      <h3 className="text-white font-bold text-lg">{region.name}</h3>
                      <p className="text-white/80 text-sm">{region.stories} stories</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:flex">
            <CarouselPrevious className="ml-10" />
            <CarouselNext className="mr-10" />
          </div>
        </Carousel>
      </div>
      
      {/* Main articles grid */}
      <div className="paper-texture border border-border p-6 rounded-lg mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="newspaper-subheading text-xl md:text-2xl font-bold">Latest Stories</h2>
          <div className="text-sm text-muted-foreground">
            {currentDate.toLocaleDateString('en-US', { 
              month: 'long', 
              day: 'numeric', 
              year: 'numeric' 
            })}
          </div>
        </div>
        <Separator className="mb-6" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {worldArticles.map((article, index) => (
            <ArticleCard 
              key={index} 
              {...article}
              size="medium"
            />
          ))}
        </div>
      </div>
      
      {/* Add trending section */}
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="w-full md:w-2/3 paper-texture border border-border p-6 rounded-lg">
          <h3 className="newspaper-subheading text-xl font-bold mb-4">Global Perspectives</h3>
          <div className="prose max-w-none">
            <p className="mb-4 text-muted-foreground">
              As international events continue to unfold, our correspondents bring you diverse perspectives from around the globe. 
              Follow our coverage of emerging stories and their impact on global relations, economies, and societies.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
              <div className="flex items-center gap-3 p-3 border border-border rounded-lg hover:bg-secondary transition-colors">
                <div className="text-2xl font-bold text-accent-red">01</div>
                <div>
                  <h4 className="font-medium">Climate Diplomacy</h4>
                  <p className="text-xs text-muted-foreground">Rising tensions over emission targets</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 border border-border rounded-lg hover:bg-secondary transition-colors">
                <div className="text-2xl font-bold text-accent-red">02</div>
                <div>
                  <h4 className="font-medium">Digital Governance</h4>
                  <p className="text-xs text-muted-foreground">Nations debate data sovereignty</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 border border-border rounded-lg hover:bg-secondary transition-colors">
                <div className="text-2xl font-bold text-accent-red">03</div>
                <div>
                  <h4 className="font-medium">Economic Blocs</h4>
                  <p className="text-xs text-muted-foreground">New alliances reshaping trade</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 border border-border rounded-lg hover:bg-secondary transition-colors">
                <div className="text-2xl font-bold text-accent-red">04</div>
                <div>
                  <h4 className="font-medium">Cultural Exchange</h4>
                  <p className="text-xs text-muted-foreground">Diplomacy through arts initiatives</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-full md:w-1/3">
          <div className="paper-texture border border-border p-6 rounded-lg h-full">
            <h3 className="newspaper-subheading text-xl font-bold mb-4">World Factbook</h3>
            <div className="space-y-4">
              <div className="text-sm">
                <div className="font-medium">Most Visited Countries</div>
                <div className="mt-2 space-y-2">
                  <div className="flex justify-between items-center">
                    <span>France</span>
                    <div className="w-1/2 bg-secondary rounded-full h-2">
                      <div className="bg-accent-red h-2 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Spain</span>
                    <div className="w-1/2 bg-secondary rounded-full h-2">
                      <div className="bg-accent-red h-2 rounded-full" style={{ width: '82%' }}></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>USA</span>
                    <div className="w-1/2 bg-secondary rounded-full h-2">
                      <div className="bg-accent-red h-2 rounded-full" style={{ width: '79%' }}></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>China</span>
                    <div className="w-1/2 bg-secondary rounded-full h-2">
                      <div className="bg-accent-red h-2 rounded-full" style={{ width: '66%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <Separator className="my-4" />
              
              <div className="text-sm">
                <div className="font-medium">Languages by Speakers</div>
                <div className="mt-2 grid grid-cols-2 gap-2">
                  <div className="flex flex-col items-center p-2 border border-border rounded-md">
                    <span className="text-lg font-bold">1.1B+</span>
                    <span className="text-xs text-muted-foreground">Mandarin</span>
                  </div>
                  <div className="flex flex-col items-center p-2 border border-border rounded-md">
                    <span className="text-lg font-bold">460M+</span>
                    <span className="text-xs text-muted-foreground">Spanish</span>
                  </div>
                  <div className="flex flex-col items-center p-2 border border-border rounded-md">
                    <span className="text-lg font-bold">379M+</span>
                    <span className="text-xs text-muted-foreground">English</span>
                  </div>
                  <div className="flex flex-col items-center p-2 border border-border rounded-md">
                    <span className="text-lg font-bold">341M+</span>
                    <span className="text-xs text-muted-foreground">Hindi</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Add the TimeTravel component */}
      <TimeTravel onTimeChange={handleTimeChange} />
    </NewsSectionLayout>
  );
};

export default World;
