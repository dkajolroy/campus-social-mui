import { conversationQuery } from "@/query/conversation_query";
import { friendsQuery } from "@/query/friends_query";
import { messageQuery } from "@/query/message_query";
import { postQuery } from "@/query/post_query";
import { configureStore } from "@reduxjs/toolkit";
import { PersistConfig, persistReducer, persistStore } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";
import storage from "redux-persist/lib/storage";
import { app } from "../constants/config";
import reducer from "./reducer";

const persistConfig: PersistConfig<RootStore> = {
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
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }).concat([
      postQuery.middleware,
      conversationQuery.middleware,
      messageQuery.middleware,
      friendsQuery.middleware,
    ]);
  },
});

export const persistedStore = persistStore(store);

export type RootStore = ReturnType<typeof reducer>;
