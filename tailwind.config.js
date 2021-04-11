module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['SF\\ Pro\\ Display'],
      'serif': ['Arima\\ Madurai']
    },
    extend: {
      colors: {
        'white-1': '#FAFAFA',
        'white-2': '#FFFFFF',
        'black-1': '#1A202C',
        'black-2': '#2D3748',
        'neon-green': '#39FF14',
        'accent-1': '#4C51BF',
        'accent-2': '#ED64A6',
        'accent-3': '#7E63FF',
        'accent-4': '#F56565',
        'form-outline': '#41B4E6'
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      fontStyle: ['hover', 'focus', 'active'],
      textDecoration: ['active']
    },
  },
  plugins: [],
}