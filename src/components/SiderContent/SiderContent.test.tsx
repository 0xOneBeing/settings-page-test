import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '../../test/utils';
import SiderContent from './SiderContent';

// Mock the data
vi.mock('../../data/loggedInUser', () => ({
  loggedInUser: {
    firstName: 'Olivia',
    lastName: 'Rhye',
    email: 'olivia@untitledui.com',
    imageSrc: '/olivia-rhye.jpg',
    activeRoles: [],
  },
}));

vi.mock('../../data/menuItems', () => ({
  menuItems: [
    {
      key: 'home',
      label: 'Home',
    },
    {
      key: 'dashboard',
      label: 'Dashboard',
    },
  ],
}));

describe('SiderContent Component', () => {
  it('renders the brand logo and name', () => {
    render(<SiderContent />);
    expect(screen.getByText('Untitled UI')).toBeInTheDocument();
    expect(screen.getByAltText('brand-logo')).toBeInTheDocument();
  });

  it('renders the search input', () => {
    render(<SiderContent />);
    expect(screen.getByPlaceholderText('Olivia Rhye')).toBeInTheDocument();
  });

  it('renders the menu items', () => {
    render(<SiderContent />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
  });

  it('renders the new features section', () => {
    render(<SiderContent />);
    expect(screen.getByText('New features available!')).toBeInTheDocument();
    expect(screen.getByText('Check out the new dashboard view. Pages now load faster.')).toBeInTheDocument();
  });

  it('renders the user profile section', () => {
    render(<SiderContent />);
    expect(screen.getByText('Olivia Rhye')).toBeInTheDocument();
    expect(screen.getByText('olivia@untitledui.com')).toBeInTheDocument();
    expect(screen.getByAltText('Olivia Rhye')).toBeInTheDocument();
  });
});