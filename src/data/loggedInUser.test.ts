import { describe, it, expect } from 'vitest';
import { loggedInUser } from './loggedInUser';

describe('Logged In User Data', () => {
  it('should have the correct structure', () => {
    expect(loggedInUser).toHaveProperty('firstName');
    expect(loggedInUser).toHaveProperty('lastName');
    expect(loggedInUser).toHaveProperty('email');
    expect(loggedInUser).toHaveProperty('imageSrc');
    expect(loggedInUser).toHaveProperty('activeRoles');
  });

  it('should have valid user data', () => {
    expect(typeof loggedInUser.firstName).toBe('string');
    expect(typeof loggedInUser.lastName).toBe('string');
    expect(typeof loggedInUser.email).toBe('string');
    expect(typeof loggedInUser.imageSrc).toBe('string');
    expect(Array.isArray(loggedInUser.activeRoles)).toBe(true);
  });

  it('should have valid active roles', () => {
    loggedInUser.activeRoles.forEach(role => {
      expect(role).toHaveProperty('value');
      expect(role).toHaveProperty('label');
      expect(role).toHaveProperty('lastActive');
      expect(role).toHaveProperty('isActive');
      
      expect(typeof role.value).toBe('string');
      expect(typeof role.label).toBe('string');
      expect(typeof role.lastActive).toBe('string');
      expect(typeof role.isActive).toBe('boolean');
    });
  });
});