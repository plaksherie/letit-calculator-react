import { WooApi } from "@/api/wooApi"
import { WooProduct } from "@/interfaces/Woo"
// import { RootState } from "@/store"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchWooProducts = createAsyncThunk(
	"wooProduct/fetchWooProducts",
	async (ids: number[]) => {
		const data = await WooApi.getProductsById(ids)
		return data
	}
)

interface WooProductState {
	wooProducts: [] | WooProduct[]
	status: "idle" | "pending" | "succeeded" | "failed"
	errors?: string
}

const initialState = {
	wooProducts: [],
	status: "idle",
	errors: undefined,
} as WooProductState

const wooProductSlice = createSlice({
	name: "wooProduct",
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchWooProducts.fulfilled, (state, action) => {
				state.status = "succeeded"
				state.wooProducts = action.payload
			})
			.addCase(fetchWooProducts.rejected, (state, action) => {
				state.status = "failed"
				state.errors = action.error.message
			})
	},
})

// export const selectAllWooProducts = (state: RootState) => state.wooProduct.wooProducts

export default wooProductSlice.reducer
