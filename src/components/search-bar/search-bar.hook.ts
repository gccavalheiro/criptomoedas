import { useSearchCoins } from '@/services/api';
import React from 'react';

export function useSearchLogic() {
  const [query, setQuery] = React.useState('');
  const [showResults, setShowResults] = React.useState(false);

  const { data: searchData, isLoading } = useSearchCoins(query);
  
  const results = React.useMemo(
    () => searchData?.coins?.slice(0, 10) || [],
    [searchData]
  );

  const handleInputChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setShowResults(true);
      setQuery(value);
    },
    []
  );

  const handleResultClick = React.useCallback(() => {
    setShowResults(false);
    setQuery('');
  }, []);

  const clearSearch = React.useCallback(() => {
    setQuery('');
    setShowResults(false);
  }, []);

  const handleFocus = React.useCallback(() => {
    setShowResults(true);
  }, []);

  return React.useMemo(
    () => ({
      isLoading,
      query,
      results,
      showResults,
      clearSearch,
      handleFocus,
      handleInputChange,
      handleResultClick,
    }),
    [
      isLoading,
      query,
      results,
      showResults,
      clearSearch,
      handleFocus,
      handleInputChange,
      handleResultClick,
    ]
  );
}
