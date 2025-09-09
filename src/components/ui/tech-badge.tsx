import { cn } from '@/lib/utils';

interface TechBadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent';
  className?: string;
}

export function TechBadge({ children, variant = 'primary', className }: TechBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105',
        {
          'bg-primary/20 text-primary border border-primary/30': variant === 'primary',
          'bg-secondary text-card-foreground border border-border': variant === 'secondary',
          'bg-accent/20 text-accent border border-accent/30': variant === 'accent',
        },
        className
      )}
    >
      {children}
    </span>
  );
}