import { apiWpClient } from "@/api"
import { ResidentialComplex } from "@/interfaces/ResidentialComplex"
import { AxiosResponse } from "axios"

export const residentialComplexApi = {
	async all(): Promise<ResidentialComplex[]> {
		const url = "/wp-json/wp/v2/residential-complex?acf_format=standard&_fields=acf,id,title"
		const response: AxiosResponse<ResidentialComplex[]> = await apiWpClient.get(url)
		return response.data
	},
}
