import axios from "axios";
import { app } from "../constants/config";

// base api url
export const baseApi = axios.create({
  baseURL: app.baseApiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

// Apis error handling
export const handleError = (error: any): string => {
  const err =
    error.response && error.message
      ? error.response?.data.message
      : error.message;
  return err;
};
