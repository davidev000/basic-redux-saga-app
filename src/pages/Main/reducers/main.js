import { createSlice } from '@reduxjs/toolkit'

export const mainSlice = createSlice({
    name: 'main',
    initialState: {
        value: 0
    },
    reducers: {
        doSomethingWithState: (state, action) => {
            state.value += action.payload
        }
    }
})

export const { doSomethingWithState } = mainSlice.actions

export default mainSlice.reducer