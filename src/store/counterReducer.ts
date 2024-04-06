import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  value: number
  testName : string
}

const initialState: CounterState = {
  value: 10,
  testName : "Test Name"
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
      state.testName = "Value Incrmented"
    },
    decrement: (state) => {
      state.value -= 1
      state.testName = "Value Decremented"
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
      state.testName = "Value incremented by "+action.payload
    },
    decrementByAmount: (state, action: PayloadAction<number>) => {
      state.value -= action.payload
      state.testName = "Value decremented by "+action.payload
    },
    nameChange: (state, action:PayloadAction<string>) => {
      state.testName = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount,decrementByAmount,nameChange } = counterSlice.actions

export default counterSlice.reducer