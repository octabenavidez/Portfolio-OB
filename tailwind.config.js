/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        rotateZ: "rotateZ 300ms ease-in-out forwards",
      },
      keyframes: {
        rotateZ: {
          "0%": { opacity: "0", transform: "translateZ(290px)" },
          "80%": { transform: "translateZ(10px)" },
          "100%": { opacity: "1", transform: "translateZ(0)" },
        },
      },
    },
  },
  plugins: [],
};
