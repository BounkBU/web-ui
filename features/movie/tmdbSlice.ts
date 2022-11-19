import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import client from '../../client'
import type {
  ITmdbMovieDetailFilter,
  ITmdbMovieFilter,
  TmdbMovieDetailI,
  TmdbMovieI,
} from '../../types/tmdb'

interface ITmdbMovieSlice {
  movies: TmdbMovieI[]
  movieDetail: TmdbMovieDetailI | null
}

const initialState: ITmdbMovieSlice = {
  movies: [],
  movieDetail: null,
}

export const fetchTmdbMovies = createAsyncThunk(
  'movie/fetchTmdbMovies',
  async ({ page }: ITmdbMovieFilter) => {
    const { data } = await client.get<TmdbMovieI[]>('/tmdb/movies', {
      params: {
        page: page,
      },
    })
    return data
  },
)

export const fetchTmdbMovieDetail = createAsyncThunk(
  'movie/fetchTmdbMovieDetail',
  async ({ id }: ITmdbMovieDetailFilter) => {
    const { data } = await client.get<TmdbMovieDetailI>(`/tmdb/movie/${id}`)
    return data
  },
)

export const tmdbSlice = createSlice({
  name: 'tmdb',
  initialState,
  reducers: {
    setMovies: (
      state: ITmdbMovieSlice,
      action: PayloadAction<TmdbMovieI[]>,
    ) => {
      state.movies = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchTmdbMovies.fulfilled,
      (state: ITmdbMovieSlice, action: PayloadAction<TmdbMovieI[]>) => {
        state.movies = action.payload
      },
    ),
      builder.addCase(
        fetchTmdbMovieDetail.fulfilled,
        (state: ITmdbMovieSlice, action: PayloadAction<TmdbMovieDetailI>) => {
          state.movieDetail = action.payload
        },
      )
  },
})

export const tmdbMoviesState = (state: RootState) => state.tmdb.movies
export const thdbMovieDetailState = (state: RootState) => state.tmdb.movieDetail

export default tmdbSlice.reducer
