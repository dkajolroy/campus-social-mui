import { app } from "@/constants/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface InputMessage {
  recipient?: string;
  receiver?: string;
  text: string;
}

export const messageQuery = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: app.baseApiUrl,
    credentials: "include",
  }),
  reducerPath: "message_query",
  tagTypes: ["message_action", "conversation_action"],
  endpoints: (builder) => ({
    getConversation: builder.query<Conversation[], { limit: number }>({
      query: ({ limit = 20 }) => `/api/conversation/get?limit=${limit}`,
      providesTags: ["conversation_action"],
    }),
    getMessages: builder.query<Message[], string>({
      query: (conversationId) => `/api/message/get/${conversationId}`,
      providesTags: ["message_action"],
    }),
    sendMessage: builder.mutation<{ message: string }, InputMessage>({
      query: (message) => ({
        url: `/api/message/send`,
        body: message,
        method: "POST",
      }),
      invalidatesTags: ["message_action", "conversation_action"],
    }),
    deliveryMsg: builder.mutation<{ message: string }, { messages: string[] }>({
      query: (body) => ({
        url: `/api/message/delivery`,
        body,
        method: "POST",
      }),
      invalidatesTags: ["message_action", "conversation_action"],
    }),
    sendMessageToRoom: builder.mutation<{ message: string }, InputMessage>({
      query: (message) => ({
        url: `/api/message/send/room`,
        body: message,
        method: "POST",
      }),
      invalidatesTags: ["message_action", "conversation_action"],
    }),
    updateMessage: builder.mutation({
      query: () => ``,
      invalidatesTags: ["message_action"],
    }),
  }),
});

export const {
  useGetMessagesQuery,
  useSendMessageMutation,
  useSendMessageToRoomMutation,
  useUpdateMessageMutation,
  useDeliveryMsgMutation,
  useGetConversationQuery,
} = messageQuery;
