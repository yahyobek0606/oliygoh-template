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
        // Dark mode colors
        'dark-bg': '#09131A',
        'dark-card': '#152732',
        'dark-text-primary': '#e5e7eb',
        'dark-text-secondary': '#98B4CC',
        'dark-border': '#152732',
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
