import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import client from '../../client'
import type {
  ITmdbMovieDetailFilter,
  ITmdbFilter,
  ITmdbMovieSlice,
  TmdbMovieDetailI,
  TmdbI,
  TmdbSerieDetailI,
} from '../../types/tmdb'

const initialState: ITmdbMovieSlice = {
  movies: [],
  movieDetail: null,
  series: [],
  serieDetail: null,
}

export const fetchTmdbMovies = createAsyncThunk(
  'movie/fetchTmdbMovies',
  async ({ page }: ITmdbFilter) => {
    const { data } = await client.get<TmdbI[]>('/tmdb/movies', {
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

export const fetchTmdbSeries = createAsyncThunk(
  'movie/fetchTmdbSeries',
  async ({ page }: ITmdbFilter) => {
    const { data } = await client.get<TmdbI[]>('/tmdb/series', {
      params: {
        page: page,
      },
    })
    return data
  },
)

export const fetchTmdbSerieDetail = createAsyncThunk(
  'movie/fetchTmdbSerieDetail',
  async ({ id }: ITmdbMovieDetailFilter) => {
    const { data } = await client.get<TmdbSerieDetailI>(`/tmdb/serie/${id}`)
    return data
  },
)

export const tmdbSlice = createSlice({
  name: 'tmdb',
  initialState,
  reducers: {
    setMovies: (state: ITmdbMovieSlice, action: PayloadAction<TmdbI[]>) => {
      state.movies = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchTmdbMovies.fulfilled,
      (state: ITmdbMovieSlice, action: PayloadAction<TmdbI[]>) => {
        state.movies = action.payload
      },
    )
    builder.addCase(
      fetchTmdbMovieDetail.fulfilled,
      (state: ITmdbMovieSlice, action: PayloadAction<TmdbMovieDetailI>) => {
        state.movieDetail = action.payload
      },
    )
    builder.addCase(
      fetchTmdbSeries.fulfilled,
      (state: ITmdbMovieSlice, action: PayloadAction<TmdbI[]>) => {
        state.series = action.payload
      },
    )
    builder.addCase(
      fetchTmdbSerieDetail.fulfilled,
      (state: ITmdbMovieSlice, action: PayloadAction<TmdbSerieDetailI>) => {
        state.serieDetail = action.payload
      },
    )
  },
})

export const tmdbMoviesState = (state: RootState) => state.tmdb.movies
export const thdbMovieDetailState = (state: RootState) => state.tmdb.movieDetail
export const tmdbSeriesState = (state: RootState) => state.tmdb.series
export const thdbSerieDetailState = (state: RootState) => state.tmdb.serieDetail

export default tmdbSlice.reducer
