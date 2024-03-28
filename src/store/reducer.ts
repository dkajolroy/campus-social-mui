import { conversationQuery } from "@/query/conversation_query";
import { friendsQuery } from "@/query/friends_query";
import { messageQuery } from "@/query/message_query";
import { postQuery } from "@/query/post_query";
import postSlice from "@/slices/postSlice";
import { combineSlices } from "@reduxjs/toolkit";
import authSlice from "../slices/authSlice";
import forgetSlice from "../slices/forgetSlice";
import toggleSlice from "../slices/toggleSlice";

const reducer = combineSlices({
  authState: authSlice,
  toggleState: toggleSlice,
  forgetState: forgetSlice,
  postState: postSlice,
  [postQuery.reducerPath]: postQuery.reducer,
  [friendsQuery.reducerPath]: friendsQuery.reducer,
  [conversationQuery.reducerPath]: conversationQuery.reducer,
  [messageQuery.reducerPath]: messageQuery.reducer,
});

export default reducer;
