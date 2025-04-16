
import React, { useState } from 'react';
import { Calendar, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

interface TimeTravelProps {
  onTimeChange: (date: Date) => void;
}

const TimeTravel: React.FC<TimeTravelProps> = ({ onTimeChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [activeTab, setActiveTab] = useState<'recent' | 'decades' | 'century'>('recent');
  
  const decades = [
    { label: '2020s', year: 2020 },
    { label: '2010s', year: 2010 },
    { label: '2000s', year: 2000 },
    { label: '1990s', year: 1990 },
    { label: '1980s', year: 1980 },
    { label: '1970s', year: 1970 },
  ];
  
  const recentDates = [
    { label: 'Today', days: 0 },
    { label: 'Yesterday', days: 1 },
    { label: 'Last Week', days: 7 },
    { label: 'Last Month', days: 30 },
  ];
  
  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    onTimeChange(date);
    setIsOpen(false);
  };
  
  const getRelativeDate = (days: number) => {
    const date = new Date();
    date.setDate(date.getDate() - days);
    return date;
  };
  
  const getDecadeDate = (year: number) => {
    return new Date(`${year}-01-01`);
  };
  
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button 
        onClick={() => setIsOpen(!isOpen)} 
        className="flex items-center gap-2 bg-accent-red hover:bg-accent-red/90 text-white shadow-md"
      >
        <Clock size={16} />
        Time Travel
      </Button>
      
      {isOpen && (
        <div className="absolute bottom-full right-0 mb-2 w-64 bg-background paper-texture border border-border shadow-xl rounded-lg p-4 animate-in fade-in">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium">Travel to</h3>
            <Button 
              variant="ghost" 
              size="sm"
              className="h-7 w-7 p-0 rounded-full"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </Button>
          </div>
          
          <div className="flex border-b border-border mb-4">
            <button
              className={`flex-1 py-2 text-sm ${activeTab === 'recent' ? 'text-accent-red border-b-2 border-accent-red -mb-px' : 'text-muted-foreground'}`}
              onClick={() => setActiveTab('recent')}
            >
              Recent
            </button>
            <button
              className={`flex-1 py-2 text-sm ${activeTab === 'decades' ? 'text-accent-red border-b-2 border-accent-red -mb-px' : 'text-muted-foreground'}`}
              onClick={() => setActiveTab('decades')}
            >
              Decades
            </button>
            <button
              className={`flex-1 py-2 text-sm ${activeTab === 'century' ? 'text-accent-red border-b-2 border-accent-red -mb-px' : 'text-muted-foreground'}`}
              onClick={() => setActiveTab('century')}
            >
              Custom
            </button>
          </div>
          
          {activeTab === 'recent' && (
            <div className="space-y-1">
              {recentDates.map((item) => (
                <button
                  key={item.label}
                  className="flex items-center w-full p-2 text-sm hover:bg-muted rounded-md transition-colors"
                  onClick={() => handleDateSelect(getRelativeDate(item.days))}
                >
                  <Calendar size={14} className="mr-2" />
                  {item.label}
                </button>
              ))}
            </div>
          )}
          
          {activeTab === 'decades' && (
            <div className="space-y-1">
              {decades.map((decade) => (
                <button
                  key={decade.label}
                  className="flex items-center w-full p-2 text-sm hover:bg-muted rounded-md transition-colors"
                  onClick={() => handleDateSelect(getDecadeDate(decade.year))}
                >
                  <Clock size={14} className="mr-2" />
                  {decade.label}
                </button>
              ))}
            </div>
          )}
          
          {activeTab === 'century' && (
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <ChevronLeft size={20} className="text-muted-foreground" />
                <span className="text-center flex-1">
                  {selectedDate.toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </span>
                <ChevronRight size={20} className="text-muted-foreground" />
              </div>
              
              <div className="text-center text-sm text-muted-foreground">
                Choose a specific date using the calendar
              </div>
              
              <Button
                className="w-full bg-accent-red hover:bg-accent-red/90 text-white"
                onClick={() => handleDateSelect(selectedDate)}
              >
                Travel to This Date
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TimeTravel;
