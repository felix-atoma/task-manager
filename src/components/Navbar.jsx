import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import Button from './Button';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const { darkMode } = useTheme();
  const location = useLocation();

  // Navigation items
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/tasks', label: 'Tasks' },
    { path: '/api-demo', label: 'API Demo' },
  ];

  return (
    <nav className={`sticky top-0 z-50 ${darkMode ? 'bg-gray-900' : 'bg-white'} shadow-md`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <Link to="/" className="flex items-center">
            <span className={`text-xl font-bold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
              TaskMaster
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? darkMode
                      ? 'bg-gray-800 text-white'
                      : 'bg-blue-100 text-blue-700'
                    : darkMode
                    ? 'text-gray-300 hover:bg-gray-800 hover:text-white'
                    : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <Button
              variant="ghost"
              className="ml-2"
              onClick={() => document.getElementById('mobile-menu').classList.toggle('hidden')}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div id="mobile-menu" className="hidden md:hidden">
        <div className={`px-2 pt-2 pb-3 space-y-1 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                location.pathname === item.path
                  ? darkMode
                    ? 'bg-gray-800 text-white'
                    : 'bg-blue-100 text-blue-700'
                  : darkMode
                  ? 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;