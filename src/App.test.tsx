import { describe, it, expect, vi } from 'vitest';
import { render, screen } from './test/utils';
import App from './App';

// Mock window.innerWidth for responsive tests
Object.defineProperty(window, 'innerWidth', {
  writable: true,
  configurable: true,
  value: 1200, // Default to desktop view
});

// Mock the components that might be complex to test
vi.mock('./components/RolesTabUI/RolesTabUI', () => ({
  default: () => <div data-testid="roles-tab-ui">Mocked RolesTabUI</div>,
}));

describe('App Component', () => {
  it('renders the header correctly', () => {
    render(<App />);
    expect(screen.getByText('Settings')).toBeInTheDocument();
    expect(screen.getByText('Manage your team preferrences here')).toBeInTheDocument();
  });

  it('renders the sidebar with menu items', () => {
    render(<App />);
    expect(screen.getByText('Untitled UI')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
  });

  it('shows the roles tab content by default', () => {
    render(<App />);
    expect(screen.getByTestId('roles-tab-ui')).toBeInTheDocument();
  });
});