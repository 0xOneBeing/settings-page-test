import { describe, it, expect } from 'vitest';
import { 
  UserTableItem, 
  AvailableRolesItem, 
  TabsItemsType, 
  LoggedInUserType 
} from './types';

describe('Type Definitions', () => {
  it('UserTableItem type should be correctly defined', () => {
    const userItem: UserTableItem = {
      key: '1',
      name: 'Super admin',
      type: 'DEFAULT',
      dateCreated: '2023-01-01',
      status: 'Active',
      roleUsers: ['https://example.com/avatar.jpg'],
      userCount: 5
    };
    
    expect(userItem.key).toBe('1');
    expect(userItem.name).toBe('Super admin');
    expect(userItem.type).toBe('DEFAULT');
    expect(userItem.status).toBe('Active');
    expect(userItem.roleUsers.length).toBe(1);
    expect(userItem.userCount).toBe(5);
  });

  it('AvailableRolesItem type should be correctly defined', () => {
    const roleItem: AvailableRolesItem = {
      value: 'super admin',
      label: 'Super admin',
      lastActive: '06/2023',
      isActive: true
    };
    
    expect(roleItem.value).toBe('super admin');
    expect(roleItem.label).toBe('Super admin');
    expect(roleItem.lastActive).toBe('06/2023');
    expect(roleItem.isActive).toBe(true);
  });

  it('LoggedInUserType should be correctly defined', () => {
    const user: LoggedInUserType = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      imageSrc: '/avatar.jpg',
      activeRoles: []
    };
    
    expect(user.firstName).toBe('John');
    expect(user.lastName).toBe('Doe');
    expect(user.email).toBe('john@example.com');
    expect(user.imageSrc).toBe('/avatar.jpg');
    expect(Array.isArray(user.activeRoles)).toBe(true);
  });
});