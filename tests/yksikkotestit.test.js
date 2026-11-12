import { describe, expect, it } from 'vitest';
import { statusLabel } from '../public/taskStore.js';

describe('statusLabel', () => {
  it('returns a readable label for a known task status', () => {
    expect(statusLabel('in-progress')).toBe('In progress');
  });
});