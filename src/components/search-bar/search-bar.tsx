'use client';

import { Loader2, Search, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchLogic } from './search-bar.hook';
import { cn } from '@/utils/cn';

interface SearchInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus: () => void;
  onClear: () => void;
  placeholder?: string;
  className?: string;
}

export function SearchInput({ ...props }: SearchInputProps) {
  const {
    value,
    onChange,
    onFocus,
    onClear,
    placeholder = 'Buscar criptomoeda...',
    className = '',
  } = props;

  return (
    <div className={`relative ${className}`}>
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        className="w-full pl-10 pr-10 py-2 border border-input bg-background text-foreground placeholder:text-muted-foreground rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background transition-colors"
        aria-label="Buscar criptomoeda"
      />
      {value && (
        <button
          onClick={onClear}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Limpar busca"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}

interface SearchResultItemProps {
  coin: {
    id: string;
    name: string;
    symbol: string;
    thumb: string;
    market_cap_rank?: number;
  };
  onClick: () => void;
}

export function SearchResultItem(props: SearchResultItemProps) {
  const { coin, onClick } = props;

  return (
    <Link
      href={`/coin/${coin.id}`}
      onClick={onClick}
      className="flex items-center p-3 hover:bg-accent hover:text-accent-foreground transition-colors focus:bg-accent focus:text-accent-foreground focus:outline-none"
    >
      <Image
        src={coin.thumb}
        alt={coin.name}
        width={32}
        height={32}
        className="w-8 h-8 rounded-full mr-3 object-cover"
        loading="lazy"
      />
      <div className="flex-1 min-w-0">
        <div className="font-medium text-foreground truncate">{coin.name}</div>
        <div className="text-sm text-muted-foreground">
          {coin.symbol.toUpperCase()}
        </div>
      </div>
      {coin.market_cap_rank && (
        <div className="text-sm text-muted-foreground ml-2">
          #{coin.market_cap_rank}
        </div>
      )}
    </Link>
  );
}

interface SearchItemResult {
  id: string;
  name: string;
  symbol: string;
  thumb: string;
  market_cap_rank?: number;
}

interface SearchResultsListProps {
  results: SearchItemResult[];
  onResultClick: () => void;
  className?: string;
}

export function SearchResultsList(props: SearchResultsListProps) {
  const { results, onResultClick, className } = props;

  return (
    <div
      className={cn(
        `bg-popover border border-border rounded-md shadow-lg z-50 max-h-96 overflow-y-auto `,
        className
      )}
    >
      {results.map(coin => (
        <SearchResultItem key={coin.id} coin={coin} onClick={onResultClick} />
      ))}
    </div>
  );
}

interface SearchLoadingProps {
  className?: string;
}

export function SearchLoading(props: SearchLoadingProps) {
  const { className } = props;

  return (
    <div
      className={cn(
        `p-4 text-center text-muted-foreground flex items-center justify-center gap-2`,
        className
      )}
    >
      <Loader2 className="w-4 h-4 animate-spin" />
      Buscando...
    </div>
  );
}

interface SearchEmptyProps {
  className?: string;
}

export function SearchEmpty(props: SearchEmptyProps) {
  const { className } = props;
  return (
    <div className={cn(`p-4 text-center text-muted-foreground, ${className}`)}>
      Nenhuma moeda encontrada
    </div>
  );
}

interface SearchDropdownProps {
  show: boolean;
  isLoading: boolean;
  results: Array<{
    id: string;
    name: string;
    symbol: string;
    thumb: string;
    market_cap_rank?: number;
  }>;
  query: string;
  onResultClick: () => void;
  className?: string;
}

export function SearchDropdown(props: SearchDropdownProps) {
  const { show, isLoading, results, query, onResultClick } = props;

  if (!show || (query.length < 2 && !isLoading)) {
    return null;
  }

  return (
    <div className={`absolute top-full left-0 right-0 mt-1`}>
      {isLoading ? (
        <SearchLoading />
      ) : results.length > 0 ? (
        <SearchResultsList results={results} onResultClick={onResultClick} />
      ) : query.length >= 2 ? (
        <SearchEmpty />
      ) : null}
    </div>
  );
}

interface SearchBarProps {
  children?: React.ReactNode;
}

export function SearchBar(props: SearchBarProps) {
  const { children } = props;

  const {
    query,
    showResults,
    isLoading,
    results,
    handleInputChange,
    handleResultClick,
    clearSearch,
    handleFocus,
  } = useSearchLogic();

  return (
    <div className="relative w-full max-w-md">
      <SearchInput
        value={query}
        onChange={handleInputChange}
        onFocus={handleFocus}
        onClear={clearSearch}
      />
      <SearchDropdown
        show={showResults}
        isLoading={isLoading}
        results={results}
        query={query}
        onResultClick={handleResultClick}
      />
      {children}
    </div>
  );
}
