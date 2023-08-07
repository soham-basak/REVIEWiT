import { apiSlice } from "./apiSilce";

const MOVIES_URL = "/api/movies";

export const movieApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllMovies: builder.mutation({
      query: () => ({
        url: `${MOVIES_URL}`,
        method: "GET",
      }),
    }),
    getOneMovie: builder.mutation({
      query: ({ id }) => ({
        url: `${MOVIES_URL}/${id}`,
        method: "GET",
      }),
    }),
    postReview: builder.mutation({
      query: ({ id, data }) => ({
        url: `${MOVIES_URL}/${id}/review`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetAllMoviesMutation,
  useGetOneMovieMutation,
  usePostReviewMutation,
} = movieApiSlice;
