import { cn } from '@/utils/cn';

type HeaderProps = React.HTMLAttributes<HTMLElement>;

function HeaderRoot(props: HeaderProps) {
  const { className, ...rest } = props;

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60',
        className
      )}
      {...rest}
    />
  );
}

type HeaderContentProps = React.HTMLAttributes<HTMLDivElement>;

function HeaderContent(props: HeaderContentProps) {
  const { className, ...rest } = props;

  return (
    <div
      className={cn('container mx-auto px-4 sm:px-6 lg:px-8', className)}
      {...rest}
    />
  );
}

type HeaderContentInnerProps = React.HTMLAttributes<HTMLDivElement>;

function HeaderContentInner(props: HeaderContentInnerProps) {
  const { className, ...rest } = props;

  return (
    <div
      className={cn('flex h-16 items-center gap-6 justify-between', className)}
      {...rest}
    />
  );
}

type HeaderLogoProps = React.HTMLAttributes<HTMLHeadingElement>;

function HeaderLogo(props: HeaderLogoProps) {
  const { className, ...rest } = props;
  return (
    <h2
      className={cn('text-sm font-bold text-foreground', className)}
      {...rest}
    />
  );
}

type HeaderNavigationProps = React.HTMLAttributes<HTMLElement>;

function HeaderNavigation(props: HeaderNavigationProps) {
  const { className, ...rest } = props;

  return <nav className={cn('flex items-center gap-6', className)} {...rest} />;
}

type HeaderActionsProps = React.HTMLAttributes<HTMLDivElement>;

function HeaderActions(props: HeaderActionsProps) {
  const { className, ...rest } = props;

  return <div className={cn('flex items-center gap-4', className)} {...rest} />;
}

export const Header = {
  Root: HeaderRoot,
  Content: HeaderContent,
  ContentInner: HeaderContentInner,
  Logo: HeaderLogo,
  Navigation: HeaderNavigation,
  Actions: HeaderActions,
};
