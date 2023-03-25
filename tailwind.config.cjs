/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "aboutme-background": "url('/blob.svg')",
      },
      colors: {
        greenPureDark: "#172026",
        greenDarkest: "#011526",
        greenDark: "#012E40",
        greenNormal: "#025959",
        greenLight: "#02735E",
        greenLightest: "#038C65",
        extraOrange: "#FF8000",
      },
      fontFamily: {
        Nunito: ["Nunito", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
        openSans: ["Open sans", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
      },
      screens: {
        'lgMax': {'max': '1279px'}
    }
  },
  plugins: [],
}
}
