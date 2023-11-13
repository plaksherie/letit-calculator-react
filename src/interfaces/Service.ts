import {IAdditionalService, IEquipmentBlock, IMainParameter} from "@/interfaces/ResidentialComplex.ts";

export interface IServiceProps {
    serviceIndex: number
    titleMainParameters: string
    mainParameters: IMainParameter[]
    equipmentBlocks: IEquipmentBlock[]
    additionalServices: IAdditionalService[]
    alertContent?: string
}