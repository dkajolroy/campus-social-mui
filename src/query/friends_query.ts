import { app } from "@/constants/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const friendsQuery = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: app.baseApiUrl,
    credentials: "include",
  }),
  reducerPath: "friendQuery",
  endpoints: (builder) => ({
    getFriends: builder.query<{ date: string; user: User }[], void>({
      query: () => ({
        url: `/api/friend/get`,
      }),
    }),
  }),
});

export const { useGetFriendsQuery } = friendsQuery;
