/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        accent: 'var(--color-accent)',
        secondary: 'var(--color-secondary)',
        silver: 'var(--color-silver)',
        glass: 'var(--color-glass)',
        'primary-foreground': 'var(--color-primary-foreground)',
      }
    },
  },
  plugins: [],
}
