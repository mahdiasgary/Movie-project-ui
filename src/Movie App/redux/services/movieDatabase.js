import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const movieCoreApi = createApi({
  reducerPath: "movieCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://localhost:7175/",
  }),
  endpoints: (builder) => ({
    getArtisitListInAdminPanel: builder.query({
      query: ({ searchkey, page }) =>
        `Admin/Artist/GetList?Page=${page ? page : 1}&searchkey=${searchkey}`,
    }),
    getUsersListInAdminPanel: builder.query({
      query: ({ searchkey, page, FilterType }) =>
        `Admin/User/Index?Page=${page}&searchkey=${searchkey}&FilterType=${FilterType}`,
    }),
    getCommentListInAdminPanel: builder.query({
      query: ({ searchkey, page, FilterType }) =>
        `Admin/User/GetUsersComments?Page=${page}&searchkey=${searchkey}&FilterType=${FilterType}`,
    }),
    getGenreListInAdminPanel: builder.query({
      query: ({ searchkey, page }) =>
        `Admin/Genre/Index?Page=${page}&searchkey=${searchkey}`,
    }),
    getCareerListInAdminPanel: builder.query({
      query: ({ searchkey, page }) =>
        `Admin/Career/Index?Page=${page}&searchkey=${searchkey}`,
    }),
    getLanguageListInAdminPanel: builder.query({
      query: ({ searchkey, page }) =>
        `Admin/Language/Index?Page=${page}&searchkey=${searchkey}`,
    }),
    getCountryListInAdminPanel: builder.query({
      query: ({ searchkey, page }) =>
        `Admin/Country/Index?Page=${page}&searchkey=${searchkey}`,
    }),
    getMovieListInAdminPanel: builder.query({
      query: ({ searchkey, page }) =>
        `Admin/Movie/Index?Page=${page}&searchkey=${searchkey}`,
    }),
    getDashBoadrdDataInAdminPanel: builder.query({
      query: () => "Admin/Home/GetDashBoadrdData",
    }),
    getUserForEditInAdminPanel: builder.query({
      query: ({ id }) => `Admin/User/Edit?id=${id}`,
    }),
    getArtistForEditInAdminPanel: builder.query({
      query: ({ id }) => `Admin/Artist/GetDetailById?id=${id}`,
    }),
    getArtistSelectListInAdminPanel: builder.query({
      query: () => `Admin/Artist/GetAllArtitstSelectListItem`,
    }),
    getGenreSelectListInAdminPanel: builder.query({
      query: () => `Admin/Genre/GetAllGnereSelectListItem`,
    }),
    getLanguageSelectListInAdminPanel: builder.query({
      query: () => `Admin/Language/GetAllLanguagesSelectListItem`,
    }),
    getCountrySelectListInAdminPanel: builder.query({
      query: () => `Admin/Country/GetAllCountrySelectListItem`,
    }),
    addMovieInAdminPanel: builder.mutation({
      query: (payload) => ({
        url: "Admin/Movie/AddMovie",
        method: "POST",
        body: payload,
        //headers: {
        //    "Content-Type": "application/json", // Set the content type to JSON
        //},
      }),
      invalidatesTags: ["Post"],
    }),
    changeCommentStatusInAdminPanel: builder.mutation({
      query: (payload) => ({
        url: "Admin/User/ChangeCommentStatus",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Post"],
    }),
    addCareer: builder.mutation({
      query: (payload) => ({
        url: "Admin/Career/Add",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Post"],
    }),
    AddArtistInAdminPanel: builder.mutation({
      query: (payload) => ({
        url: "Admin/Artist/Add",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Post"],
    }),
    removeUser: builder.mutation({
      query: (payload) => ({
        url: "Admin/User/Delete",
        method: "DELETE",
        params: payload,
      }),
      invalidatesTags: ["DELETE"],
    }),
    addGenre: builder.mutation({
      query: (payload) => ({
        url: "Admin/Genre/Add",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Post"],
    }),

    addCountry: builder.mutation({
      query: (payload) => ({
        url: "Admin/Country/Add",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Post"],
    }),
    addLanguage: builder.mutation({
      query: (payload) => ({
        url: "Admin/Language/Add",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Post"],
    }),
    registerUser: builder.mutation({
      query: (payload) => ({
        url: "Account/RegisterUser",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Post"],
    }),
    loginUser: builder.mutation({
      query: (payload) => ({
        url: "Account/LoginUser",
        credentials: "include",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Post"],
    }),
    loginOut: builder.mutation({
      query: (payload) => ({
        url: "Account/SignOut",
        credentials: "include",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Post"],
    }),

    getLoginStatus: builder.query({
      query: () => ({
        url: "Account/Authenticate",
        credentials: "include",
        method: "GET",
      }),
      invalidatesTags: ["Get"],
    }),
    // sendEmailForForgotPassword: builder.mutation({
    //   query: (payload) => ({
    //     url: "Account/ForgotPassword",
    //     credentials: "include",
    //     method: "POST",
    //     body:payload,
    //   }),
    //   invalidatesTags: ["Get"],
    // }),
    SubmitOtpForForgotPassword: builder.mutation({
      query: (payload) => ({
        url: "Account/SubmitForgotPassword",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Post"],
    }),
    SubmitComment: builder.mutation({
      query: (payload) => ({
        url: "User/SubmitComment",
        method: "POST",
        credentials: "include",
        body: payload,
      }),
      invalidatesTags: ["Post"],
    }),

    activeAccount: builder.mutation({
      query: (payload) => ({
        url: "Account/ActiveAccount",
        method: "POST",
        credentials: "include",
        body: payload,
      }),
      invalidatesTags: ["Post"],
    }),
    SendEmailForForgotPassword: builder.mutation({
      query: (payload) => ({
        url: "Account/SendForgotPassword",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Post"],
    }),
    AdminEditGenre: builder.mutation({
      query: (payload) => ({
        url: "Admin/Genre/Edit",
        method: "POST",
        // headers:{{''}}
        body: payload,
      }),
      invalidatesTags: ["Post"],
    }),
    AdminDeleteGenre: builder.mutation({
      query: (payload) => ({
        url: "Admin/Genre/Delete",
        method: "Delete",
        // headers:{{''}}
        // body: payload,
        params: payload,
      }),
      invalidatesTags: ["Delete"],
    }),

    AdminEditCareer: builder.mutation({
      query: (payload) => ({
        url: "Admin/Career/Edit",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Post"],
    }),
    AdminDeleteCareer: builder.mutation({
      query: (payload) => ({
        url: "Admin/Career/Delete",
        method: "Delete",
        params: payload,
      }),
      invalidatesTags: ["Delete"],
    }),

    AdminEditCountry: builder.mutation({
      query: (payload) => ({
        url: "Admin/Country/Edit",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Post"],
    }),
    AdminDeleteCountry: builder.mutation({
      query: (payload) => ({
        url: "Admin/Country/Delete",
        method: "Delete",
        params: payload,
      }),
      invalidatesTags: ["Delete"],
    }),
    AdminEditLanguage: builder.mutation({
      query: (payload) => ({
        url: "Admin/Language/Edit",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Post"],
    }),
    AdminDeleteLanguage: builder.mutation({
      query: (payload) => ({
        url: "Admin/Language/Delete",
        method: "Delete",
        params: payload,
      }),
      invalidatesTags: ["Delete"],
    }),
    AdminDeleteMovie: builder.mutation({
      query: (payload) => ({
        url: "Admin/Movie/Delete",
        method: "Delete",
        // headers:{{''}}
        // body: payload,
        params: payload,
      }),
      invalidatesTags: ["Delete"],
    }),
    AdminEditUser: builder.mutation({
      query: (payload) => ({
        url: "Admin/User/Edit",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Post"],
    }),
    AdminArtistUser: builder.mutation({
      query: (payload) => ({
        url: "Admin/Artist/Edit",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Post"],
    }),
  }),
});

export const {
  useSubmitCommentMutation,
  useGetArtistSelectListInAdminPanelQuery,
  useGetCountrySelectListInAdminPanelQuery,
  useGetGenreSelectListInAdminPanelQuery,
  useGetLanguageSelectListInAdminPanelQuery,
  useChangeCommentStatusInAdminPanelMutation,
  useGetCommentListInAdminPanelQuery,
  useAdminArtistUserMutation,
  useGetArtistForEditInAdminPanelQuery,
  useLazyGetArtisitListInAdminPanelQuery,
  useAdminEditUserMutation,
  useGetUserForEditInAdminPanelQuery,
  useAdminDeleteMovieMutation,
  useAdminDeleteLanguageMutation,
  useAdminEditLanguageMutation,
  useAdminDeleteCountryMutation,
  useAdminEditCountryMutation,
  useAdminDeleteCareerMutation,
  useAdminEditCareerMutation,
  useAdminDeleteGenreMutation,
  useAdminEditGenreMutation,
  useGetDashBoadrdDataInAdminPanelQuery,
  useLoginOutMutation,
  useSubmitOtpForForgotPasswordMutation,
  useSendEmailForForgotPasswordMutation,
  useGetLoginStatusQuery,
  useActiveAccountMutation,
  useLoginUserMutation,
  useRegisterUserMutation,
  useGetArtisitListInAdminPanelQuery,
  useAddArtistInAdminPanelMutation,
  useGetMovieListInAdminPanelQuery,
  useAddCareerMutation,
  useGetCareerListInAdminPanelQuery,
  useGetCountryListInAdminPanelQuery,
  useGetLanguageListInAdminPanelQuery,
  useGetGenreListInAdminPanelQuery,
  useAddCountryMutation,
  useAddGenreMutation,
  useAddLanguageMutation,
  useRemoveUserMutation,
  useAddMovieInAdminPanelMutation,
  useGetUsersListInAdminPanelQuery,
  useGetMovieLikeThisQuery,
  useGetMovieImgQuery,
  useGetTopMoviesQuery,
  useGetMovieDetailsQuery,
  useGetTopMoviesByGenreQuery,
  useGetTopSeriesQuery,
} = movieCoreApi;
