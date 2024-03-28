import notificationMp3 from "@/assets/notification.mp3";
export const app = {
  appName: "Campus",
  appVersion: "1.0.0",
  chatName: "Discuss",
  notificationMp3,
  clientCookieName: "CAMPUS_CLIENT", // see from server to protect
  baseApiUrl: import.meta.env.VITE_API_URL, // change from env
  secrete_key: import.meta.env.VITE_SECRETE_KEY, // change from env
};
