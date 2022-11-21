import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import client from '../../client'
import type { Result, SearchResults } from '../../types/movie'

interface IMovieSlice {
  searchResultsMovies: Result[]
}

const initialState: IMovieSlice = {
  searchResultsMovies: [],
}

export const fetchSearchResultMovies = createAsyncThunk(
  'movie/fetchSearchResultMovies',
  async () => {
    const { data } = await client.get<SearchResults>('/search')
    return data
  },
)

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchSearchResultMovies.fulfilled,
      (state: IMovieSlice, action: PayloadAction<SearchResults>) => {
        const { results } = action.payload
        state.searchResultsMovies = results
      },
    )
  },
})

export const searchResultMoviesState = (state: RootState) =>
  state.movie.searchResultsMovies

export default movieSlice.reducer
