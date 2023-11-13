import { apiWpClient } from "@/api"
import { ResidentialComplex } from "@/interfaces/ResidentialComplex"
import { AxiosResponse } from "axios"
import {IAction, IFormCalculatorData} from "@/interfaces/Form.ts";


export const FormApi = {
    async calculator(data: IFormCalculatorData): Promise<ResidentialComplex[]> {
        const url = `/wp-admin/admin-ajax.php?action=${IAction.calculator}`
        const response: AxiosResponse<ResidentialComplex[]> = await apiWpClient.post(url, data)
        return response.data
    },
}