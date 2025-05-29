/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    screens: {
      "2xs": "375px",
      xs: "415px",
      s: "650px",
      ms: "768px",
      m: "900px",
      l: "1024px",
      xl: "1200px",
      "2xl": "1536px",
      landscape: { orientation: "landscape" },
      portrait: { orientation: "portrait" },
      "has-hover": { raw: "(hover: hover) and (pointer: fine)" },
      "max-s": { max: "649px" },
      "max-m": { max: "1024px" },
    },
    colors: {
      white: "#ffffff",
      black: "#000000",
      blue: "#2F87B5",
      skyblue: "#E2ECF7",
      lightblue: "#8FC8E3",
      shadowblue: "#262D36",
      shadowbluelt: "#313944",
      red: "#FC5161",
      lightred: "#FF9FA8",
      yellow: "#ECDD7B",
      green: "#779D48",
      tan: "#E3D4C4",
      jaffa: "#FEF6F0",
      jaffalt: "#E3D4C4",
      jaffadk: "#BA9F82",
      grayline: "rgba(0,0,0,.07)",
      whiteline: "rgba(255,255,255,.07)",
      darkline: "#3A424D",
      transparent: "transparent",
    },
    fontFamily: {
      barlow: ["Barlow", "sans-serif"],
      "barlow-cond": ["Barlow Condensed", "sans-serif"],
      helv: ["Helvetica Neue LT Pro", "sans-serif"],
      helvb: ["Helvetica Neue LT Pro Bold", "sans-serif"],
      helvh: ["Helvetica Neue LT Pro Heavy", "sans-serif"],
    },
    fontSize: {
      eyebrow: "1.8rem",
      "body-xsm": "1.5rem",
      "body-sm": "1.8rem",
      body: "2.2rem",
      "body-md": "3rem",
      sm: "3.4rem",
      md: "4.4rem",
      lg: "6rem",
      xl: "12rem",
      xxl: "24rem",
      tag: "1.5rem",
      num: "2.1rem",
      h5: "2.1rem",
    },
    lineHeight: {
      sm: "1.38",
      body: "1.31",
      md: "1.33",
      lg: ".91",
      xl: ".82",
      xxl: ".82",
      base: "1",
    },
    letterSpacing: {
      base: ".25rem",
    },
    borderRadius: {
      sm: ".5rem",
      base: "1rem",
      btn: "10rem",
      diamond: "1.6rem",
      full: "50%",
      none: "0",
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
        inner: "inset 0 0 20px rgba(0, 0, 0, 0.15)",
      },
      maxWidth: {
        base: "148rem",
      },
      padding: {
        sm: ".8rem",
        "section-top": "10rem",
        "section-top-lg": "15rem",
        "section-bot": "10rem",
        "section-bot-lg": "14rem",
        "hero-top": "16rem",
        "post-top": "18rem",
        side: "4rem",
        "side-lg": "16rem",
        "side-mob": "2rem",
        thumb: "6.8rem",
      },
      margin: {
        sm: "1.875rem",
        side: "4rem",
        btn: "5rem",
        md: "7rem",
      },
      borderWidth: {
        1: "1px",
        15: "1.5px",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
        "out-quad": "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        "out-quint": "cubic-bezier(0.23, 1, 0.32, 1)",
      },
      space: {
        nav: "4rem",
        btn: "3rem",
        header: "3.5rem",
        "header-lg": "4rem",
      },
      blur: {
        glow: "50px",
      },
    },
  },
};
