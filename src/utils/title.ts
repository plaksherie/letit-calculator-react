import {IAcfService} from "@/interfaces/ResidentialComplex.ts";

export const getTitleService = (service: IAcfService): string => {
    return service.title_in_form === '' ? service.title : service.title_in_form
}