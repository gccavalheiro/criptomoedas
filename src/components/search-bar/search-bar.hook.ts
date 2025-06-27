import { useSearchCoins } from '@/services/api';
import React from 'react';

export function useSearchLogic() {
  const [query, setQuery] = React.useState('');
  const [showResults, setShowResults] = React.useState(false);

  const { data: searchData, isLoading } = useSearchCoins(query);
  const results = searchData?.coins?.slice(0, 10) || [];

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setShowResults(true);
    setQuery(value);
  }

  const handleResultClick = () => {
    setShowResults(false);
    setQuery('');
  };

  const clearSearch = () => {
    setQuery('');
    setShowResults(false);
  };

  const handleFocus = () => {
    setShowResults(true);
  };

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
