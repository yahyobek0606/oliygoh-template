/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}", "./pages/**/*.html", "./*.html"],
  theme: {
    extend: {
      colors: {
        'oliygoh-blue': '#2563eb',
        'oliygoh-green': '#166534',
        'oliygoh-yellow': '#facc15',
        'oliygoh-light-blue': '#e0f2fe',
        'oliygoh-gray': '#f8fafc',
        'oliygoh-dark-gray': '#64748b',
        'oliygoh-accent-green': '#10b981',
        'oliygoh-tag-blue': '#1e40af',
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
      },
      boxShadow: {
        'soft': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'medium': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      }
    },
  },
  plugins: [],
}
