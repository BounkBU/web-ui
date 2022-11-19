import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import client from '../../client'
import type { TmdbMovieI } from '../../types/tmdb'

interface ITmdbMovieSlice {
  movies: TmdbMovieI[]
}

const initialState: ITmdbMovieSlice = {
  movies: [],
}

export const fetchTmdbMovies = createAsyncThunk(
  'movie/fetchTmdbMovies',
  async () => {
    const { data } = await client.get<TmdbMovieI[]>('/tmdb/movies')
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
    )
  },
})

export const tmdbMoviesState = (state: RootState) => state.tmdb.movies

export default tmdbSlice.reducer
