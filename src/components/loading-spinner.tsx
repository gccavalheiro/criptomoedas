import { Loader2 } from 'lucide-react';
import { cn } from '@/utils/cn';

type LoadingSpinnerProps = React.HTMLAttributes<HTMLDivElement> & {
  size?: number;
};

export function LoadingSpinner(props: LoadingSpinnerProps) {
  const { size = 24, className, ...rest } = props;

  return (
    <div
      className={cn('flex justify-center items-center', className)}
      {...rest}
    >
      <Loader2 size={size} className="animate-spin text-primary" />
    </div>
  );
}
