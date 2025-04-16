
import React from 'react';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// Sample data for technology trends
const trendData = [
  { month: 'Jan', ai: 65, cloud: 28, blockchain: 15, quantum: 5, cybersecurity: 45 },
  { month: 'Feb', ai: 70, cloud: 42, blockchain: 20, quantum: 8, cybersecurity: 48 },
  { month: 'Mar', ai: 78, cloud: 45, blockchain: 23, quantum: 12, cybersecurity: 52 },
  { month: 'Apr', ai: 95, cloud: 48, blockchain: 25, quantum: 15, cybersecurity: 56 },
  { month: 'May', ai: 115, cloud: 50, blockchain: 30, quantum: 20, cybersecurity: 58 },
  { month: 'Jun', ai: 135, cloud: 52, blockchain: 28, quantum: 28, cybersecurity: 62 },
  { month: 'Jul', ai: 150, cloud: 55, blockchain: 32, quantum: 35, cybersecurity: 65 },
  { month: 'Aug', ai: 180, cloud: 58, blockchain: 35, quantum: 42, cybersecurity: 68 },
];

const chartConfig = {
  ai: {
    label: 'AI & Machine Learning',
    theme: {
      light: '#9b87f5',
      dark: '#8B5CF6',
    },
  },
  cloud: {
    label: 'Cloud Computing',
    theme: {
      light: '#0EA5E9',
      dark: '#0EA5E9',
    },
  },
  blockchain: {
    label: 'Blockchain',
    theme: {
      light: '#F97316',
      dark: '#F97316',
    },
  },
  quantum: {
    label: 'Quantum Computing',
    theme: {
      light: '#8E9196',
      dark: '#6E59A5',
    },
  },
  cybersecurity: {
    label: 'Cybersecurity',
    theme: {
      light: '#1EAEDB',
      dark: '#33C3F0',
    },
  },
};

const TechnologyTrendsChart = () => {
  return (
    <Card className="paper-texture border border-border">
      <CardHeader>
        <CardTitle className="newspaper-heading text-xl">Technology Interest Trends</CardTitle>
        <CardDescription>Growth in research interest over the past 8 months</CardDescription>
      </CardHeader>
      <CardContent className="pt-4">
        <ChartContainer
          config={chartConfig}
          className="aspect-[4/3] w-full"
        >
          <AreaChart
            data={trendData}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => `${value}`}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  indicator="line"
                />
              }
            />
            <Area
              type="monotone"
              dataKey="ai"
              stackId="1"
              stroke="var(--color-ai)"
              fill="var(--color-ai)"
              fillOpacity={0.6}
            />
            <Area
              type="monotone"
              dataKey="cloud"
              stackId="2"
              stroke="var(--color-cloud)"
              fill="var(--color-cloud)"
              fillOpacity={0.6}
            />
            <Area
              type="monotone"
              dataKey="blockchain"
              stackId="3"
              stroke="var(--color-blockchain)"
              fill="var(--color-blockchain)"
              fillOpacity={0.6}
            />
            <Area
              type="monotone"
              dataKey="quantum"
              stackId="4"
              stroke="var(--color-quantum)"
              fill="var(--color-quantum)"
              fillOpacity={0.6}
            />
            <Area
              type="monotone"
              dataKey="cybersecurity"
              stackId="5"
              stroke="var(--color-cybersecurity)"
              fill="var(--color-cybersecurity)"
              fillOpacity={0.6}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default TechnologyTrendsChart;
