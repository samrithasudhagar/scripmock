module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    boxShadow: {
      sm: "0px 1px 2px rgba(0, 0, 0, 0.1), 0px 0px 1.5px rgba(0, 0, 0, 0.5)",
      md: "0px 2px 7px rgba(0, 0, 0, 0.1), 0px 0px 2px rgba(0, 0, 0, 0.2)",
      lg: "0px 0.5px 2px rgba(0, 0, 0, 0.1), 0px 2px 3px rgba(0, 0, 0, 0.07);"
    },
    screens: {
      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" }
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      colors: {
        "accent-1": "#333",
        orange: "#f58024",
        gray: "#fafafa",
        font: "#343434",
        fontgrey: "#595959",
        bggrey: "#f2f2f2",
        mustard: "#B77A0A",
        bgyellow1: "#FDEFD4",
        bleu: "#4E89D8",
        bgbleu: "#E2EEFE",
        pink: "#B26868",
        bgpink: "#FDECEC",
        bgdarkgrey: "#e6e6e6",
        blackdark: "#181818",
        green: "#0fac85",
        green1: "#54894A",
        bggreen1: "#E2F4D7",
        red: "#f56565",
        bgorange: "#fef5eb",
        bggreen: "#e7fef8",
        bgred: "#fff5f5",
        bgblue: "#1971e4",
        hoverorange: "#dd6b20",
        hoverbg: "#f2f2f2",
        textgrey: "#737373",
        h3font: "#181818",
        lightblue: "#ebf8ff",
        fontclr: "#404040",
        bgblue1: "#cbe3f6",
        bgyellow2: "#fbe5bb",
        bgblue3: "#8cc6f1",
        bggreen2: "#008088",
        bgviolet: "#553c9a",
        lightgreen: "#b6f1e0",
        bgclr: "#f9f8f3"
      },
      width: {
        "64": "28rem",
        "102": "17rem",
        "110": "20rem"
      },
      height: {
        "6": "2px"
      }
    }
  },
  variants: {},
  plugins: []
};
