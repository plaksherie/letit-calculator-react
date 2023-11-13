import { apiWooClient } from "@/api"
import { AxiosResponse } from "axios"
import { WooProduct } from "@/interfaces/Woo"

export const WooApi = {
	async getProductsById(ids: number[]): Promise<WooProduct[]> {
		const url = `/wp-json/public-woo/v1/products?include=${ids.join(",")}`
		const response: AxiosResponse<WooProduct[]> = await apiWooClient.get(url)
		return response.data
	},
}
