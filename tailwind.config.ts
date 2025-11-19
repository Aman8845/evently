module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      backgroundImage: {
        "dotted-pattern": "url('/assets/images/dotted-pattern.png')",
        "hero-img": "url('/assets/images/hero.png')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
