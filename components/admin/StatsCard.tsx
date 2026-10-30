import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: number | string;
  icon: LucideIcon;
  description?: string;
  trend?: string;
  trendUp?: boolean;
  color?: string;
}

export default function StatsCard({
  title,
  value,
  icon: Icon,
  description,
  trend,
  trendUp,
  color = '#1447e6',
}: StatsCardProps) {
  return (
    <div className='relative overflow-hidden rounded-xl border border-white/10 bg-[#111111] p-6 transition-all duration-200 hover:border-white/20'>
      {/* Subtle glow */}
      <div
        className='absolute -top-6 -right-6 h-24 w-24 rounded-full opacity-10 blur-2xl'
        style={{ backgroundColor: color }}
      />

      <div className='flex items-start justify-between'>
        <div>
          <p className='mb-1 text-xs font-medium tracking-wider text-[#969696] uppercase'>
            {title}
          </p>
          <p className='text-3xl font-bold text-white'>{value}</p>
          {description && <p className='mt-1 text-xs text-[#969696]'>{description}</p>}
          {trend && (
            <p
              className={`mt-2 text-xs font-medium ${trendUp ? 'text-green-400' : 'text-red-400'}`}
            >
              {trendUp ? '↑' : '↓'} {trend}
            </p>
          )}
        </div>

        <div
          className='flex h-11 w-11 items-center justify-center rounded-xl'
          style={{ backgroundColor: `${color}20` }}
        >
          <Icon size={20} style={{ color }} />
        </div>
      </div>
    </div>
  );
}
