import { apiWpClient } from "@/api"
import { AxiosResponse } from "axios"
import {IAction, IFormCalculatorData, IFormCalculatorResponse} from "@/interfaces/Form.ts";


export const FormApi = {
    async calculator(data: IFormCalculatorData): Promise<IFormCalculatorResponse> {
        const url = `/wp-admin/admin-ajax.php?action=${IAction.calculator}`
        const response: AxiosResponse<IFormCalculatorResponse> = await apiWpClient.post(url, data)
        return response.data
    },
}