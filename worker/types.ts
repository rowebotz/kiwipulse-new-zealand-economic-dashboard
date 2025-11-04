export interface HistoricalDataPoint {
  date: string;
  value: number;
}
export type ChangeType = 'positive' | 'negative' | 'neutral';
export interface EconomicIndicator {
  id: string;
  title: string;
  value: string;
  change: string;
  changeType: ChangeType;
  description: string;
  source: string;
  historicalData: HistoricalDataPoint[];
}