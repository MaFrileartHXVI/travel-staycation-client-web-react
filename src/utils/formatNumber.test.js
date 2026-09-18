import { describe, it, expect } from 'vitest';
import formatNumber from './formatNumber';
describe('formatNumber utility', () => {
  it('should format number with id-ID locale correctly', () => {
    expect(formatNumber(1000)).toBe('1.000');
    expect(formatNumber(1000000)).toBe('1.000.000');
    expect(formatNumber(80000)).toBe('80.000');
  });
});