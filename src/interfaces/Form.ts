import {Control, FieldErrors, UseFormRegister, UseFormTrigger} from "react-hook-form";


export type Inputs = {
    addressConnect: string,
    personal: {
        surname: string
        firstname: string
        middle: string
        email: string
        phone: string
        comment?: string
    }
    passport: {
        series: string
        number: string
        issued: string
        date: string
        address: string
        birthday: string
    }
    agree: boolean,
}

export interface IOrderFormProps {
    register: UseFormRegister<Inputs>
    errors: FieldErrors<Inputs>
    trigger: UseFormTrigger<Inputs>
    control: Control<Inputs>
}

export enum IAction {
    calculator = 'calculator_send_form'
}

export interface IFormServiceItem {
    title: string
    price: string
}

export interface IFormEquipmentBlocks {
    title: string
    products: IFormServiceItem[]
}

export interface IFormService {
    title: string
    mainParameter: IFormServiceItem
    equipmentBlocks: IFormEquipmentBlocks[]
    additionalServices: IFormServiceItem[]
}

export interface IFormCalculatorData {
    residentialComplex: {
        title: string
    },
    services: IFormService[]
    servicesAmount: string
    productsAmount: string
    fullAmount: string
    inputs: Inputs
}