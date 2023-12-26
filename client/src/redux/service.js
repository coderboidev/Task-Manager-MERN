import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/" }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (body) => ({
        url: "register",
        body,
      }),
    }),
    login: builder.mutation({
      query: (body) => ({
        url: "login",
        body,
      }),
    }),
    getUserDetails: builder.query({
      query: () => ({
        url: "me",
      }),
      providesTags: ["User"],
    }),
    addTask: builder.mutation({
      query: (body) => ({
        url: "task",
        body,
      }),
      invalidatesTags: ["User"],
    }),
    updateTask: builder.mutation({
      query: ({ id, body }) => ({
        url: `task/${id}`,
        body,
      }),
      invalidatesTags: ["User"],
    }),
    deleteTask: builder.mutation({
      query: (id) => ({
        url: `task/${id}`,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useLazyGetUserDetailsQuery,
  useAddTaskMutation,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
} = userApi;
