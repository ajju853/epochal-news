import React, { useState } from 'react';
import {
  ChartContainer,
  ChartTooltipContent,
  ChartTooltip,
  ChartLegendContent,
  ChartLegend
} from './ui/chart';
import {
  LineChart,
  BarChart,
  PieChart,
  Line,
  Bar,
  Pie,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell,
  ResponsiveContainer
} from 'recharts';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card';
import { BarChart as BarChartIcon, LineChart as LineChartIcon, PieChart as PieChartIcon, Info } from 'lucide-react';

const trendingData = [
  { name: 'Jan', Exhibitions: 400, Performances: 240, Literature: 180, Digital: 100 },
  { name: 'Feb', Exhibitions: 300, Performances: 398, Literature: 200, Digital: 108 },
  { name: 'Mar', Exhibitions: 200, Performances: 300, Literature: 280, Digital: 208 },
  { name: 'Apr', Exhibitions: 278, Performances: 390, Literature: 190, Digital: 360 },
  { name: 'May', Exhibitions: 389, Performances: 480, Literature: 213, Digital: 287 },
  { name: 'Jun', Exhibitions: 349, Performances: 380, Literature: 291, Digital: 398 }
];

const visitorData = [
  { name: 'Modern Art', value: 4000 },
  { name: 'Classical', value: 3000 },
  { name: 'Photography', value: 2000 },
  { name: 'Digital', value: 2780 },
  { name: 'Performance', value: 1890 }
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#9888FE'];

const ArtsTrendingCharts: React.FC = () => {
  const [activeChart, setActiveChart] = useState('line');

  // Configuration for charts
  const chartConfig = {
    Exhibitions: { color: 'hsl(var(--accent-red))' },
    Performances: { color: 'hsl(240, 60%, 60%)' },
    Literature: { color: 'hsl(160, 60%, 40%)' },
    Digital: { color: 'hsl(40, 90%, 50%)' }
  };

  // Configuration for pie chart
  const pieChartConfig = {
    'Modern Art': { color: COLORS[0] },
    'Classical': { color: COLORS[1] },
    'Photography': { color: COLORS[2] },
    'Digital': { color: COLORS[3] },
    'Performance': { color: COLORS[4] }
  };

  return (
    <div className="paper-texture border border-border p-6 rounded-lg mb-8">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="newspaper-subheading text-xl md:text-2xl font-bold mb-1">Arts Engagement Trends</h3>
          <p className="text-muted-foreground text-sm">Analyzing popularity across different art forms</p>
        </div>
        
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <Info size={16} />
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="space-y-1">
              <h4 className="text-sm font-semibold">About This Data</h4>
              <p className="text-sm text-muted-foreground">
                These visualizations represent engagement metrics across various arts categories. 
                Data is collected from museum attendance, ticket sales, and online engagement.
              </p>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>
      
      <Tabs defaultValue="line" value={activeChart} onValueChange={setActiveChart} className="w-full">
        <TabsList className="grid grid-cols-3 mb-4">
          <TabsTrigger value="line" className="flex items-center gap-1">
            <LineChartIcon size={16} /> Trends
          </TabsTrigger>
          <TabsTrigger value="bar" className="flex items-center gap-1">
            <BarChartIcon size={16} /> Comparison
          </TabsTrigger>
          <TabsTrigger value="pie" className="flex items-center gap-1">
            <PieChartIcon size={16} /> Distribution
          </TabsTrigger>
        </TabsList>
        
        <div className="h-[350px] w-full">
          <TabsContent value="line" className="mt-0 h-full">
            <ChartContainer 
              config={chartConfig} 
              className="h-full w-full overflow-hidden"
            >
              <ResponsiveContainer width="99%" height="99%">
                <LineChart
                  data={trendingData}
                  margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                  <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                  <YAxis width={35} tick={{ fontSize: 12 }} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <ChartLegend content={<ChartLegendContent />} />
                  <Line 
                    type="monotone" 
                    dataKey="Exhibitions" 
                    stroke="var(--color-Exhibitions)" 
                    strokeWidth={2}
                    activeDot={{ r: 6, className: 'animate-pulse' }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="Performances" 
                    stroke="var(--color-Performances)" 
                    strokeWidth={2}
                    activeDot={{ r: 6, className: 'animate-pulse' }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="Literature" 
                    stroke="var(--color-Literature)" 
                    strokeWidth={2}
                    activeDot={{ r: 6, className: 'animate-pulse' }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="Digital" 
                    stroke="var(--color-Digital)" 
                    strokeWidth={2}
                    activeDot={{ r: 6, className: 'animate-pulse' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </TabsContent>
          
          <TabsContent value="bar" className="mt-0 h-full">
            <ChartContainer 
              config={chartConfig} 
              className="h-full w-full overflow-hidden"
            >
              <ResponsiveContainer width="99%" height="99%">
                <BarChart
                  data={trendingData}
                  margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                  <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                  <YAxis width={35} tick={{ fontSize: 12 }} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <ChartLegend content={<ChartLegendContent />} />
                  <Bar 
                    dataKey="Exhibitions" 
                    fill="var(--color-Exhibitions)" 
                    maxBarSize={30}
                    className="hover:opacity-80 transition-opacity"
                  />
                  <Bar 
                    dataKey="Performances" 
                    fill="var(--color-Performances)" 
                    maxBarSize={30}
                    className="hover:opacity-80 transition-opacity"
                  />
                  <Bar 
                    dataKey="Literature" 
                    fill="var(--color-Literature)" 
                    maxBarSize={30}
                    className="hover:opacity-80 transition-opacity"
                  />
                  <Bar 
                    dataKey="Digital" 
                    fill="var(--color-Digital)" 
                    maxBarSize={30}
                    className="hover:opacity-80 transition-opacity"
                  />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </TabsContent>
          
          <TabsContent value="pie" className="mt-0 h-full">
            <ChartContainer 
              config={pieChartConfig}
              className="h-full w-full overflow-hidden"
            >
              <ResponsiveContainer width="99%" height="99%">
                <PieChart>
                  <Pie
                    data={visitorData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={110}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {visitorData.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={COLORS[index % COLORS.length]} 
                        className="hover:opacity-90 transition-opacity cursor-pointer"
                      />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend formatter={(value) => <span className="text-xs">{value}</span>} />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
          </TabsContent>
        </div>
      </Tabs>

      <div className="mt-4 text-center text-xs text-muted-foreground">
        <div className="animate-pulse inline-block h-2 w-2 rounded-full bg-accent-red mr-1"></div>
        Live data updates every 24 hours • Last updated: April 14, 2025
      </div>
    </div>
  );
};

export default ArtsTrendingCharts;
