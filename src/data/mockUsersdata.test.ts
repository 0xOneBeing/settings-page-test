import { describe, it, expect } from 'vitest';
import { usersTable } from './mockUsersdata';

describe('Mock Users Data', () => {
  it('should have the correct structure', () => {
    expect(Array.isArray(usersTable)).toBe(true);
    expect(usersTable.length).toBeGreaterThan(0);
    
    const firstUser = usersTable[0];
    expect(firstUser).toHaveProperty('key');
    expect(firstUser).toHaveProperty('name');
    expect(firstUser).toHaveProperty('type');
    expect(firstUser).toHaveProperty('dateCreated');
    expect(firstUser).toHaveProperty('status');
    expect(firstUser).toHaveProperty('roleUsers');
    expect(firstUser).toHaveProperty('userCount');
  });

  it('should have valid user data', () => {
    usersTable.forEach(user => {
      expect(typeof user.key).toBe('string');
      expect(typeof user.name).toBe('string');
      expect(['DEFAULT', 'CUSTOM', 'SYSTEM-CUSTOM']).toContain(user.type);
      expect(['Active', 'Inactive']).toContain(user.status);
      expect(Array.isArray(user.roleUsers)).toBe(true);
      expect(typeof user.userCount).toBe('number');
    });
  });
});