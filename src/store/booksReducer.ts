import { createSlice } from "@reduxjs/toolkit";
import { getBooks } from "./booksAction";

const initialState = {
    books: []
}

export const booksSlice = createSlice({
    name: "books",
    initialState: initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getBooks.fulfilled, (state,action)=>{
            state.books = action.payload
        })
    }
})

export default booksSlice.reducer