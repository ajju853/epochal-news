
import React, { useState, useEffect } from 'react';
import { Volume, VolumeX } from 'lucide-react';
import { Button } from './ui/button';

const breakingNewsItems = [
  "🔥 Global Summit reaches historic climate agreement",
  "🚨 Major tech breakthrough in quantum computing announced",
  "⚡ Revolutionary clean energy solution unveiled at international conference",
  "💉 New breakthrough in medical research promises treatment for chronic conditions",
  "🏛️ Landmark legislation passes with bipartisan support",
  "🚀 Space agency announces plans for new deep space mission"
];

const BreakingNews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [characterIndex, setCharacterIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);

  const playTypewriterSound = () => {
    if (!soundEnabled) return;
    
    // This would be a real sound implementation with Web Audio API
    // For now we'll just simulate it
    console.log('Type sound played');
  };

  // Typewriter effect
  useEffect(() => {
    if (isPaused) return;
    
    const currentText = breakingNewsItems[currentIndex];
    
    if (characterIndex < currentText.length) {
      const timer = setTimeout(() => {
        setDisplayedText(currentText.substring(0, characterIndex + 1));
        setCharacterIndex(characterIndex + 1);
        playTypewriterSound();
      }, 50); // Speed of typing
      
      return () => clearTimeout(timer);
    } else {
      // When finished typing, wait and move to next news item
      const timer = setTimeout(() => {
        setCharacterIndex(0);
        setDisplayedText('');
        setCurrentIndex((prevIndex) => (prevIndex + 1) % breakingNewsItems.length);
      }, 3000); // Wait time before typing next news item
      
      return () => clearTimeout(timer);
    }
  }, [currentIndex, characterIndex, isPaused, soundEnabled]);

  const togglePause = () => {
    setIsPaused(!isPaused);
  };
  
  const toggleSound = () => {
    setSoundEnabled(!soundEnabled);
  };

  return (
    <div className="w-full bg-accent-red text-white py-2 md:py-3 relative overflow-hidden">
      <div className="container px-4 md:px-6 flex items-center">
        <div className="whitespace-nowrap font-bold mr-4">BREAKING:</div>
        <div className="flex-1 h-6 overflow-hidden">
          <p className="inline-block font-medium">
            {displayedText}
            <span className={`${isPaused ? 'opacity-0' : 'opacity-100'} inline-block h-4 w-0.5 bg-white ml-0.5 animate-cursor-blink`}></span>
          </p>
        </div>
        <div className="flex items-center space-x-2 ml-4">
          <Button 
            variant="ghost" 
            size="sm" 
            className="h-6 w-6 p-0 text-white hover:bg-white/20 rounded-full"
            onClick={toggleSound}
          >
            {soundEnabled ? <Volume size={14} /> : <VolumeX size={14} />}
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            className="h-6 w-6 p-0 text-white hover:bg-white/20 rounded-full"
            onClick={togglePause}
          >
            {isPaused ? "▶" : "⏸"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BreakingNews;
