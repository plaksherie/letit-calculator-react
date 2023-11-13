import {IEquipmentBlock} from "@/interfaces/ResidentialComplex.ts";

export interface IEquipmentProps {
    data: IEquipmentBlock
    onClick: (productId: number) => void
}