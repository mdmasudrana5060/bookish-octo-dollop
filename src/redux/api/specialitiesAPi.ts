import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

// NOTE: these are the _SAME_ API reference!
const specialitiesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createSpeciality: build.mutation({
      query: (data) => ({
        url: "/specialities",
        method: "POST",
        contentType: "multipart/form-data",
        data,
      }),
      invalidatesTags: [tagTypes.specialities],
    }),
    getAllSpecialities: build.query({
      query: (data) => ({
        url: "/specialities",
        method: "GET",
      }),
      providesTags: [tagTypes.specialities],
    }),
  }),
});

export const { useCreateSpecialityMutation, useGetAllSpecialitiesQuery } =
  specialitiesApi;
