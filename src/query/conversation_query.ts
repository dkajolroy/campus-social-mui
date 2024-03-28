import { app } from "@/constants/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const conversationQuery = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: app.baseApiUrl,
    credentials: "include",
  }),
  reducerPath: "conversationQuery",
  tagTypes: ["conversation_action"],
  endpoints: (builder) => ({
    editConversation: builder.mutation({
      query: () => ({
        url: ``,
      }),
      invalidatesTags: ["conversation_action"],
    }),
  }),
});

export const { useEditConversationMutation } = conversationQuery;
