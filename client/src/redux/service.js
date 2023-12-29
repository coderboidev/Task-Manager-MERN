import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/",
    credentials: "include",
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (body) => ({
        url: "register",
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"],
    }),
    login: builder.mutation({
      query: (body) => ({
        url: "login",
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"],
    }),
    logout: builder.mutation({
      query: () => ({
        url: "logout",
        method: "POST",
      }),
      invalidatesTags: ["User"],
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
        method: "PUT",
        body,
      }),
      invalidatesTags: ["User"],
    }),
    updateTask: builder.mutation({
      query: (body) => ({
        url: `task/update`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["User"],
    }),
    deleteTask: builder.mutation({
      query: (body) => ({
        url: `task/delete`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useLogoutMutation,
  useGetUserDetailsQuery,
  useAddTaskMutation,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
} = userApi;
