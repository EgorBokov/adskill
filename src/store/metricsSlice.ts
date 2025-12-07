import type { CurrentMetrics, MetricsCondition } from '@/types'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { mockData } from '@/utils/constants'
import type { RootState } from '@/store'

const initialState: MetricsCondition = {
  data: null,
  isLoading: false,
  error: null,
}

export const loadMetricsThunk = createAsyncThunk(
  'metrics/load-metrics',
  async (_, { rejectWithValue }) => {
    try {
      await new Promise(res => setTimeout(res, 1000))
      return mockData.currentMetrics as CurrentMetrics
    } catch (err) {
      rejectWithValue(err)
    }
  }
)

export const metricsSlice = createSlice({
  name: 'metrics',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(loadMetricsThunk.pending, state => {
        state.isLoading = true
        state.error = null
      })
      .addCase(loadMetricsThunk.fulfilled, (state, action) => {
        state.data = action.payload as CurrentMetrics
        state.isLoading = false
      })
      .addCase(loadMetricsThunk.rejected, (state, action) => {
        state.error = action.payload as string
        state.isLoading = false
      })
  },
})

export const metricsSliceSelector = (state: RootState) => state.metrics
