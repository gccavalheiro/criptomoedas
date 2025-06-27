import { describe, it, expect } from 'vitest';
import {
  formatCurrency,
  formatMarketCap,
  formatVolume,
  formatPercentage,
} from '../utils/currency';

describe('Currency utility functions', () => {
  describe('formatCurrency', () => {
    it('should format amounts >= 1 with 2 decimal places', () => {
      expect(formatCurrency(1234.5678)).toBe('$1,234.57');
      expect(formatCurrency(1.0)).toBe('$1.00');
      expect(formatCurrency(999999.99)).toBe('$999,999.99');
    });

    it('should format amounts < 1 with 6 decimal places', () => {
      expect(formatCurrency(0.123456)).toBe('$0.123456');
      expect(formatCurrency(0.000001)).toBe('$0.000001');
      expect(formatCurrency(0.999999)).toBe('$0.999999');
    });

    it('should handle zero', () => {
      expect(formatCurrency(0)).toBe('$0.000000');
    });

    it('should handle negative numbers', () => {
      expect(formatCurrency(-1234.56)).toBe('-$1,234.560000');
      expect(formatCurrency(-0.123456)).toBe('-$0.123456');
    });
  });

  describe('formatMarketCap', () => {
    it('should format trillions correctly', () => {
      expect(formatMarketCap(1.5e12)).toBe('$1.50T');
      expect(formatMarketCap(2.123e12)).toBe('$2.12T');
    });

    it('should format billions correctly', () => {
      expect(formatMarketCap(1.5e9)).toBe('$1.50B');
      expect(formatMarketCap(999e9)).toBe('$999.00B');
    });

    it('should format millions correctly', () => {
      expect(formatMarketCap(1.5e6)).toBe('$1.50M');
      expect(formatMarketCap(999e6)).toBe('$999.00M');
    });

    it('should format smaller numbers with locale string', () => {
      expect(formatMarketCap(1234567)).toBe('$1.23M');
      expect(['$1,000', '$1.000']).toContain(formatMarketCap(1000));
    });

    it('should handle undefined and null', () => {
      expect(formatMarketCap(undefined)).toBe('--');
      expect(formatMarketCap(null as never)).toBe('--');
    });

    it('should handle zero', () => {
      expect(formatMarketCap(0)).toBe('$0');
    });
  });

  describe('formatVolume', () => {
    it('should format trillions correctly', () => {
      expect(formatVolume(1.5e12)).toBe('$1.50T');
      expect(formatVolume(2.123e12)).toBe('$2.12T');
    });

    it('should format billions correctly', () => {
      expect(formatVolume(1.5e9)).toBe('$1.50B');
      expect(formatVolume(999e9)).toBe('$999.00B');
    });

    it('should format millions correctly', () => {
      expect(formatVolume(1.5e6)).toBe('$1.50M');
      expect(formatVolume(999e6)).toBe('$999.00M');
    });

    it('should format smaller numbers with locale string', () => {
      expect(formatVolume(1234567)).toBe('$1.23M');
      expect(['$1,000', '$1.000']).toContain(formatVolume(1000));
    });

    it('should handle undefined and null', () => {
      expect(formatVolume(undefined)).toBe('--');
      expect(formatVolume(null as never)).toBe('--');
    });

    it('should handle zero', () => {
      expect(formatVolume(0)).toBe('$0');
    });
  });

  describe('formatPercentage', () => {
    it('should format positive percentages correctly', () => {
      expect(formatPercentage(12.3456)).toBe('12.35%');
      expect(formatPercentage(0.123)).toBe('0.12%');
      expect(formatPercentage(100)).toBe('100.00%');
    });

    it('should format negative percentages correctly', () => {
      expect(formatPercentage(-12.3456)).toBe('-12.35%');
      expect(formatPercentage(-0.123)).toBe('-0.12%');
      expect(formatPercentage(-100)).toBe('-100.00%');
    });

    it('should handle zero', () => {
      expect(formatPercentage(0)).toBe('0.00%');
    });

    it('should handle undefined and null', () => {
      expect(formatPercentage(undefined)).toBe('--');
      expect(formatPercentage(null)).toBe('--');
    });

    it('should round to 2 decimal places', () => {
      expect(formatPercentage(12.345)).toBe('12.35%');
      expect(formatPercentage(12.344)).toBe('12.34%');
    });
  });
});
