import { configureStore } from '@reduxjs/toolkit'
import tmdbSlice from '../features/movie/tmdbSlice'
import movieSlice from '../features/movie/movieSlice'

export const store = configureStore({
  reducer: {
    tmdb: tmdbSlice,
    movie: movieSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
