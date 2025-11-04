import React from 'react';
import {
  Banknote,
  TrendingUp,
  ShoppingCart,
  UserMinus,
  Landmark,
  Users,
  Shield,
  DollarSign,
  LucideProps,
} from 'lucide-react';
import { IconName } from '@/lib/types';
const iconMap: Record<IconName, React.ComponentType<LucideProps>> = {
  Banknote,
  TrendingUp,
  ShoppingCart,
  UserMinus,
  Landmark,
  Users,
  Shield,
  DollarSign,
};
interface DynamicIconProps extends LucideProps {
  name: IconName;
}
export function DynamicIcon({ name, ...props }: DynamicIconProps) {
  const IconComponent = iconMap[name];
  if (!IconComponent) {
    // Fallback icon or null
    return null;
  }
  return <IconComponent {...props} />;
}