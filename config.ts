export const baseUrl =
  process.env.NODE_ENV == "production"
    ? "https://exchange-smoky-tau.vercel.app"
    : "http://localhost:3000/";
