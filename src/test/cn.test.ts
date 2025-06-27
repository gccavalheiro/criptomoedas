import { describe, it, expect } from 'vitest';
import { cn } from '../utils/cn';

describe('cn utility function', () => {
  it('should merge class names correctly', () => {
    const result = cn('text-red-500', 'bg-blue-500', 'p-4');
    expect(result).toBe('text-red-500 bg-blue-500 p-4');
  });

  it('should handle conditional classes', () => {
    const isActive = true;
    const result = cn(
      'base-class',
      isActive && 'active-class',
      'always-present'
    );
    expect(result).toBe('base-class active-class always-present');
  });

  it('should handle false conditional classes', () => {
    const isActive = false;
    const result = cn(
      'base-class',
      isActive && 'active-class',
      'always-present'
    );
    expect(result).toBe('base-class always-present');
  });
});
