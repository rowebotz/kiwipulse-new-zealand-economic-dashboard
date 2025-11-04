export interface HistoricalDataPoint {
  date: string;
  value: number;
}
export type ChangeType = 'positive' | 'negative' | 'neutral';
export type IconName =
  | 'Banknote'
  | 'TrendingUp'
  | 'ShoppingCart'
  | 'UserMinus'
  | 'Landmark'
  | 'Users'
  | 'Shield'
  | 'DollarSign';
export interface EconomicIndicator {
  id: string;
  title: string;
  value: string;
  change: string;
  changeType: ChangeType;
  description: string;
  source: string;
  sourceUrl: string;
  icon: IconName;
  historicalData: HistoricalDataPoint[];
}