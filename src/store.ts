import residentialComplexSlice from "@/features/residentialComplex/residentialComplexSlice"
// import wooProductSlice from "@/features/wooProduct/wooProductSlice"
import linksSlice from "@/features/Links/LinksSlice"
import { configureStore } from "@reduxjs/toolkit"

const store = configureStore({
	reducer: {
		residentialComplex: residentialComplexSlice,
		links: linksSlice,
		// wooProduct: wooProductSlice,
	},
})

export default store

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
