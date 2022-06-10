import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiUrl } from "./mainApi";

export const middlewareApi = createApi({
  reducerPath: "globalApi",
  tagTypes: ["global"],
  baseQuery: fetchBaseQuery({
    baseUrl: apiUrl,
  }),
  endpoints: (builder) => ({}),
});
