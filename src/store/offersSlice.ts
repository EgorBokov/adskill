import type { OfferType, OffersCondition } from '@/types'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { mockData } from '@/utils/constants'
import type { RootState } from '@/store'

const initialState: OffersCondition = {
  data: null,
  isLoading: false,
  error: null,
  sortBy: null,
  sortOrder: null,
}

export const loadOffersThunk = createAsyncThunk(
  'offers/load-offers',
  async (_, { rejectWithValue }) => {
    try {
      await new Promise(res => setTimeout(res, 1000))
      return mockData.offers as OfferType[]
    } catch (err) {
      return rejectWithValue(err)
    }
  }
)

export const offersSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {
    setSort: (state, action: PayloadAction<{ sortBy: string; sortOrder: 'asc' | 'desc' }>) => {
      state.sortBy = action.payload.sortBy
      state.sortOrder = action.payload.sortOrder
    },
    clearSort: state => {
      state.sortBy = null
      state.sortOrder = null
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loadOffersThunk.pending, state => {
        state.isLoading = true
        state.error = null
      })
      .addCase(loadOffersThunk.fulfilled, (state, action) => {
        state.data = action.payload as OfferType[]
        state.isLoading = false
      })
      .addCase(loadOffersThunk.rejected, (state, action) => {
        state.error = action.payload as string
        state.isLoading = false
      })
  },
})

export const { setSort, clearSort } = offersSlice.actions
export const offersSliceSelector = (state: RootState) => state.offers
export const offersTotalBalanceSelector = (state: RootState) => {
  const offers = state.offers
  if (!offers.data || offers.data?.length === 0) {
    return 0
  }

  return offers.data.reduce((acc, value) => value.balance + acc, 0)
}
