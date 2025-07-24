# Settings Page Test

A modern React application built with TypeScript, Vite, and Ant Design featuring a responsive settings dashboard with user role management.

## 🚀 Demo

[View Live Demo](https://settings-page-test.vercel.app/)

## 🛠️ Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Ant Design** - UI components
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Vitest** - Testing framework

## 📁 Project Structure

```
src/
├── components/
│   ├── RolesTabUI/          # User roles management component
│   └── SiderContent/        # Sidebar navigation component
├── data/
│   ├── loggedInUser.tsx     # Current user data
│   ├── menuItems.tsx        # Navigation menu items
│   └── mockUsersdata.tsx    # Mock user table data
├── types/
│   └── types.tsx            # TypeScript type definitions
└── test/
    ├── setup.ts             # Test configuration
    └── utils.tsx            # Test utilities
```

## ✨ Features

- **Responsive Design** - Mobile-first approach with drawer navigation
- **User Role Management** - Dynamic role selection and management
- **Data Tables** - Sortable tables with user role information
- **Theme Support** - Consistent design system with CSS variables
- **Type Safety** - Full TypeScript implementation
- **Testing** - Comprehensive test coverage with Vitest

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone <repository-url>
cd settings-page-test
```

2. Install dependencies

```bash
npm install
```

3. Start development server

```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173)

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Generate test coverage report

## 🧪 Testing

The project includes comprehensive tests for:

- Components (App, RolesTabUI, SiderContent)
- Data structures and types
- Mock data validation

Run tests with:

```bash
npm test
```

## 🎨 Key Components

### RolesTabUI

- User role management interface
- Email connection settings
- Active role selection with dynamic data
- Sortable user roles table

### SiderContent

- Navigation sidebar
- User profile display
- Dismissible feature announcements
- Responsive drawer for mobile

## 📱 Responsive Features

- **Desktop**: Full sidebar navigation
- **Mobile**: Collapsible drawer with menu button
- **Adaptive**: Components adjust to screen size automatically

## 🔧 Configuration

The project uses:

- **Vite** for fast development and building
- **ESLint** for code quality
- **TypeScript** for type checking
- **Tailwind CSS** for utility-first styling
- **Ant Design** for consistent UI components

## 📄 License

This project is for demonstration purposes.
