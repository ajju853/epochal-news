
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import BreakingNews from '@/components/BreakingNews';
import Footer from '@/components/Footer';
import HeroArticle from '@/components/HeroArticle';
import ArticleCard from '@/components/ArticleCard';
import TrendingSection from '@/components/TrendingSection';
import WeatherWidget from '@/components/WeatherWidget';
import TimeTravel from '@/components/TimeTravel';
import { Clock, Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const Index = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  const featuredArticle = {
    title: "Historic Climate Agreement Reached as Nations Pledge Carbon Neutrality",
    subtitle: "Global powers unite to combat climate change with unprecedented commitments to reduce emissions and transition to renewable energy by 2040.",
    imageSrc: "https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2533&q=80",
    category: "World",
    author: "Eleanor Wright",
    timeToRead: 8,
  };
  
  const mainArticles = [
    {
      title: "Tech Breakthrough: New Quantum Computing Milestone",
      excerpt: "Scientists achieve quantum supremacy with a new processor capable of solving problems beyond the reach of traditional computers.",
      imageSrc: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Technology",
      author: "Marcus Chen",
      timeToRead: 5,
    },
    {
      title: "Economic Outlook: Markets React to Policy Shifts",
      excerpt: "Global markets show volatility as central banks announce new interest rate policies aimed at controlling inflation while supporting growth.",
      imageSrc: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Business",
      author: "Sophia Alvarez",
      timeToRead: 4,
    },
  ];
  
  const secondaryArticles = [
    {
      title: "Healthcare Revolution: AI Diagnostics Show Promising Results",
      excerpt: "New artificial intelligence system demonstrates unprecedented accuracy in early disease detection, potentially transforming preventative care.",
      category: "Health",
      author: "James Wilson",
      timeToRead: 6,
    },
    {
      title: "Cultural Renaissance: Global Arts Festival Returns",
      excerpt: "After a three-year hiatus, the International Arts Festival announces its return with its most diverse lineup of artists and performers yet.",
      category: "Arts",
      author: "Amara Johnson",
      timeToRead: 3,
    },
    {
      title: "Space Exploration: New Exoplanet Discovery",
      excerpt: "Astronomers identify potentially habitable exoplanet with atmosphere containing water vapor, marking a significant step in the search for extraterrestrial life.",
      category: "Science",
      author: "Thomas Lee",
      timeToRead: 7,
    },
  ];
  
  const opinionArticles = [
    {
      title: "The Future of Democracy in the Digital Age",
      excerpt: "As technology transforms how we communicate and consume information, we must reconsider how we protect democratic institutions.",
      author: "Prof. Diana Martinez",
      timeToRead: 8,
      category: "Opinion"
    },
    {
      title: "Rethinking Urban Design for Climate Resilience",
      excerpt: "Cities around the world need to fundamentally reimagine infrastructure to withstand increasingly extreme weather events.",
      author: "Dr. Robert Chen",
      timeToRead: 6,
      category: "Opinion"
    },
  ];
  
  const handleTimeChange = (newDate: Date) => {
    setCurrentDate(newDate);
    
    // In a real application, this would trigger content updates
    console.log(`Time travel to: ${newDate.toDateString()}`);
  };
  
  // Format current date for display
  const formattedDate = currentDate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <BreakingNews />
      
      <main className="flex-1 container px-4 md:px-6 py-8">
        {/* Time Travel Banner (when in past mode) */}
        {currentDate.getDate() !== new Date().getDate() && (
          <div className="bg-accent-red/10 border border-accent-red/20 text-accent-red rounded-lg p-4 mb-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Clock size={20} />
              <span>
                You're viewing EPOCHAL from <strong>{formattedDate}</strong>
              </span>
            </div>
            <Button 
              variant="outline" 
              size="sm"
              className="border-accent-red text-accent-red hover:bg-accent-red/10"
              onClick={() => setCurrentDate(new Date())}
            >
              Return to Present
            </Button>
          </div>
        )}
        
        {/* Hero Article */}
        <div className="mb-8">
          <HeroArticle {...featuredArticle} />
        </div>
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-newspaper gap-8">
          {/* Main Column */}
          <div className="space-y-8">
            {/* Top Stories Section */}
            <section>
              <h2 className="newspaper-subheading text-2xl font-bold mb-4 pb-2 border-b border-border flex items-center justify-between">
                <span>Top Stories</span>
                <span className="text-sm font-normal text-muted-foreground flex items-center">
                  <Calendar size={14} className="mr-1" /> {formattedDate}
                </span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {mainArticles.map((article, index) => (
                  <ArticleCard 
                    key={index} 
                    {...article} 
                    size="medium"
                  />
                ))}
              </div>
            </section>
            
            {/* Secondary Articles */}
            <section className="grid grid-cols-1 gap-6">
              {secondaryArticles.map((article, index) => (
                <div 
                  key={index}
                  className="paper-texture border border-border rounded-lg p-5 hover:shadow-md transition-all"
                >
                  <span className="text-xs font-bold uppercase tracking-wider text-accent-red mb-2 block">
                    {article.category}
                  </span>
                  
                  <h3 className="newspaper-heading text-xl font-bold mb-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{article.author}</span>
                    <span className="flex items-center">
                      <Clock size={14} className="mr-1 text-muted-foreground" /> {article.timeToRead} min read
                    </span>
                  </div>
                </div>
              ))}
            </section>
            
            {/* Opinions Section */}
            <section>
              <h2 className="newspaper-subheading text-2xl font-bold mb-4 pb-2 border-b border-border">
                Opinion & Analysis
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {opinionArticles.map((article, index) => (
                  <div 
                    key={index}
                    className="paper-texture border border-border rounded-lg p-5 hover:shadow-md transition-all"
                  >
                    <span className="text-xs font-bold uppercase tracking-wider text-accent-red mb-2 block">
                      {article.category}
                    </span>
                    
                    <h3 className="newspaper-heading text-xl font-bold mb-2">
                      "{article.title}"
                    </h3>
                    
                    <p className="text-muted-foreground mb-4">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="italic">By {article.author}</span>
                      <span className="flex items-center">
                        <Clock size={14} className="mr-1 text-muted-foreground" /> {article.timeToRead} min read
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 text-right">
                <Button 
                  variant="ghost"
                  size="sm"
                  className="text-accent-red hover:text-accent-red/80 flex items-center gap-1"
                >
                  More opinions <ArrowRight size={16} />
                </Button>
              </div>
            </section>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-6">
            <TrendingSection />
            <WeatherWidget />
            
            {/* From the Archives */}
            <div className="paper-texture border border-border p-4 md:p-6 rounded-lg">
              <header className="mb-4 pb-2 border-b border-border">
                <h3 className="newspaper-subheading font-bold text-xl">From the Archives</h3>
              </header>
              
              <div className="space-y-4">
                <div className="group">
                  <div className="text-xs text-muted-foreground mb-1">April 14, 2020</div>
                  <h4 className="text-base font-medium group-hover:text-accent-red transition-colors">Global Pandemic Transforms World Economy</h4>
                </div>
                
                <div className="group">
                  <div className="text-xs text-muted-foreground mb-1">April 14, 2015</div>
                  <h4 className="text-base font-medium group-hover:text-accent-red transition-colors">Historic Space Mission Reveals Planetary Discovery</h4>
                </div>
                
                <div className="group">
                  <div className="text-xs text-muted-foreground mb-1">April 14, 2010</div>
                  <h4 className="text-base font-medium group-hover:text-accent-red transition-colors">Tech Revolution: Smartphones Change Communication</h4>
                </div>
                
                <div className="text-center mt-6">
                  <Button variant="outline" size="sm">
                    Browse Archives
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Subscribe Banner */}
            <div className="paper-texture border border-border p-6 rounded-lg bg-gradient-to-br from-accent-red/5 to-background">
              <h3 className="newspaper-subheading font-bold text-xl mb-2">Subscribe to EPOCHAL Premium</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Gain access to exclusive content, historical archives, and special features.
              </p>
              <Button className="w-full bg-accent-red hover:bg-accent-red/90 text-white">
                Join Now
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      
      {/* Time Travel Component */}
      <TimeTravel onTimeChange={handleTimeChange} />
    </div>
  );
};

export default Index;
