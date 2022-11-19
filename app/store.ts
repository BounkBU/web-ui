import { configureStore } from '@reduxjs/toolkit'
import tmdbSlice from '../features/movie/tmdbSlice'

export const store = configureStore({
  reducer: {
    tmdb: tmdbSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
