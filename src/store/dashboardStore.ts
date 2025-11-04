import { create } from 'zustand';
import { EconomicIndicator } from '@/lib/types';
import { mockIndicators } from '@/lib/mockData';
interface DashboardState {
  indicators: EconomicIndicator[];
  timeRange: string;
  loading: boolean;
  error: string | null;
  fetchIndicators: () => Promise<void>;
  setTimeRange: (range: string) => void;
}
export const useDashboardStore = create<DashboardState>((set) => ({
  indicators: [],
  timeRange: '1Y',
  loading: true,
  error: null,
  fetchIndicators: async () => {
    set({ loading: true, error: null });
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      set({ indicators: mockIndicators, loading: false });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      set({ error: errorMessage, loading: false });
    }
  },
  setTimeRange: (range: string) => set({ timeRange: range }),
}));