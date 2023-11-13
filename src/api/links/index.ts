import {AxiosResponse} from "axios";
import {apiWpClient} from "@/api";
import {ILinks} from "@/interfaces/ILinks.ts";


export const LinkApi = {
    async all(): Promise<ILinks> {
        const url = `/wp-json/options/calculator-links`
        const response: AxiosResponse<ILinks> = await apiWpClient.get(url)
        return response.data
    },
}