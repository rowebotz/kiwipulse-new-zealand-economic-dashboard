import { EconomicIndicator } from './types';
const generateHistoricalData = (base: number, points: number, volatility: number) => {
  const data = [];
  let currentValue = base;
  for (let i = 0; i < points; i++) {
    const date = new Date();
    date.setMonth(date.getMonth() - (points - i));
    currentValue += (Math.random() - 0.5) * volatility;
    data.push({ date: date.toISOString().split('T')[0], value: parseFloat(currentValue.toFixed(2)) });
  }
  return data;
};
export const mockIndicators: EconomicIndicator[] = [
  {
    id: 'ocr',
    title: 'Official Cash Rate (OCR)',
    value: '5.50%',
    change: '+0.00%',
    changeType: 'neutral',
    description: 'The Official Cash Rate (OCR) is the interest rate set by the Reserve Bank of New Zealand to meet its inflation targets.',
    source: 'Reserve Bank of New Zealand (RBNZ)',
    sourceUrl: 'https://www.rbnz.govt.nz/statistics/key-graphs/key-graph-official-cash-rate',
    historicalData: generateHistoricalData(5.5, 60, 0.05),
  },
  {
    id: 'gdp',
    title: 'GDP Growth (Quarterly)',
    value: '-0.1%',
    change: '-0.2%',
    changeType: 'negative',
    description: 'Gross Domestic Product (GDP) measures the total value of goods and services produced in New Zealand.',
    source: 'Stats NZ',
    sourceUrl: 'https://www.stats.govt.nz/indicators/gross-domestic-product-gdp/',
    historicalData: generateHistoricalData(0.2, 60, 0.3),
  },
  {
    id: 'cpi',
    title: 'CPI Inflation (Annual)',
    value: '4.0%',
    change: '-0.7%',
    changeType: 'positive', // Lower inflation is generally positive
    description: 'The Consumer Price Index (CPI) measures the average change in prices for a basket of consumer goods and services.',
    source: 'Stats NZ',
    sourceUrl: 'https://www.stats.govt.nz/indicators/consumers-price-index-cpi/',
    historicalData: generateHistoricalData(4.5, 60, 0.4),
  },
  {
    id: 'unemployment',
    title: 'Unemployment Rate',
    value: '4.3%',
    change: '+0.3%',
    changeType: 'negative', // Higher unemployment is negative
    description: 'The percentage of the total labor force that is jobless and actively seeking employment.',
    source: 'Stats NZ',
    sourceUrl: 'https://www.stats.govt.nz/indicators/unemployment-rate/',
    historicalData: generateHistoricalData(4.0, 60, 0.2),
  },
  {
    id: 'current_account',
    title: 'Current Account (Annual)',
    value: '-$27.8B',
    change: '+$2.4B',
    changeType: 'positive', // A smaller deficit is an improvement
    description: 'The current account balance measures the flow of goods, services, and investments into and out of the country.',
    source: 'Stats NZ',
    sourceUrl: 'https://www.stats.govt.nz/indicators/balance-of-payments-and-international-investment-position/',
    historicalData: generateHistoricalData(-30, 60, 1.5),
  },
  {
    id: 'labour_participation',
    title: 'Labour Force Participation',
    value: '71.5%',
    change: '-0.4%',
    changeType: 'negative',
    description: 'The percentage of the working-age population that is either employed or actively looking for work.',
    source: 'Stats NZ',
    sourceUrl: 'https://www.stats.govt.nz/indicators/labour-force-participation-rate/',
    historicalData: generateHistoricalData(72, 60, 0.3),
  },
  {
    id: 'debt_to_gdp',
    title: 'Govt. Debt to GDP',
    value: '43.5%',
    change: '+1.2%',
    changeType: 'negative',
    description: 'The ratio of gross government debt to the country\'s Gross Domestic Product (GDP).',
    source: 'The Treasury',
    sourceUrl: 'https://www.treasury.govt.nz/publications/data/government-debt-data',
    historicalData: generateHistoricalData(42, 60, 0.8),
  },
  {
    id: 'exchange_rate',
    title: 'NZD/USD Exchange Rate',
    value: '0.6130',
    change: '-0.0015',
    changeType: 'negative',
    description: 'The value of the New Zealand Dollar compared to the United States Dollar.',
    source: 'Reserve Bank of New Zealand (RBNZ)',
    sourceUrl: 'https://www.rbnz.govt.nz/statistics/key-graphs/key-graph-exchange-rates',
    historicalData: generateHistoricalData(0.61, 60, 0.005),
  },
];