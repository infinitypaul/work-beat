module.exports = {
  mode: 'jit',
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          main: '#9151FE',
          dark: '#1d1033',
          100: '#d3b9ff',
        },
        castos: '#1F293B',
      },
      fontFamily: {
        metropolis: ['"Metropolis"'],
      },
      textColor: {
        castos: '#1F293B',
        primary: '#232323',
        lightGrey: '#828282',
        lightPurple: '#d3b9ff',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
