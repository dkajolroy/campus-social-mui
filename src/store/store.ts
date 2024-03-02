import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";
import storage from "redux-persist/lib/storage";
import { app } from "../constants/config";
import reducer from "./reducer";

const persistConfig = {
  key: "root",
  storage,
  version: 1,
  whitelist: ["authState", "forgetState"], // store only this key of state
  transforms: [
    encryptTransform({
      secretKey: app.secrete_key,
      onError: function (_) {
        // Handle the error.
        window.location.reload();
      },
    }),
  ],
};
const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: import.meta.env.DEV,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});

export const persistedStore = persistStore(store);

export type RootStore = ReturnType<typeof reducer>;
