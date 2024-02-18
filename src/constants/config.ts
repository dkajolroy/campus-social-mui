export const app = {
  appName: "Campus",
  appVersion: "1.0.0",
  chatName: "Discus",
  clientCookieName: "LOGIN", // see from server to protect
  baseApiUrl: import.meta.env.VITE_API_URL, // change from env
  secrete_key: import.meta.env.VITE_SECRETE_KEY, // change from env
};
