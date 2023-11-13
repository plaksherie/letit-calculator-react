import {IMainParameter} from "@/interfaces/ResidentialComplex.ts";

export interface IMainParameterProps {
    parameter: IMainParameter
    active: boolean
    onClick?: () => void
}