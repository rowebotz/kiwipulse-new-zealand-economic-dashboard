import React, { useEffect } from 'react';
import { useDashboardStore } from '@/store/dashboardStore';
import { IndicatorCard, IndicatorCardSkeleton } from '@/components/IndicatorCard';
import { DashboardHeader } from '@/components/DashboardHeader';
import { AlertTriangle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
export function HomePage() {
  const fetchIndicators = useDashboardStore((state) => state.fetchIndicators);
  const indicators = useDashboardStore((state) => state.indicators);
  const loading = useDashboardStore((state) => state.loading);
  const error = useDashboardStore((state) => state.error);
  useEffect(() => {
    // Set dark theme on mount
    document.documentElement.classList.add('dark');
    fetchIndicators();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // fetchIndicators is stable from Zustand, so we only need to run this once.
  return (
    <div className="bg-dashboard-background min-h-screen text-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 md:py-10 lg:py-12">
          <DashboardHeader />
          {error && (
            <Alert variant="destructive" className="bg-red-900/50 border-red-500/50 text-red-200">
              <AlertTriangle className="h-4 w-4 !text-red-400" />
              <AlertTitle>Error Fetching Data</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {loading
              ? Array.from({ length: 8 }).map((_, index) => (
                  <IndicatorCardSkeleton key={index} />
                ))
              : indicators.map((indicator, index) => (
                  <IndicatorCard key={indicator.id} indicator={indicator} index={index} />
                ))}
          </div>
        </div>
      </main>
      <footer className="text-center py-6 text-sm text-gray-500">
        <p>Powered by the New Zealand Taxpayers' Union.</p>
      </footer>
    </div>
  );
}