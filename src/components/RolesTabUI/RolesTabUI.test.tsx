import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '../../test/utils';
import RolesTabUI from './RolesTabUI';

// Mock window.innerWidth for responsive tests
Object.defineProperty(window, 'innerWidth', {
  writable: true,
  configurable: true,
  value: 1200, // Default to desktop view
});

// Mock the data
vi.mock('../../data/mockUsersdata', () => ({
  usersTable: [
    {
      key: '1',
      name: 'Super admin',
      type: 'DEFAULT',
      dateCreated: 'Jan 1, 2023',
      status: 'Active',
      roleUsers: ['https://example.com/avatar1.jpg'],
      userCount: 6,
    },
  ],
}));

vi.mock('../../data/loggedInUser', () => ({
  loggedInUser: {
    firstName: 'Olivia',
    lastName: 'Rhye',
    email: 'olivia@untitledui.com',
    imageSrc: '/olivia-rhye.jpg',
    activeRoles: [
      {
        value: 'super admin',
        label: 'Super admin',
        lastActive: '06/2023',
        isActive: true,
      },
    ],
  },
}));

describe('RolesTabUI Component', () => {
  it('renders the component header correctly', () => {
    render(<RolesTabUI />);
    expect(screen.getByText('User Roles')).toBeInTheDocument();
    expect(screen.getByText('Update user roles, details, and informaton')).toBeInTheDocument();
  });

  it('renders the email connection options', () => {
    render(<RolesTabUI />);
    expect(screen.getByText('Connect email')).toBeInTheDocument();
    expect(screen.getByText('My account email')).toBeInTheDocument();
    expect(screen.getByText('An alternative email')).toBeInTheDocument();
  });

  it('renders the active role section', () => {
    render(<RolesTabUI />);
    expect(screen.getByText('Active role')).toBeInTheDocument();
    expect(screen.getByText('Select active role available to the user')).toBeInTheDocument();
  });

  it('renders the table with user roles', () => {
    render(<RolesTabUI />);
    expect(screen.getByText('Super admin')).toBeInTheDocument();
  });
});