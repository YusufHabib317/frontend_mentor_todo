/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        light: "url('../src/assets/bg-desktop-light.jpg')",
        dark: "url('../src/assets/bg-desktop-dark.jpg')",
      },

      textColor: {
        skin: {
          textTodo: "var(--color-text-todos)",
          textActive: "var(--color-text-active)",
          textUnActive: "var(--color-text-unactive)",
          texthover: "var(--color-text-hover)",
          textActivehover: "var(--color-text-active)",
        },
      },

      backgroundColor: {
        skin: {
          app: "var(--color-bg-app)",
          todo: "var(--color-bg-todos)",
        },
      },
    },
    fontFamily: {
      Ubuntu: "Ubuntu",
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1066px",
    },
  },
  plugins: [],
};
