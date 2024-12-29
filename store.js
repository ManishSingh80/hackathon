import { configureStore } from '@reduxjs/toolkit'

const initialState = {
  // Add any initial state here
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    // Add any actions here
    default:
      return state
  }
}

export const store = configureStore({
  reducer: rootReducer,
})

