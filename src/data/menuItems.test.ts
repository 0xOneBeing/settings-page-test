import { describe, it, expect } from 'vitest';
import { menuItems } from './menuItems';

describe('Menu Items Data', () => {
  it('should have the correct structure', () => {
    expect(Array.isArray(menuItems)).toBe(true);
    expect(menuItems.length).toBeGreaterThan(0);
    
    menuItems.forEach(item => {
      if (item) {
        expect(item).toHaveProperty('key');
        expect(item).toHaveProperty('icon');
        expect(item).toHaveProperty('label');
      }
    });
  });

  it('should include essential menu items', () => {
    const keys = menuItems.map(item => item?.key);
    expect(keys).toContain('home');
    expect(keys).toContain('dashboard');
    expect(keys).toContain('settings');
  });
});