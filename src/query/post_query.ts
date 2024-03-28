import { app } from "@/constants/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postQuery = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: app.baseApiUrl,
    credentials: "include",
  }),
  reducerPath: "postQuery",
  tagTypes: ["post_action"],
  endpoints: (builder) => ({
    getPost: builder.query<IPost[], { limit: number }>({
      query: ({ limit = 20 }) => `/api/post/feed?limit=${limit}`,
      providesTags: ["post_action"],
    }),

    editPost: builder.mutation<IPost, void>({
      query: () => ``,
      invalidatesTags: ["post_action"],
    }),
    deletePost: builder.mutation<IPost, string>({
      query: () => ``,
      invalidatesTags: ["post_action"],
    }),
  }),
});

export const { useGetPostQuery, useEditPostMutation, useDeletePostMutation } =
  postQuery;
