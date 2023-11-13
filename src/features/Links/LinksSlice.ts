import {ILinks} from "@/interfaces/ILinks.ts";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {LinkApi} from "@/api/links";


export const fetchLinks = createAsyncThunk(
    "links/fetchLinks",
    async () => {
        const data = await LinkApi.all()
        return data
    }
)


interface LinksState {
    links: undefined | ILinks
    status: "idle" | "pending" | "succeeded" | "failed"
    errors?: string
}


const initialState = {
    links: undefined,
    status: "idle",
    errors: undefined,
} as LinksState


const linksSlice = createSlice({
    name: "links",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchLinks.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.links = action.payload
            })
            .addCase(fetchLinks.rejected, (state, action) => {
                state.status = "failed"
                state.errors = action.error.message
            })
    },
})

export const getLinks = (state: LinksState) =>
    state.links

export default linksSlice.reducer
