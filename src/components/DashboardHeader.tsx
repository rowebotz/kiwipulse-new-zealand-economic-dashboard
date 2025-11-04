import React from 'react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { useDashboardStore } from '@/store/dashboardStore';
import { format } from 'date-fns';
export function DashboardHeader() {
  const timeRange = useDashboardStore((state) => state.timeRange);
  const setTimeRange = useDashboardStore((state) => state.setTimeRange);
  return (
    <header className="mb-8 md:mb-10">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white">
            KiwiPulse
          </h1>
          <p className="mt-2 text-lg text-gray-400">
            New Zealand's Key Economic Indicators
          </p>
        </div>
        <div className="mt-4 md:mt-0 flex flex-col md:items-end space-y-2">
          <ToggleGroup
            type="single"
            value={timeRange}
            onValueChange={(value) => {
              if (value) setTimeRange(value);
            }}
            className="bg-dashboard-card border border-slate-700/50 rounded-lg p-1"
          >
            <ToggleGroupItem value="1Y" aria-label="1 Year" className="data-[state=on]:bg-dashboard-accent data-[state=on]:text-dashboard-background text-white hover:bg-slate-700/50">1Y</ToggleGroupItem>
            <ToggleGroupItem value="5Y" aria-label="5 Years" className="data-[state=on]:bg-dashboard-accent data-[state=on]:text-dashboard-background text-white hover:bg-slate-700/50">5Y</ToggleGroupItem>
            <ToggleGroupItem value="All" aria-label="All Time" className="data-[state=on]:bg-dashboard-accent data-[state=on]:text-dashboard-background text-white hover:bg-slate-700/50">All</ToggleGroupItem>
          </ToggleGroup>
          <p className="text-xs text-gray-500 text-right">
            Last updated: {format(new Date(), 'dd MMM yyyy, HH:mm')}
          </p>
        </div>
      </div>
    </header>
  );
}