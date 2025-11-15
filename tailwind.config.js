/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.html",
    "./*.html",
    "!./node_modules/**/*"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': '#0B7BE3',
        'oliygoh-blue': '#0B7BE3',
        'oliygoh-green': '#166534',
        'oliygoh-yellow': '#facc15',
        'oliygoh-light-blue': '#e0f2fe',
        'oliygoh-gray': '#f8fafc',
        'oliygoh-dark-gray': '#64748b',
        'oliygoh-accent-green': '#10b981',
        'oliygoh-tag-blue': '#1e40af',
        // Status colors
        'error': '#F94B33',
        'error-light': '#F94B331F',
        'error-hover-dark': '#E03A22',
        'error-bg': '#FFE5E5',
        'error-bg-dark': '#4A1F1F',
        'error-text': '#FF4444',
        'error-text-dark': '#FF6B6B',
        'error-hover': '#FFD5D5',
        'error-hover-dark': '#5A2F2F',
        'success': '#049741',
        'success-light': '#0497411F',
        'success-bg': '#E8F5E9',
        'success-text': '#4CAF50',
        'error-text-alt': '#F44336',
        'primary-light': '#0B7BE31F',
        'primary-medium': '#0B7BE366',
        // Background colors
        'bg-light': '#F2F3F7',
        'bg-dark': '#09131A',
        'bg-header': '#2A2C33',
        'bg-card-dark': '#152732',
        'bg-tab': '#E4E6EE',
        'bg-border': '#E1E2E5',
        'bg-tab-light': '#F6F7FA',
        'bg-gray-light': '#E0E0E0',
        // Text colors
        'text-dark': '#2A2C33',
        'text-secondary': '#98B4CC',
        'text-secondary-opacity': '#98B4CCCC',
        'text-muted': '#686E7E',
        'text-muted-light': '#999FAB',
        // Dark mode specific colors
        'dark-social-bg': '#536777B2',
        // Dark mode hover/background
        'dark-hover': '#1a2330',
        'dark-border': '#152732',
        'dark-border-alt': '#1D2A33',
        'dark-bg-alt': '#0E1A22',
        // Dark mode colors
        'dark-bg': '#09131A',
        'dark-card': '#152732',
        'dark-text-primary': '#e5e7eb',
        'dark-text-secondary': '#98B4CC',
        'tab-gray-dark': '#152732',
        'tab-gray': '#E4E6EE',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '88': '22rem',
        '92': '23rem',
        '96': '24rem',
      },
      fontSize: {
        'xxs': '0.65rem',
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        '24': '24px',
      },
      boxShadow: {
        'soft': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'medium': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      }
    },
  },
  plugins: [],
}
