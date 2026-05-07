export default {
  darkMode: 'class', // (puedes quitarlo si no usarás dark mode)
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f4f4fb",
          100: "#e7e8f5",
          200: "#d8d9ee",
          300: "#c5c6e1",
          400: "#9e9fd0",
          500: "#7979b7",
          600: "#62629e",
          700: "#51518E",
          800: "#424273",
          900: "#34345c",
          950: "#20203a"
        },
        secondary: "#c5c6e1",
        "secondary-soft": "#f3f3fa"
      },

      fontFamily: {
        sans: [
          'Inter',
          'Source Sans 3',
          'Source Sans Pro',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif'
        ],
        heading: [
          'Source Sans 3',
          'Source Sans Pro',
          'Inter',
          'sans-serif'
        ]
      }
    }
  }
}
