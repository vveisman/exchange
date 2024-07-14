import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // docBlue: "#1b5aa4ff",
        appBlue: "#00a5ef",
        appBlue2: "#0052cc",
        error: "#eb4a27",
        docBlack: "#404040",
        patientBlue: "#1B00EA",
        appAsh: "#d8d8d8",
        appAsh2: "#dfdfdf",
        appPurple: "#531eba",
        darkBlue: "rgba(38, 51, 93, 1)",
        textAsh: "#404040",
        logoBlue: "#1b5aa4ff",
      },
    },
  },
  plugins: [],
};
export default config;
