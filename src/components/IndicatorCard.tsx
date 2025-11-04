import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDownRight, Info, TrendingUp } from 'lucide-react';
import { LineChart, Line, ResponsiveContainer, Tooltip as RechartsTooltip } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
import { EconomicIndicator, HistoricalDataPoint } from '@/lib/types';
import { useDashboardStore } from '@/store/dashboardStore';
import { subYears, parseISO } from 'date-fns';
import { DynamicIcon } from './DynamicIcon';
interface IndicatorCardProps {
  indicator: EconomicIndicator;
  index: number;
}
const changeTypeClasses = {
  positive: 'text-emerald-400',
  negative: 'text-red-400',
  neutral: 'text-gray-400',
};
const changeTypeIcons = {
  positive: <ArrowUpRight className="h-4 w-4" />,
  negative: <ArrowDownRight className="h-4 w-4" />,
  neutral: <TrendingUp className="h-4 w-4" />,
};
const filterDataByTimeRange = (data: HistoricalDataPoint[], range: string): HistoricalDataPoint[] => {
  if (range === 'All') return data;
  const now = new Date();
  let startDate: Date;
  if (range === '1Y') {
    startDate = subYears(now, 1);
  } else if (range === '5Y') {
    startDate = subYears(now, 5);
  } else {
    return data;
  }
  return data.filter(point => parseISO(point.date) >= startDate);
};
export function IndicatorCard({ indicator, index }: IndicatorCardProps) {
  const { title, value, change, changeType, description, source, sourceUrl, icon, historicalData } = indicator;
  const timeRange = useDashboardStore((state) => state.timeRange);
  const chartData = useMemo(() => filterDataByTimeRange(historicalData, timeRange), [historicalData, timeRange]);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <Card className="relative overflow-hidden bg-dashboard-card border-slate-700/50 shadow-lg hover:shadow-dashboard-accent/20 hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
        <DynamicIcon
          name={icon}
          className="absolute bottom-0 right-0 h-28 w-28 text-slate-500/10 -mr-4 -mb-4"
        />
        <div className="relative z-10 flex flex-col flex-grow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">{title}</CardTitle>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button className="text-gray-400 hover:text-white transition-colors">
                    <Info className="h-4 w-4" />
                  </button>
                </TooltipTrigger>
                <TooltipContent className="max-w-xs bg-slate-800 text-white border-slate-700">
                  <p className="font-bold">{description}</p>
                  <p className="text-xs text-gray-400 mt-2">
                    Source:{" "}
                    <a
                      href={sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-dashboard-accent transition-colors"
                    >
                      {source}
                    </a>
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </CardHeader>
          <CardContent className="flex flex-col flex-grow justify-between">
            <div>
              <div className="text-4xl font-display font-bold text-white">{value}</div>
              <div className={cn('text-xs flex items-center gap-1', changeTypeClasses[changeType])}>
                {changeTypeIcons[changeType]}
                <span>{change} vs previous period</span>
              </div>
            </div>
            <div className="h-20 w-full mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData} margin={{ top: 5, right: 10, left: 10, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(190 70% 40%)" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="hsl(190 70% 40%)" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <RechartsTooltip
                    contentStyle={{
                      backgroundColor: 'rgba(5, 10, 20, 0.8)',
                      borderColor: 'hsl(190 70% 40%)',
                      color: '#fff',
                      fontSize: '12px',
                      borderRadius: '0.5rem',
                    }}
                    itemStyle={{ color: '#fff' }}
                    labelStyle={{ display: 'none' }}
                  />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="hsl(190 70% 40%)"
                    strokeWidth={2}
                    dot={false}
                    activeDot={{ r: 4, className: 'fill-dashboard-accent' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </div>
      </Card>
    </motion.div>
  );
}
export function IndicatorCardSkeleton() {
  return (
    <Card className="bg-dashboard-card border-slate-700/50 shadow-lg h-full flex flex-col">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <Skeleton className="h-4 w-3/5" />
        <Skeleton className="h-4 w-4 rounded-full" />
      </CardHeader>
      <CardContent className="flex flex-col flex-grow justify-between">
        <div>
          <Skeleton className="h-10 w-1/2 mb-2" />
          <Skeleton className="h-3 w-4/5" />
        </div>
        <div className="h-20 w-full mt-4">
          <Skeleton className="h-full w-full" />
        </div>
      </CardContent>
    </Card>
  );
}