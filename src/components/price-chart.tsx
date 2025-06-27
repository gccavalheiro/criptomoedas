'use client';

import { MarketChartData } from '@/types/crypto';
import { formatCurrency } from '@/utils/currency';
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{ value: number }>;
  label?: string;
  formatPrice?: (value: number) => string;
}

export function CustomTooltip(props: CustomTooltipProps) {
  const { active, payload, label, formatPrice = formatCurrency } = props;

  if (active && payload && payload.length) {
    return (
      <div className="bg-popover border border-border rounded-md shadow-lg p-3">
        <p className="text-popover-foreground font-medium">{label}</p>
        <p className="text-primary">Preço: {formatPrice(payload[0].value)}</p>
      </div>
    );
  }
  return null;
}

interface PriceLineChartProps {
  data: Array<{
    date: string;
    price: number;
    timestamp: number;
  }>;
}

export function PriceLineChart(props: PriceLineChartProps) {
  const { data } = props;

  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
          <XAxis
            dataKey="date"
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={value => formatCurrency(value)}
          />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="price"
            stroke="hsl(var(--primary))"
            strokeWidth={2}
            dot={false}
            activeDot={{
              r: 4,
              fill: 'hsl(var(--primary))',
              stroke: 'hsl(var(--background))',
              strokeWidth: 2,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

interface PriceChartHeaderProps {
  children?: React.ReactNode;
}

export function PriceChartHeader(props: PriceChartHeaderProps) {
  const { children } = props;

  return (
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-lg font-semibold text-foreground">
        Preço dos últimos 7 dias
      </h3>
      {children}
    </div>
  );
}

export const useChartData = (data: MarketChartData) => {
  const chartData = data.prices.map(([timestamp, price]) => ({
    date: new Date(timestamp).toLocaleDateString('pt-BR', {
      month: 'short',
      day: 'numeric',
    }),
    price: price,
    timestamp: timestamp,
  }));

  return chartData;
};

interface PriceChartProps {
  data: MarketChartData;
  children?: React.ReactNode;
  className?: string;
}

export function PriceChartRoot(props: PriceChartProps) {
  const { data, children } = props;
  const chartData = useChartData(data);

  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
      <PriceChartHeader>{children}</PriceChartHeader>
      <PriceLineChart data={chartData} />
    </div>
  );
}

interface PriceChartCompleteProps {
  data: MarketChartData;
}

export function PriceChart(props: PriceChartCompleteProps) {
  const { data } = props;

  return <PriceChartRoot data={data} />;
}
