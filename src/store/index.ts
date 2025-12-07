import { configureStore } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux'
import { metricsSlice } from './metricsSlice'
import { offersSlice } from './offersSlice'

export const store = configureStore({
  reducer: {
    metrics: metricsSlice.reducer,
    offers: offersSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
