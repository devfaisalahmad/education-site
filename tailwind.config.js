/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F47335",
        yellows: "#FFB606",
        secondary: "#F0F7D",
        subtext: "#8E8E8E",
        blacks: "#000000",
        title: "#333333",
        greens: "#00d637",
        oranges: "#F5703B",
        grays:'#686868'
      },
      fontFamily: {
        primary: ["Poppins", "sans-serif"],
        roboto: ["Roboto Slab", "sans-serif"],
      },
    },
    backgroundImage: {
      "slider-bg": "url(https://res.cloudinary.com/team-odeon/images/w_2560,h_1707/v1634119120/degreechoices/adobestock_356546413/adobestock_356546413.jpeg?_i=AA)",
      "slider-bg2":
        "url(https://imageio.forbes.com/specials-images/imageserve/63da950b8439bac677e6ed8a/0x0.jpg?format=jpg&width=1200)",
      "slider-bg3":
        "url('/public/images/slider/slide_1.webp')",
      "slider-bg4":
        "url(https://www.alummah.ps/en/wp-content/uploads/sites/2/2020/02/slider-inside-student-life.jpg)",
    },
  },
  plugins: [],
};
