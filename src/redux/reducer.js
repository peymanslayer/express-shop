import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: ''
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
  
    Token: (state,action) => {
      state.value = action.payload
    },
    user: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {  Token, user } = counterSlice.actions

export default counterSlice.reducer
