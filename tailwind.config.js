/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    screens: {
      '2xs': '375px',
      xs: '415px',
      s: '650px',
      ms: '768px',
      m: '900px',
      l: '1024px',
      xl: '1200px',
      '2xl': '1536px',
      landscape: { orientation: 'landscape' },
      portrait: { orientation: 'portrait' },
      'has-hover': { raw: '(hover: hover) and (pointer: fine)' },
      'max-s': { max: '649px' },
      'max-m': { max: '1024px' },
    },
    colors: {
      white: '#ffffff',
      black: '#000000',
      skyblue: '#E2ECF7',
      red: '#FC5161',
      transparent: 'transparent',
    },
    fontFamily: {
      helv: ['Helvetica Neue LT Pro', 'sans-serif'],
      helvm: ['Helvetica Neue LT Pro Md', 'sans-serif'],
      helvb: ['Helvetica Neue LT Pro Bold', 'sans-serif'],
    },
    fontSize: {
      body: '1.125rem' /* 18px */,
    },
    lineHeight: {
      body: '1.5rem',
    },
    letterSpacing: {
      base: '.25rem',
    },
    borderRadius: {
      base: '1.25rem',
      none: '0',
    },
    zIndex: {
      ...new Array(21)
        .fill()
        .map((_, i) => i)
        .reduce((acc, val) => {
          acc[val] = val;
          return acc;
        }, {}),
    },

    extend: {
      boxShadow: {
        inner: 'inset 0 0 20px rgba(0, 0, 0, 0.15)',
      },
      maxWidth: {
        base: '93.75rem',
      },
      padding: {
        side: '3.125rem',
        'side-mob': '1.25rem',
        base: '3.75rem',
      },
      margin: {
        sm: '1.875rem',
      },
      borderWidth: {
        1: '1px',
        15: '1.5px',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
        'out-quad': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'out-quint': 'cubic-bezier(0.23, 1, 0.32, 1)',
      },
    },
  },
};
