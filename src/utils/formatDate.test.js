import { describe, it, expect } from 'vitest';
import formatDate from './formatDate';
describe('formatDate utility', () => {
  it('should format date correctly to DD MMM', () => {
    const date = new Date('2020-09-09');
    expect(formatDate(date)).toBe('09 Sep');
  });
});