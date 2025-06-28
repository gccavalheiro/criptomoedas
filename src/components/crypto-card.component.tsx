import { cn } from '@/utils/cn';
import Image from 'next/image';
import Link from 'next/link';

type CryptoCardProps = React.HTMLAttributes<HTMLDivElement>;

function CryptoCardRoot(props: CryptoCardProps) {
  const { className, ...rest } = props;

  return (
    <div
      className={cn(
        'group relative overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-all duration-200 hover:shadow-md hover:scale-[1.02] focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2',
        className
      )}
      {...rest}
    />
  );
}

type CryptoCardContentProps = React.HTMLAttributes<HTMLDivElement>;

function CryptoCardContent(props: CryptoCardContentProps) {
  const { className, ...rest } = props;

  return <div className={cn('p-6', className)} {...rest} />;
}

type GradientOverlayProps = React.HTMLAttributes<HTMLDivElement>;

function GradientOverlay(props: GradientOverlayProps) {
  const { className, ...rest } = props;

  return (
    <div
      className={cn(
        'absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100 pointer-events-none',
        className
      )}
      {...rest}
    />
  );
}

type CryptoCardLinkProps = React.ComponentProps<typeof Link>;

function CryptoCardLink(props: CryptoCardLinkProps) {
  const { className, ...rest } = props;
  return <Link className={cn('group', className)} {...rest} />;
}

type CryptoAvatarProps = React.HTMLAttributes<HTMLDivElement>;

function CryptoAvatar(props: CryptoAvatarProps) {
  const { className, ...rest } = props;

  return <div className={cn('relative', className)} {...rest} />;
}

type CryptoAvatarImageProps = React.ComponentProps<typeof Image>;

function CryptoAvatarImage(props: CryptoAvatarImageProps) {
  const { className, alt, ...rest } = props;

  return (
    <Image
      className={cn(
        'h-10 w-10 rounded-full object-cover ring-2 ring-border',
        className
      )}
      alt={alt ?? ''}
      {...rest}
    />
  );
}

type CryptoAvatarRankProps = React.HTMLAttributes<HTMLDivElement>;

function CryptoAvatarRank(props: CryptoAvatarRankProps) {
  const { className, ...rest } = props;

  return (
    <div
      className={cn(
        'absolute -top-2 -left-2 h-6 w-6 rounded-full bg-border text-foreground text-xs flex items-center justify-center font-bold',
        className
      )}
      {...rest}
    />
  );
}

type CryptoInfoProps = React.HTMLAttributes<HTMLDivElement>;

function CryptoInfo(props: CryptoInfoProps) {
  const { className, ...rest } = props;

  return <div className={cn('min-w-0 flex-1', className)} {...rest} />;
}

type CryptoNameProps = React.HTMLAttributes<HTMLHeadingElement>;

function CryptoName(props: CryptoNameProps) {
  const { className, ...rest } = props;

  return (
    <h3
      className={cn('font-semibold text-foreground truncate', className)}
      {...rest}
    />
  );
}

type CryptoSymbolProps = React.HTMLAttributes<HTMLParagraphElement>;

function CryptoSymbol(props: CryptoSymbolProps) {
  const { className, ...rest } = props;

  return (
    <p
      className={cn(
        'text-sm text-muted-foreground font-mono uppercase',
        className
      )}
      {...rest}
    />
  );
}

type CryptoCardHeaderProps = React.HTMLAttributes<HTMLDivElement>;

function CryptoCardHeader(props: CryptoCardHeaderProps) {
  const { className, ...rest } = props;

  return (
    <div
      className={cn('flex items-center justify-between mb-4', className)}
      {...rest}
    />
  );
}

type CryptoCardHeaderContentProps = React.HTMLAttributes<HTMLDivElement>;

function CryptoCardHeaderContent(props: CryptoCardHeaderContentProps) {
  const { className, ...rest } = props;

  return <div className={cn('flex items-center gap-3', className)} {...rest} />;
}

type CryptoCardBodyProps = React.HTMLAttributes<HTMLDivElement>;

function CryptoCardBody(props: CryptoCardBodyProps) {
  const { className, ...rest } = props;

  return <div className={cn('space-y-4', className)} {...rest} />;
}

type CryptoCardPriceProps = React.HTMLAttributes<HTMLDivElement>;

function CryptoCardPrice(props: CryptoCardPriceProps) {
  const { className, ...rest } = props;

  return (
    <div
      className={cn('text-2xl font-bold text-foreground', className)}
      {...rest}
    />
  );
}

type CryptoCardStatsProps = React.HTMLAttributes<HTMLDivElement>;

function CryptoCardStats(props: CryptoCardStatsProps) {
  const { className, ...rest } = props;

  return (
    <div
      className={cn('flex items-center justify-between', className)}
      {...rest}
    />
  );
}

type TrendIndicatorProps = React.HTMLAttributes<HTMLDivElement>;

function TrendIndicator(props: TrendIndicatorProps) {
  const { className, ...rest } = props;

  return <div className={cn('flex items-center gap-2', className)} {...rest} />;
}

type MarketCapContainerProps = React.HTMLAttributes<HTMLDivElement>;

function MarketCapContainer(props: MarketCapContainerProps) {
  const { className, ...rest } = props;

  return (
    <div
      className={cn('text-xs text-muted-foreground text-right', className)}
      {...rest}
    />
  );
}

type MarketCapTitleProps = React.HTMLAttributes<HTMLHeadingElement>;

function MarketCapTitle(props: MarketCapTitleProps) {
  const { className, ...rest } = props;

  return <h5 className={cn(className)} {...rest} />;
}

type MarketCapValueProps = React.HTMLAttributes<HTMLDivElement>;

function MarketCapValue(props: MarketCapValueProps) {
  const { className, ...rest } = props;

  return <div className={cn('font-medium', className)} {...rest} />;
}

export const CryptoCard = {
  Root: CryptoCardRoot,
  Content: CryptoCardContent,
  GradientOverlay: GradientOverlay,
  Link: CryptoCardLink,
  Header: CryptoCardHeader,
  HeaderContent: CryptoCardHeaderContent,
  Body: CryptoCardBody,
  Avatar: CryptoAvatar,
  AvatarImage: CryptoAvatarImage,
  AvatarRank: CryptoAvatarRank,
  Stats: CryptoCardStats,
  Name: CryptoName,
  Info: CryptoInfo,
  Price: CryptoCardPrice,
  Symbol: CryptoSymbol,
  MarketCap: MarketCapContainer,
  MarketCapTitle: MarketCapTitle,
  MarketCapValue: MarketCapValue,
  TrendIndicator: TrendIndicator,
};
