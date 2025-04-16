
import React from 'react';
import { Cloud, CloudRain, Sun, CloudSun, Snowflake, Wind } from 'lucide-react';

interface WeatherData {
  day: string;
  condition: 'sunny' | 'partly-cloudy' | 'cloudy' | 'rainy' | 'snowy' | 'windy';
  temperature: number;
  precipitation: number;
}

const weatherData: WeatherData[] = [
  { day: 'Today', condition: 'partly-cloudy', temperature: 72, precipitation: 10 },
  { day: 'Tue', condition: 'sunny', temperature: 78, precipitation: 0 },
  { day: 'Wed', condition: 'rainy', temperature: 68, precipitation: 70 },
  { day: 'Thu', condition: 'cloudy', temperature: 65, precipitation: 30 },
  { day: 'Fri', condition: 'partly-cloudy', temperature: 70, precipitation: 20 },
];

const weatherIcons = {
  'sunny': Sun,
  'partly-cloudy': CloudSun,
  'cloudy': Cloud,
  'rainy': CloudRain,
  'snowy': Snowflake,
  'windy': Wind,
};

const WeatherWidget: React.FC = () => {
  return (
    <div className="paper-texture border border-border p-4 md:p-6 rounded-lg">
      <header className="mb-4 pb-2 border-b border-border">
        <h3 className="newspaper-subheading font-bold text-xl">Weather Forecast</h3>
      </header>
      
      <div className="space-y-4">
        {weatherData.map((data, index) => {
          const WeatherIcon = weatherIcons[data.condition];
          const isToday = index === 0;
          
          return (
            <div 
              key={data.day} 
              className={`flex items-center justify-between ${isToday ? 'bg-accent-red/5 p-2 rounded' : ''}`}
            >
              <div className="flex items-center gap-3">
                <WeatherIcon 
                  size={isToday ? 24 : 20} 
                  className={isToday ? 'text-accent-red' : 'text-muted-foreground'}
                />
                <div>
                  <p className={`font-medium ${isToday ? 'text-base' : 'text-sm'}`}>
                    {data.day}
                  </p>
                  {isToday && (
                    <p className="text-xs text-muted-foreground">
                      {data.precipitation}% precipitation
                    </p>
                  )}
                </div>
              </div>
              <div className="text-right">
                <p className={`font-bold ${isToday ? 'text-lg' : 'text-base'}`}>
                  {data.temperature}°F
                </p>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-4 pt-2 border-t border-border text-xs text-muted-foreground text-center">
        Weather data for New York City
      </div>
    </div>
  );
};

export default WeatherWidget;
