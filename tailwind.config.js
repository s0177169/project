/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-red": {
          light: "#F14D34",
          dark: "#D13018",
        },
        "primary-blue": {
          light: "#050C33",
          dark: "#040613",
        },
      },
      textUnderlineOffset: {
        10: "10px",
      },
      fontSize: {
        12: "12px",
        16: "16px",
        20: "20px",
        24: "24px",
        28: "28px",
        32: "32px",
        40: "40px",
        48: "48px",
      },
    },
    content: {
      'agree': 'url("./img/checkedIcon.svg")',
    },
  },
  plugins: [],
};
