import { create } from 'zustand';
import { EconomicIndicator } from '@/lib/types';
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
      const response = await fetch('/api/indicators');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      if (result.success) {
        set({ indicators: result.data, loading: false });
      } else {
        throw new Error(result.error || 'Failed to fetch indicators');
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      console.error("Failed to fetch indicators:", errorMessage);
      set({ error: `Failed to load data from the server. ${errorMessage}`, loading: false });
    }
  },
  setTimeRange: (range: string) => set({ timeRange: range }),
}));