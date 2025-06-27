import { cn } from '@/utils/cn';

type ThemeSelectorRootProps = React.HTMLAttributes<HTMLDivElement>;

function ThemeSelectorRoot(props: ThemeSelectorRootProps) {
  const { className, ...rest } = props;

  return <div className={cn('flex items-center gap-4', className)} {...rest} />;
}

type ThemeSelectorIconProps = React.HTMLAttributes<HTMLDivElement>;

function ThemeSelectorIcon(props: ThemeSelectorIconProps) {
  const { className, ...rest } = props;

  return (
    <div
      className={cn(
        'w-5 h-5 min-w-5 min-h-5 flex items-center justify-center',
        className
      )}
      {...rest}
    />
  );
}

type ThemeSelectorButtonProps = React.HTMLAttributes<HTMLButtonElement>;

function ThemeSelectorButton(props: ThemeSelectorButtonProps) {
  const { className, ...rest } = props;

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10',
        className
      )}
      {...rest}
    />
  );
}

export const ThemeSelector = {
  Root: ThemeSelectorRoot,
  Icon: ThemeSelectorIcon,
  Button: ThemeSelectorButton,
};
