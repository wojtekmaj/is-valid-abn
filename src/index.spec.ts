import { describe, expect, it } from 'vitest';
import isValidABN from './index';

describe('isValidABN', () => {
  it('returns false for no input', () => {
    // @ts-expect-error-next-line
    const result = isValidABN();

    expect(result).toBe(false);
  });

  it('returns false for non-numeric input', () => {
    const result = isValidABN('xxelephants');

    expect(result).toBe(false);
  });

  it('returns false for partially numeric input', () => {
    const result = isValidABN('83914571673fox');

    expect(result).toBe(false);
  });

  it('returns false for partially numeric input', () => {
    const result = isValidABN('83914571673FOX');

    expect(result).toBe(false);
  });

  it('returns false for invalid input with invalid length', () => {
    const result = isValidABN('123');

    expect(result).toBe(false);
  });

  it('returns false for invalid input with valid length', () => {
    const result = isValidABN('12345678901');

    expect(result).toBe(false);
  });

  it('returns true for valid numeric input', () => {
    const result = isValidABN(83914571673);

    expect(result).toBe(true);
  });

  it('returns true for valid input', () => {
    const result = isValidABN('83914571673');

    expect(result).toBe(true);
  });

  it('returns true for valid input with spaces', () => {
    const result = isValidABN('83 914 571 673');

    expect(result).toBe(true);
  });

  it('returns true for valid input with dashes', () => {
    const result = isValidABN('83-914-571-673');

    expect(result).toBe(true);
  });
});
