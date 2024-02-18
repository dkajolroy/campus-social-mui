import axios, { AxiosError } from "axios";
import { app } from "../constants/config";

// base api url
export const axiosInstance = axios.create({
  baseURL: app.baseApiUrl,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// catch(error) handle
export const getCatchError = (error: AxiosError): { message: string } => {
  const err = (error.response?.data as { message: string }) || error;
  return err;
};
